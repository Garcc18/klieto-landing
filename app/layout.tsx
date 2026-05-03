import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Klieto · Agencia de Inteligencia Artificial para PYMEs en España',
  description:
    'Automatiza tu negocio con IA. Chatbots, automatización de procesos y webs inteligentes para PYMEs y autónomos en España. Diagnóstico gratuito.',
  keywords:
    'agencia inteligencia artificial España, automatización pymes, chatbot para empresas, consultoría IA autónomos',
  authors: [{ name: 'Klieto' }],
  metadataBase: new URL('https://klieto.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Klieto · Agencia de Inteligencia Artificial para PYMEs en España',
    description:
      'Automatiza tu negocio con IA. Chatbots, automatización de procesos y webs inteligentes para PYMEs y autónomos en España. Diagnóstico gratuito.',
    url: 'https://klieto.com',
    siteName: 'Klieto',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klieto · Agencia de IA para PYMEs en España',
    description:
      'Automatiza tu negocio con IA. Chatbots, automatización y webs inteligentes para PYMEs y autónomos.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Klieto',
  url: 'https://klieto.com',
  description:
    'Agencia de inteligencia artificial especializada en PYMEs y autónomos en España. Automatización de procesos, chatbots, consultoría e implementación de IA.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hola@klieto.com',
    contactType: 'customer service',
    areaServed: 'ES',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.linkedin.com/company/klieto',
    'https://www.instagram.com/klieto',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta implementar IA en una pyme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de la solución, pero trabajamos con presupuestos adaptados a cada negocio. Pide tu diagnóstico gratuito y te damos un precio real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito saber de tecnología para trabajar con vosotros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Nos encargamos de todo. Solo necesitas tener claros tus objetivos de negocio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En cuánto tiempo veré resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría de automatizaciones se implementan en 2-4 semanas. Los resultados (ahorro de tiempo, más leads) se notan desde el primer mes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Trabajáis con cualquier tipo de negocio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, aunque nos especializamos en PYMEs y autónomos de cualquier sector en España.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si no me convence la propuesta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El diagnóstico es completamente gratuito y sin compromiso. Si nuestra propuesta no encaja, no hay ningún problema.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Ofrecéis soporte después de la implementación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Todos nuestros proyectos incluyen acompañamiento post-lanzamiento para asegurarnos de que todo funciona correctamente.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
