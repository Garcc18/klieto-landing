'use client'

import { motion } from 'framer-motion'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const steps = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Una llamada de media hora',
    desc: 'Sin PowerPoint ni consultoría corporativa. Hablamos de qué tareas te comen el tiempo y qué llevas a mano. Nada más.',
    badge: 'Gratis',
    badgeCls: 'text-emerald-400 bg-emerald-400/[0.08] border-emerald-400/20',
    glowColor: 'rgba(16,185,129,0.2)',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
      </svg>
    ),
    title: 'Propuesta concreta en 48h',
    desc: 'Te mandamos exactamente lo que haríamos, cuánto tardará y qué costaría. Para tu caso específico, no para un cliente tipo.',
    badge: 'Máx. 48h',
    badgeCls: 'text-[#7B5CF0] bg-[#7B5CF0]/[0.08] border-[#7B5CF0]/20',
    glowColor: 'rgba(123,92,240,0.3)',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: 'En marcha en 2-4 semanas',
    desc: 'La mayoría de proyectos están activos en ese plazo. Si algo no acaba de encajar del todo, lo ajustamos sin dramas.',
    badge: 'Sin sorpresas',
    badgeCls: 'text-[#00D4FF] bg-[#00D4FF]/[0.08] border-[#00D4FF]/20',
    glowColor: 'rgba(0,212,255,0.2)',
  },
]

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] } },
}

const connectorVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}

export default function HowWeWork() {
  return (
    <section
      id="como-trabajamos"
      aria-labelledby="how-heading"
      className="py-20 sm:py-28 bg-[#0A0A0F]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight"
          >
            Empezar es más fácil de lo que crees
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Sin papeleo ni procesos eternos. Esto es lo que ocurre a partir de que nos escribes.
          </p>
        </motion.div>

        {/* Desktop: grid centrado */}
        <motion.div
          className="hidden md:grid grid-cols-[1fr_64px_1fr_64px_1fr] items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
          aria-label="Pasos del proceso"
        >
          {steps.map((step, i) => (
            <>
              {/* Step card */}
              <motion.div
                key={step.num}
                variants={stepVariants}
                className="flex flex-col items-center text-center group"
                role="listitem"
              >
                <div className="relative mb-5">
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/25 tracking-widest">
                    {step.num}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.07, transition: { duration: 0.2 } }}
                    className="relative w-14 h-14 rounded-full bg-[#12121A] border border-white/[0.08] flex items-center justify-center text-[#7B5CF0] cursor-default"
                  >
                    {step.icon}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: `0 0 22px ${step.glowColor}` }}
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>

                <h3 className="text-sm font-medium text-white mb-2 group-hover:text-[#7B5CF0] transition-colors duration-200 leading-snug px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[200px] mb-3">
                  {step.desc}
                </p>
                <span className={`inline-flex text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${step.badgeCls}`}>
                  {step.badge}
                </span>
              </motion.div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center pt-7" aria-hidden="true">
                  <div className="relative w-full flex items-center">
                    <motion.div
                      variants={connectorVariants}
                      className="h-[1px] w-full bg-gradient-to-r from-[#7B5CF0]/30 to-[#7B5CF0]/60"
                    />
                    <svg className="absolute right-0 w-3 h-3 text-[#7B5CF0]/60 -mr-1" fill="none" viewBox="0 0 8 12">
                      <path d="M1 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          ))}
        </motion.div>

        {/* Mobile: columna de tarjetas */}
        <motion.div
          className="md:hidden flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
          aria-label="Pasos del proceso"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="relative flex items-start gap-4 p-5 rounded-[12px] bg-[#12121A] border border-white/[0.08]"
              role="listitem"
            >
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[38px] -bottom-3 w-[1px] h-3 bg-gradient-to-b from-[#7B5CF0]/30 to-transparent"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#0A0A0F] border border-white/[0.08] flex items-center justify-center text-[#7B5CF0]">
                  {step.icon}
                </div>
                <span className="absolute -top-1.5 -left-1 text-[9px] font-mono text-white/25">
                  {step.num}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white mb-1 leading-snug">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-2.5">{step.desc}</p>
                <span className={`inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full border ${step.badgeCls}`}>
                  {step.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(123,92,240,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('contacto')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#7B5CF0] hover:bg-[#6A4DE0] rounded-[8px] transition-colors duration-200 group"
          >
            Reservar llamada gratuita
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
