import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_RETO = new Set([
  'falta-de-tiempo',
  'atencion-al-cliente',
  'procesos-manuales',
  'quiero-escalar',
])
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes.
// Provides basic protection within a warm server instance.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3
const RATE_WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

interface SubscribeBody {
  nombre: string
  email: string
  empresa: string
  telefono: string
  reto: string
  descripcion?: string
  rgpd?: boolean
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: 'Demasiadas solicitudes. Por favor, inténtalo más tarde.' },
        { status: 429 }
      )
    }

    const body = (await req.json()) as Partial<SubscribeBody>

    if (!body.rgpd) {
      return NextResponse.json(
        { message: 'Debes aceptar la política de privacidad.' },
        { status: 400 }
      )
    }

    const nombre = body.nombre?.trim()
    const email = body.email?.trim()
    const empresa = body.empresa?.trim()
    const telefono = body.telefono?.trim()
    const reto = body.reto?.trim()
    const descripcion = body.descripcion?.trim()

    if (!nombre || !email || !empresa || !telefono || !reto) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios.' },
        { status: 400 }
      )
    }

    if (
      nombre.length > 100 ||
      empresa.length > 200 ||
      telefono.length > 20 ||
      email.length > 254 ||
      (descripcion && descripcion.length > 1000)
    ) {
      return NextResponse.json(
        { message: 'Uno o más campos superan la longitud máxima permitida.' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: 'El email no tiene un formato válido.' },
        { status: 400 }
      )
    }

    if (!PHONE_REGEX.test(telefono)) {
      return NextResponse.json(
        { message: 'El teléfono no tiene un formato válido.' },
        { status: 400 }
      )
    }

    if (!ALLOWED_RETO.has(reto)) {
      return NextResponse.json(
        { message: 'Opción de reto no válida.' },
        { status: 400 }
      )
    }

    const webhookToken = process.env.N8N_WEBHOOK_TOKEN

    if (!webhookToken) {
      console.error('N8N_WEBHOOK_TOKEN not configured')
      return NextResponse.json(
        { message: 'Servicio no configurado. Contacta con hola@klieto.com' },
        { status: 500 }
      )
    }

    const response = await fetch('https://n8n.klieto.com/webhook-test/formulario-web', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: webhookToken,
      },
      body: JSON.stringify({ nombre, email, empresa, telefono, reto, descripcion }),
    })

    if (!response.ok) {
      console.error('Webhook error:', response.status)
      return NextResponse.json(
        { message: 'No se ha podido procesar la solicitud. Inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'ok' }, { status: 200 })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json(
      { message: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}
