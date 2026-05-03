'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Cuánto cuesta implementar IA en una pyme?',
    a: 'Depende de la solución, pero trabajamos con presupuestos adaptados a cada negocio. Pide tu diagnóstico gratuito y te damos un precio real.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con vosotros?',
    a: 'No. Nos encargamos de todo. Solo necesitas tener claros tus objetivos de negocio.',
  },
  {
    q: '¿En cuánto tiempo veré resultados?',
    a: 'La mayoría de automatizaciones se implementan en 2-4 semanas. Los resultados (ahorro de tiempo, más leads) se notan desde el primer mes.',
  },
  {
    q: '¿Trabajáis con cualquier tipo de negocio?',
    a: 'Sí, aunque nos especializamos en PYMEs y autónomos de cualquier sector en España.',
  },
  {
    q: '¿Qué pasa si no me convence la propuesta?',
    a: 'El diagnóstico es completamente gratuito y sin compromiso. Si nuestra propuesta no encaja, no hay ningún problema.',
  },
  {
    q: '¿Ofrecéis soporte después de la implementación?',
    a: 'Sí. Todos nuestros proyectos incluyen acompañamiento post-lanzamiento para asegurarnos de que todo funciona correctamente.',
  },
]

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className="border-b border-white/[0.08] last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors leading-snug">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 text-[#7B5CF0] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/50 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 bg-[#0A0A0F]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight"
          >
            Preguntas frecuentes
          </h2>
          <p className="text-white/50">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[12px] bg-[#12121A] border border-white/[0.08] px-6"
          role="list"
          aria-label="Preguntas frecuentes"
        >
          {faqs.map((faq, i) => (
            <div key={faq.q} role="listitem">
              <AccordionItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
