import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Aviso Legal · Klieto',
  description: 'Aviso legal y condiciones de uso del sitio web de Klieto.',
  robots: { index: false, follow: false },
}

const h2 = 'text-lg font-semibold text-white mt-10 mb-3'
const p = 'text-sm text-white/60 leading-relaxed mb-4'
const a = 'text-[#7B5CF0] hover:underline'
const strong = 'text-white/80 font-medium'

export default function AvisoLegal() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="2 de mayo de 2026">
      <h2 className={h2}>1. Datos identificativos</h2>
      <p className={p}>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular
        de este sitio web es:
      </p>
      <p className={p}>
        <span className={strong}>Denominación:</span> Klieto
        <br />
        <span className={strong}>Correo electrónico:</span>{' '}
        <a href="mailto:hola@klieto.com" className={a}>
          hola@klieto.com
        </a>
        <br />
        <span className={strong}>Sitio web:</span>{' '}
        <a href="https://klieto.com" className={a}>
          https://klieto.com
        </a>
      </p>

      <h2 className={h2}>2. Objeto y condiciones de uso</h2>
      <p className={p}>
        El acceso y uso de este sitio web está condicionado a la aceptación de las presentes
        condiciones de uso. El usuario que acceda a klieto.com acepta quedar vinculado por las
        mismas, que podrán ser modificadas sin previo aviso. Te recomendamos revisarlas
        periódicamente.
      </p>
      <p className={p}>
        Klieto se reserva el derecho de modificar, suspender o interrumpir el acceso al sitio web
        en cualquier momento y sin previo aviso, sin que ello genere responsabilidad alguna.
      </p>

      <h2 className={h2}>3. Propiedad intelectual e industrial</h2>
      <p className={p}>
        Todos los contenidos de este sitio web —textos, imágenes, logotipos, diseño gráfico, código
        fuente y demás elementos— son propiedad de Klieto o de terceros que han autorizado su uso, y
        están protegidos por la legislación española e internacional en materia de propiedad
        intelectual e industrial.
      </p>
      <p className={p}>
        Queda expresamente prohibida cualquier reproducción, distribución, comunicación pública,
        transformación o cualquier otra forma de explotación, total o parcial, de los contenidos de
        este sitio sin autorización previa y por escrito de Klieto.
      </p>

      <h2 className={h2}>4. Limitación de responsabilidad</h2>
      <p className={p}>
        Klieto no garantiza la disponibilidad continua ni la ausencia de errores en los contenidos
        de este sitio web, y no se hace responsable de los daños de cualquier naturaleza que puedan
        derivarse del uso del sitio o de la imposibilidad de acceder al mismo.
      </p>
      <p className={p}>
        Este sitio puede contener enlaces a sitios web de terceros. Klieto no controla ni se
        responsabiliza de los contenidos, políticas de privacidad o prácticas de dichos sitios.
      </p>

      <h2 className={h2}>5. Protección de datos</h2>
      <p className={p}>
        El tratamiento de datos personales derivado del uso de este sitio web se rige por nuestra{' '}
        <Link href="/politica-de-privacidad" className={a}>
          política de privacidad
        </Link>
        .
      </p>

      <h2 className={h2}>6. Legislación aplicable y jurisdicción</h2>
      <p className={p}>
        Las presentes condiciones se rigen por la legislación española. Para la resolución de
        cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten,
        con renuncia expresa a cualquier otro fuero, a la jurisdicción de los juzgados y tribunales
        españoles.
      </p>
    </LegalLayout>
  )
}
