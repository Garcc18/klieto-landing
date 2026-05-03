'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Klieto - Inicio"
          className="text-xl font-semibold text-white tracking-tight"
        >
          Kliet<span className="text-[#7B5CF0]">o</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <button
          onClick={() => handleNavClick('#contacto')}
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#7B5CF0] hover:bg-[#6A4DE0] rounded-[8px] transition-colors duration-200"
          aria-label="Solicitar diagnóstico gratuito"
        >
          Diagnóstico gratuito
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-5 h-[2px] bg-white rounded transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white rounded transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white rounded transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#12121A] border-t border-white/[0.08] px-4 pb-4"
          role="dialog"
          aria-label="Menú de navegación móvil"
        >
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick('#contacto')}
                className="w-full py-3 text-sm font-medium text-white bg-[#7B5CF0] hover:bg-[#6A4DE0] rounded-[8px] transition-colors"
              >
                Diagnóstico gratuito
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
