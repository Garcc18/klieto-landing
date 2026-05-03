'use client'

import { motion } from 'framer-motion'
import Carousel from './Carousel'

/* ─── SVG Illustrations ─────────────────────────────── */

const TimeIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="pb1-glow" cx="45%" cy="50%" r="45%">
        <stop stopColor="#7B5CF0" stopOpacity="0.18" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="170" fill="rgba(123,92,240,0.04)" />
    <ellipse cx="140" cy="85" rx="75" ry="75" fill="url(#pb1-glow)" />
    {/* Clock outer ring */}
    <circle cx="140" cy="85" r="58" stroke="rgba(123,92,240,0.25)" strokeWidth="1.5" />
    <circle cx="140" cy="85" r="50" fill="rgba(123,92,240,0.06)" stroke="rgba(123,92,240,0.4)" strokeWidth="2" />
    {/* Clock ticks */}
    {Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180)
      const r1 = 42, r2 = i % 3 === 0 ? 36 : 39
      return (
        <line
          key={i}
          x1={140 + r1 * Math.cos(angle)}
          y1={85 + r1 * Math.sin(angle)}
          x2={140 + r2 * Math.cos(angle)}
          y2={85 + r2 * Math.sin(angle)}
          stroke={i % 3 === 0 ? 'rgba(123,92,240,0.6)' : 'rgba(255,255,255,0.15)'}
          strokeWidth={i % 3 === 0 ? '2' : '1'}
          strokeLinecap="round"
        />
      )
    })}
    {/* Hour hand - pointing to ~11 */}
    <line x1="140" y1="85" x2="126" y2="54" stroke="rgba(255,255,255,0.75)" strokeWidth="3" strokeLinecap="round" />
    {/* Minute hand - pointing to ~10 */}
    <line x1="140" y1="85" x2="117" y2="70" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
    {/* Second hand */}
    <line x1="140" y1="85" x2="162" y2="108" stroke="rgba(255,60,60,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Center dot */}
    <circle cx="140" cy="85" r="4" fill="rgba(123,92,240,0.8)" />
    <circle cx="140" cy="85" r="2" fill="rgba(255,255,255,0.9)" />
    {/* Task cards orbiting */}
    {/* Task 1 */}
    <rect x="202" y="28" width="68" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,80,80,0.3)" strokeWidth="1" />
    <rect x="208" y="34" width="30" height="3" rx="1.5" fill="rgba(255,80,80,0.5)" />
    <rect x="208" y="40" width="20" height="3" rx="1" fill="rgba(255,255,255,0.15)" />
    <line x1="200" y1="39" x2="197" y2="58" stroke="rgba(255,80,80,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
    {/* Task 2 */}
    <rect x="214" y="66" width="72" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,130,50,0.3)" strokeWidth="1" />
    <rect x="220" y="72" width="40" height="3" rx="1.5" fill="rgba(255,130,50,0.5)" />
    <rect x="220" y="78" width="28" height="3" rx="1" fill="rgba(255,255,255,0.15)" />
    {/* Task 3 */}
    <rect x="202" y="108" width="68" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,80,80,0.25)" strokeWidth="1" />
    <rect x="208" y="114" width="35" height="3" rx="1.5" fill="rgba(255,80,80,0.4)" />
    <rect x="208" y="120" width="22" height="3" rx="1" fill="rgba(255,255,255,0.12)" />
    {/* Task 4 */}
    <rect x="36" y="38" width="62" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,130,50,0.25)" strokeWidth="1" />
    <rect x="42" y="44" width="28" height="3" rx="1.5" fill="rgba(255,130,50,0.45)" />
    <rect x="42" y="50" width="18" height="3" rx="1" fill="rgba(255,255,255,0.12)" />
    {/* Exclamation badge */}
    <circle cx="191" cy="37" r="9" fill="rgba(255,80,80,0.2)" stroke="rgba(255,80,80,0.5)" strokeWidth="1.2" />
    <text x="191" y="41" textAnchor="middle" fill="rgba(255,100,100,0.9)" fontSize="10" fontFamily="system-ui" fontWeight="700">!</text>
    {/* Decorative dots */}
    <circle cx="305" cy="25" r="2" fill="rgba(123,92,240,0.4)" />
    <circle cx="18" cy="150" r="1.5" fill="rgba(0,212,255,0.3)" />
  </svg>
)

const NoResponseIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="pb2-glow" cx="30%" cy="35%" r="40%">
        <stop stopColor="#00D4FF" stopOpacity="0.1" />
        <stop offset="1" stopColor="#00D4FF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="170" fill="rgba(10,10,20,0.3)" />
    <rect width="320" height="170" fill="url(#pb2-glow)" />
    {/* Stars */}
    {[
      [40, 22, 1.5], [70, 15, 1], [100, 30, 1.2], [145, 18, 1], [180, 25, 1.5],
      [220, 12, 1], [260, 28, 1.2], [290, 18, 1], [310, 38, 1], [30, 50, 0.8],
    ].map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill="rgba(255,255,255,0.5)" />
    ))}
    {/* Moon */}
    <circle cx="80" cy="62" r="38" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5" />
    <circle cx="96" cy="52" r="30" fill="#0A0A0F" />
    {/* Moon craters */}
    <circle cx="64" cy="70" r="5" fill="none" stroke="rgba(0,212,255,0.12)" strokeWidth="1" />
    <circle cx="72" cy="82" r="3" fill="none" stroke="rgba(0,212,255,0.08)" strokeWidth="0.8" />
    {/* Phone device */}
    <rect x="155" y="24" width="88" height="130" rx="12" fill="rgba(18,18,26,0.9)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
    <rect x="178" y="18" width="42" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    <circle cx="199" cy="146" r="5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    {/* Screen - dark mode messages */}
    <rect x="163" y="36" width="72" height="10" rx="4" fill="rgba(255,255,255,0.06)" />
    <rect x="175" y="40" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
    {/* Unread message bubbles */}
    <rect x="165" y="52" width="56" height="16" rx="6" fill="rgba(123,92,240,0.25)" stroke="rgba(123,92,240,0.35)" strokeWidth="0.8" />
    <rect x="171" y="57" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
    <rect x="171" y="63" width="26" height="3" rx="1" fill="rgba(255,255,255,0.25)" />
    <rect x="165" y="73" width="48" height="14" rx="6" fill="rgba(123,92,240,0.2)" stroke="rgba(123,92,240,0.25)" strokeWidth="0.8" />
    <rect x="171" y="78" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.35)" />
    <rect x="171" y="84" width="20" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="165" y="92" width="60" height="14" rx="6" fill="rgba(123,92,240,0.25)" stroke="rgba(123,92,240,0.3)" strokeWidth="0.8" />
    <rect x="171" y="97" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.35)" />
    <rect x="171" y="103" width="30" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
    {/* Offline status */}
    <rect x="165" y="116" width="68" height="16" rx="4" fill="rgba(255,255,255,0.03)" />
    <circle cx="173" cy="124" r="4" fill="rgba(100,100,100,0.4)" />
    <rect x="182" y="121" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
    <rect x="182" y="127" width="20" height="3" rx="1" fill="rgba(255,80,80,0.3)" />
    {/* Notification badges */}
    <circle cx="229" cy="52" r="9" fill="rgba(255,80,80,0.85)" />
    <text x="229" y="56" textAnchor="middle" fill="white" fontSize="8.5" fontFamily="system-ui" fontWeight="700">3</text>
    {/* Zzz sleep indicator */}
    <text x="264" y="85" fill="rgba(255,255,255,0.3)" fontSize="18" fontFamily="system-ui" fontWeight="300">z</text>
    <text x="276" y="70" fill="rgba(255,255,255,0.2)" fontSize="14" fontFamily="system-ui" fontWeight="300">z</text>
    <text x="286" y="58" fill="rgba(255,255,255,0.12)" fontSize="10" fontFamily="system-ui" fontWeight="300">z</text>
    {/* Decorative */}
    <circle cx="305" cy="155" r="2" fill="rgba(0,212,255,0.35)" />
  </svg>
)

const GrowthCeilingIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="pb3-bar1" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#7B5CF0" stopOpacity="0.7" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="pb3-bar2" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#7B5CF0" stopOpacity="0.6" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0.12" />
      </linearGradient>
      <linearGradient id="pb3-bar3" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#7B5CF0" stopOpacity="0.55" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="pb3-cut1" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#7B5CF0" stopOpacity="0.12" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="rgba(123,92,240,0.03)" />
    {/* Grid baseline */}
    {[50, 75, 100, 125].map((y) => (
      <line key={y} x1="40" y1={y} x2="290" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
    ))}
    <line x1="40" y1="145" x2="290" y2="145" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    {/* Y axis */}
    <line x1="40" y1="30" x2="40" y2="145" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    {/* Bars growing */}
    {/* Bar 1 */}
    <rect x="58" y="105" width="34" height="40" rx="3" fill="url(#pb3-bar1)" />
    <text x="75" y="159" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="system-ui">Q1</text>
    {/* Bar 2 */}
    <rect x="106" y="88" width="34" height="57" rx="3" fill="url(#pb3-bar2)" />
    <text x="123" y="159" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="system-ui">Q2</text>
    {/* Bar 3 */}
    <rect x="154" y="68" width="34" height="77" rx="3" fill="url(#pb3-bar3)" />
    <text x="171" y="159" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="system-ui">Q3</text>
    {/* Bar 4 - cut off by ceiling */}
    <rect x="202" y="50" width="34" height="95" rx="3" fill="url(#pb3-cut1)" stroke="rgba(123,92,240,0.2)" strokeWidth="1" strokeDasharray="3 2" />
    <text x="219" y="159" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="system-ui">Q4</text>
    {/* Ceiling - thick red line */}
    <rect x="38" y="48" width="254" height="4" rx="2" fill="rgba(255,80,80,0.25)" />
    <line x1="38" y1="50" x2="292" y2="50" stroke="rgba(255,80,80,0.7)" strokeWidth="2" />
    {/* Ceiling label */}
    <rect x="248" y="40" width="50" height="14" rx="4" fill="rgba(255,80,80,0.12)" stroke="rgba(255,80,80,0.35)" strokeWidth="1" />
    <text x="273" y="50" textAnchor="middle" fill="rgba(255,100,100,0.85)" fontSize="7" fontFamily="system-ui" fontWeight="600">TECHO</text>
    {/* Arrows trying to break through */}
    <path d="M 219 46 L 219 28" stroke="rgba(123,92,240,0.5)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
    <path d="M 213 33 L 219 26 L 225 33" fill="none" stroke="rgba(123,92,240,0.6)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    {/* Blocked X */}
    <circle cx="219" cy="36" r="7" fill="rgba(255,80,80,0.1)" stroke="rgba(255,80,80,0.3)" strokeWidth="1" />
    <path d="M 215 32 L 223 40 M 223 32 L 215 40" stroke="rgba(255,80,80,0.6)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Trend line on growing bars */}
    <path d="M 75 105 Q 123 88 171 68" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
    {/* Decorative */}
    <circle cx="305" cy="22" r="2" fill="rgba(123,92,240,0.4)" />
    <circle cx="22" cy="155" r="1.5" fill="rgba(0,212,255,0.3)" />
  </svg>
)

/* ─── Pain point data ─────────────────────────────── */

const painPoints = [
  {
    Illustration: TimeIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    accentColor: 'rgba(255,80,80,0.7)',
    borderColor: 'rgba(255,80,80,0.2)',
    title: 'Tareas repetitivas que te roban horas cada día',
    desc: 'Copiar datos, responder los mismos correos, actualizar hojas de cálculo... trabajo mecánico que no añade valor real a tu negocio.',
  },
  {
    Illustration: NoResponseIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    accentColor: 'rgba(0,212,255,0.7)',
    borderColor: 'rgba(0,212,255,0.15)',
    title: 'Clientes sin respuesta inmediata fuera de horario',
    desc: 'Pierdes oportunidades de venta cada noche y fin de semana porque nadie puede atender consultas cuando tú no estás disponible.',
  },
  {
    Illustration: GrowthCeilingIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
      </svg>
    ),
    accentColor: 'rgba(255,130,50,0.8)',
    borderColor: 'rgba(255,130,50,0.15)',
    title: 'Crecimiento limitado por falta de tiempo y recursos',
    desc: 'Quieres escalar pero el cuello de botella eres tú mismo. Sin sistemas que trabajen por ti, el crecimiento tiene un techo claro.',
  },
]

/* ─── Card ───────────────────────────────────────────── */

function ProblemCard({
  Illustration,
  icon,
  accentColor,
  borderColor,
  title,
  desc,
}: (typeof painPoints)[0]) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group h-full rounded-[12px] bg-[#12121A] border border-white/[0.08] overflow-hidden cursor-default transition-colors duration-300"
      style={{ '--hover-border': borderColor } as React.CSSProperties}
    >
      {/* Illustration */}
      <div className="relative w-full h-44 bg-[#0A0A0F] overflow-hidden">
        <Illustration />
        <div
          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #12121A)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-3">
        <div className="flex items-center gap-2.5 mb-2">
          <span style={{ color: accentColor }}>{icon}</span>
          <h3 className="text-sm font-medium text-white leading-snug">{title}</h3>
        </div>
        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

/* ─── Section ─────────────────────────────────────── */

export default function Problem() {
  const items = painPoints.map((p) => <ProblemCard key={p.title} {...p} />)

  return (
    <section
      aria-labelledby="problem-heading"
      className="py-20 sm:py-28 bg-[#0A0A0F] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight"
          >
            ¿Tu negocio sigue funcionando a mano?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Muchos negocios siguen atrapados en procesos manuales que consumen tiempo y frenan el crecimiento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Carousel
            items={items}
            desktopCards={2}
            tabletCards={2}
            maskColor="#0A0A0F"
          />
        </motion.div>
      </div>
    </section>
  )
}
