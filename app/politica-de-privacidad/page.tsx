import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de Privacidad · Klieto',
  description: 'Información sobre el tratamiento de tus datos personales por parte de Klieto.',
  robots: { index: false, follow: false },
}

const h2 = 'text-lg font-semibold text-white mt-10 mb-3'
const p = 'text-sm text-white/60 leading-relaxed mb-4'
const ul = 'list-disc list-outside pl-5 text-sm text-white/60 space-y-1.5 mb-4'
const a = 'text-[#7B5CF0] hover:underline'
const strong = 'text-white/80 font-medium'

export default function PoliticaDePrivacidad() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="2 de mayo de 2026">
      <p className={p}>
        En Klieto nos tomamos muy en serio la protección de tus datos personales. Esta política
        explica qué datos recopilamos, cómo los utilizamos y cuáles son tus derechos al amparo del
        Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de
        Datos Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2 className={h2}>1. Responsable del tratamiento</h2>
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

      <h2 className={h2}>2. Datos que recopilamos</h2>
      <p className={p}>
        Cuando cumplimentas el formulario de contacto de nuestra web, recopilamos los siguientes
        datos personales:
      </p>
      <ul className={ul}>
        <li>Nombre</li>
        <li>Dirección de correo electrónico</li>
        <li>Nombre de la empresa u organización</li>
        <li>Número de teléfono</li>
        <li>Descripción del reto o proyecto empresarial (campo opcional)</li>
      </ul>
      <p className={p}>
        No recopilamos datos de categorías especiales (datos de salud, ideología, origen racial,
        etc.).
      </p>

      <h2 className={h2}>3. Finalidades del tratamiento</h2>
      <p className={p}>Tratamos tus datos para las siguientes finalidades:</p>
      <ul className={ul}>
        <li>Atender tu solicitud de diagnóstico gratuito e información sobre nuestros servicios.</li>
        <li>Contactar contigo para hacerte seguimiento de tu solicitud.</li>
        <li>
          Enviarte información sobre nuestros servicios, siempre que hayas dado tu consentimiento
          expreso.
        </li>
      </ul>

      <h2 className={h2}>4. Base legal del tratamiento</h2>
      <p className={p}>El tratamiento de tus datos se basa en las siguientes bases jurídicas:</p>
      <ul className={ul}>
        <li>
          <span className={strong}>Tu consentimiento</span> (art. 6.1.a RGPD), expresado al marcar
          la casilla de aceptación de esta política en el formulario de contacto.
        </li>
        <li>
          <span className={strong}>Interés legítimo</span> (art. 6.1.f RGPD) en el seguimiento de
          las solicitudes de información sobre nuestros servicios.
        </li>
      </ul>
      <p className={p}>
        Puedes retirar tu consentimiento en cualquier momento sin que ello afecte a la licitud del
        tratamiento previo a su retirada.
      </p>

      <h2 className={h2}>5. Plazo de conservación</h2>
      <p className={p}>
        Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y, en su caso,
        mientras dure la relación comercial. Una vez finalizada esta, los datos se mantendrán
        bloqueados durante los plazos legalmente establecidos y serán suprimidos transcurridos los
        mismos.
      </p>

      <h2 className={h2}>6. Destinatarios de los datos</h2>
      <p className={p}>
        No cedemos tus datos personales a terceros salvo obligación legal. Para la gestión y
        automatización de solicitudes podemos utilizar herramientas alojadas en la Unión Europea o
        con garantías adecuadas, que actúan como encargados del tratamiento conforme al art. 28
        RGPD.
      </p>

      <h2 className={h2}>7. Transferencias internacionales</h2>
      <p className={p}>
        No realizamos transferencias de datos fuera del Espacio Económico Europeo, salvo en los
        supuestos en que los proveedores de servicios estén adheridos a acuerdos de protección de
        datos reconocidos por la Comisión Europea o cuenten con cláusulas contractuales tipo.
      </p>

      <h2 className={h2}>8. Tus derechos</h2>
      <p className={p}>
        Al amparo de la normativa vigente, tienes los siguientes derechos respecto a tus datos
        personales:
      </p>
      <ul className={ul}>
        <li>
          <span className={strong}>Acceso:</span> conocer qué datos personales tratamos sobre ti.
        </li>
        <li>
          <span className={strong}>Rectificación:</span> corregir datos inexactos o incompletos.
        </li>
        <li>
          <span className={strong}>Supresión:</span> solicitar la eliminación de tus datos cuando ya
          no sean necesarios para la finalidad para la que fueron recogidos.
        </li>
        <li>
          <span className={strong}>Limitación:</span> solicitar que suspendamos el tratamiento en
          determinadas circunstancias previstas en el RGPD.
        </li>
        <li>
          <span className={strong}>Portabilidad:</span> recibir tus datos en formato estructurado,
          de uso común y legible por máquina.
        </li>
        <li>
          <span className={strong}>Oposición:</span> oponerte al tratamiento basado en interés
          legítimo.
        </li>
        <li>
          <span className={strong}>Retirada del consentimiento:</span> sin efecto sobre el
          tratamiento ya realizado.
        </li>
      </ul>
      <p className={p}>
        Para ejercer cualquiera de estos derechos, escríbenos a{' '}
        <a href="mailto:hola@klieto.com" className={a}>
          hola@klieto.com
        </a>{' '}
        indicando el derecho que deseas ejercer y adjuntando una copia de tu documento de identidad.
      </p>
      <p className={p}>
        Si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente, tienes
        derecho a presentar una reclamación ante la{' '}
        <span className={strong}>
          Agencia Española de Protección de Datos (AEPD)
        </span>{' '}
        a través de su sitio web{' '}
        <a
          href="https://www.aepd.es"
          target="_blank"
          rel="noopener noreferrer"
          className={a}
        >
          www.aepd.es
        </a>
        .
      </p>

      <h2 className={h2}>9. Cookies</h2>
      <p className={p}>
        Este sitio web utiliza únicamente cookies técnicas necesarias para su correcto
        funcionamiento. Puedes obtener información detallada en nuestra{' '}
        <Link href="/cookies" className={a}>
          política de cookies
        </Link>
        .
      </p>

      <h2 className={h2}>10. Modificaciones de esta política</h2>
      <p className={p}>
        Podemos actualizar esta política de privacidad para adaptarla a cambios normativos o en
        nuestros servicios. Te recomendamos revisarla periódicamente. La fecha de la última
        actualización siempre estará indicada al inicio de esta página.
      </p>
    </LegalLayout>
  )
}
