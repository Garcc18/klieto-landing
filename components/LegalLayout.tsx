import Link from 'next/link'
import Footer from './Footer'

interface Props {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <header className="bg-[#0A0A0F] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Klieto - Inicio"
            className="text-xl font-semibold text-white tracking-tight"
          >
            Kliet<span className="text-[#7B5CF0]">o</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-10 pb-8 border-b border-white/[0.06]">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-3 tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-white/40">Última actualización: {lastUpdated}</p>
        </div>
        {children}
      </main>

      <Footer />
    </div>
  )
}
