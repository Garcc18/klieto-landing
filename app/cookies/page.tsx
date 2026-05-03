import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de Cookies · Klieto',
  description: 'Información sobre el uso de cookies en el sitio web de Klieto.',
  robots: { index: false, follow: false },
}

const h2 = 'text-lg font-semibold text-white mt-10 mb-3'
const p = 'text-sm text-white/60 leading-relaxed mb-4'
const a = 'text-[#7B5CF0] hover:underline'
const strong = 'text-white/80 font-medium'

export default function Cookies() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="2 de mayo de 2026">
      <p className={p}>
        Esta política explica qué son las cookies, cuáles utilizamos en{' '}
        <span className={strong}>klieto.com</span> y cómo puedes gestionarlas.
      </p>

      <h2 className={h2}>1. ¿Qué son las cookies?</h2>
      <p className={p}>
        Las cookies son pequeños ficheros de texto que se almacenan en tu dispositivo cuando visitas
        un sitio web. Sirven para que el sitio recuerde tus acciones o preferencias durante un
        tiempo determinado, mejorando tu experiencia de navegación.
      </p>

      <h2 className={h2}>2. Cookies que utilizamos</h2>
      <p className={p}>
        En klieto.com utilizamos únicamente cookies técnicas estrictamente necesarias para el
        correcto funcionamiento del sitio. No empleamos cookies analíticas, de publicidad ni de
        terceros.
      </p>

      <div className="overflow-x-auto mb-6 rounded-[8px] border border-white/[0.08]">
        <table className="w-full text-sm text-white/60 min-w-[520px]">
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.03]">
              <th className="text-left px-4 py-3 text-white/80 font-medium">Cookie</th>
              <th className="text-left px-4 py-3 text-white/80 font-medium">Tipo</th>
              <th className="text-left px-4 py-3 text-white/80 font-medium">Finalidad</th>
              <th className="text-left px-4 py-3 text-white/80 font-medium">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 font-mono text-xs text-white/70 whitespace-nowrap">
                klieto-cookie-consent
              </td>
              <td className="px-4 py-3 whitespace-nowrap">Técnica</td>
              <td className="px-4 py-3">Almacena tu preferencia sobre el aviso de cookies</td>
              <td className="px-4 py-3 whitespace-nowrap">Persistente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={p}>
        No cedemos datos derivados de cookies a ningún tercero.
      </p>

      <h2 className={h2}>3. ¿Cómo gestionar las cookies?</h2>
      <p className={p}>
        Puedes retirar tu consentimiento en cualquier momento eliminando las cookies almacenadas
        desde los ajustes de privacidad de tu navegador. La ruta habitual es:
      </p>
      <ul className="list-none text-sm text-white/60 space-y-2 mb-4 pl-0">
        <li>
          <span className={strong}>Google Chrome:</span> Menú → Configuración → Privacidad y
          seguridad → Cookies y otros datos de sitios
        </li>
        <li>
          <span className={strong}>Mozilla Firefox:</span> Menú → Ajustes → Privacidad y seguridad
          → Cookies y datos del sitio
        </li>
        <li>
          <span className={strong}>Safari:</span> Preferencias → Privacidad → Gestionar datos de
          sitios web
        </li>
        <li>
          <span className={strong}>Microsoft Edge:</span> Menú → Configuración → Privacidad,
          búsqueda y servicios → Cookies y permisos del sitio
        </li>
      </ul>
      <p className={p}>
        Ten en cuenta que deshabilitar ciertas cookies puede afectar al correcto funcionamiento del
        sitio.
      </p>

      <h2 className={h2}>4. Más información</h2>
      <p className={p}>
        Para cualquier consulta sobre nuestra política de cookies puedes contactarnos en{' '}
        <a href="mailto:hola@klieto.com" className={a}>
          hola@klieto.com
        </a>
        . Encontrarás más información sobre el tratamiento de tus datos personales en nuestra{' '}
        <Link href="/politica-de-privacidad" className={a}>
          política de privacidad
        </Link>
        .
      </p>
    </LegalLayout>
  )
}
