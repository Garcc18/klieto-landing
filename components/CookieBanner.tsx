'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('klieto-cookie-consent')
    if (!stored) setVisible(true)
  }, [])

  const handle = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('klieto-cookie-consent', value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-50"
    >
      <div className="max-w-4xl mx-auto bg-[#1A1A26] border border-white/[0.10] rounded-[12px] p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white/70 leading-relaxed">
              Usamos cookies técnicas necesarias para el funcionamiento del sitio. Puedes consultar
              nuestra{' '}
              <Link href="/cookies" className="text-[#7B5CF0] hover:underline">
                política de cookies
              </Link>{' '}
              y{' '}
              <Link href="/politica-de-privacidad" className="text-[#7B5CF0] hover:underline">
                política de privacidad
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handle('rejected')}
              className="text-xs text-white/50 hover:text-white/80 transition-colors px-3 py-2 rounded-[8px] border border-white/[0.08] hover:border-white/20"
            >
              Solo necesarias
            </button>
            <button
              onClick={() => handle('accepted')}
              className="text-xs font-medium text-white bg-[#7B5CF0] hover:bg-[#6A4DE0] px-5 py-2 rounded-[8px] transition-colors"
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
