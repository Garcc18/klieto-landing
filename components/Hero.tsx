'use client'

import { motion } from 'framer-motion'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* Fixed particle positions to avoid hydration mismatch */
const PARTICLES = [
  { x: 8,  y: 18, size: 2,   dur: 4.2, del: 0   },
  { x: 18, y: 72, size: 1.5, dur: 5.8, del: 1.2 },
  { x: 29, y: 42, size: 1,   dur: 6.1, del: 0.7 },
  { x: 38, y: 85, size: 2.5, dur: 4.7, del: 2.1 },
  { x: 52, y: 15, size: 1.5, dur: 5.3, del: 0.3 },
  { x: 63, y: 58, size: 1,   dur: 7.2, del: 1.8 },
  { x: 72, y: 30, size: 2,   dur: 4.9, del: 0.9 },
  { x: 78, y: 78, size: 1.5, dur: 6.4, del: 2.5 },
  { x: 85, y: 50, size: 1,   dur: 5.1, del: 0.5 },
  { x: 92, y: 22, size: 2,   dur: 4.6, del: 1.6 },
  { x: 5,  y: 55, size: 1.5, dur: 6.8, del: 3.1 },
  { x: 45, y: 90, size: 1,   dur: 5.5, del: 0.2 },
  { x: 96, y: 65, size: 2,   dur: 4.3, del: 1.4 },
  { x: 22, y: 95, size: 1.5, dur: 6.2, del: 2.8 },
  { x: 57, y: 38, size: 1,   dur: 7.0, del: 0.6 },
  { x: 88, y: 88, size: 2,   dur: 4.8, del: 3.5 },
  { x: 14, y: 8,  size: 1.5, dur: 5.7, del: 1.9 },
  { x: 70, y: 95, size: 1,   dur: 6.3, del: 0.4 },
]

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 + i * 0.07 },
  }),
}

const HEADLINE_WORDS = ['Automatiza', 'tu', 'negocio', 'con', 'Inteligencia', 'Artificial']

export default function Hero() {
  return (
    <section
      aria-label="Hero principal"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F] pt-16"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid opacity-100" aria-hidden="true" />

      {/* Radial gradient halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(123,92,240,0.13) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background:
                i % 3 === 0
                  ? `rgba(123,92,240,${0.3 + (i % 4) * 0.1})`
                  : i % 3 === 1
                  ? `rgba(0,212,255,${0.25 + (i % 3) * 0.1})`
                  : `rgba(255,255,255,${0.12 + (i % 5) * 0.04})`,
              animation: `particleFloat ${p.dur}s ${p.del}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/60"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CF0] animate-pulse-slow inline-block" aria-hidden="true" />
          Herramientas punteras · Implementación en semanas · Soporte en español
        </motion.div>

        {/* H1 — word-by-word reveal */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-white leading-tight tracking-tight mb-6">
          {HEADLINE_WORDS.map((word, i) => {
            const isAI = word === 'Inteligencia' || word === 'Artificial'
            return (
              <motion.span
                key={word + i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={`inline-block mr-[0.3em] ${isAI ? 'text-[#7B5CF0]' : ''}`}
              >
                {word}
              </motion.span>
            )
          })}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ayudamos a PYMEs y autónomos en España a ahorrar tiempo y escalar con IA.
          Sin conocimientos técnicos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.78, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(123,92,240,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('contacto')}
            className="px-6 py-3 text-sm font-medium text-white bg-[#7B5CF0] hover:bg-[#6A4DE0] rounded-[8px] transition-colors duration-200 w-full sm:w-auto"
            aria-label="Ir al formulario de diagnóstico gratuito"
          >
            Quiero mi diagnóstico gratuito
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('servicios')}
            className="px-6 py-3 text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-[8px] transition-all duration-200 w-full sm:w-auto"
            aria-label="Ver sección de servicios"
          >
            Ver servicios
          </motion.button>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0F)' }}
        aria-hidden="true"
      />
    </section>
  )
}
