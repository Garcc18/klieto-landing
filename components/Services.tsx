'use client'

import { motion } from 'framer-motion'
import Carousel from './Carousel'

/* ─── SVG Illustrations ─────────────────────────────── */

const AutomationIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="svc1-bg" x1="0" y1="0" x2="320" y2="170" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B5CF0" stopOpacity="0.08" />
        <stop offset="1" stopColor="#00D4FF" stopOpacity="0.03" />
      </linearGradient>
      <radialGradient id="svc1-glow" cx="75%" cy="50%" r="40%">
        <stop stopColor="#7B5CF0" stopOpacity="0.2" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="170" fill="url(#svc1-bg)" />
    <rect width="320" height="170" fill="url(#svc1-glow)" />
    {/* Grid */}
    {[40, 80, 120, 160, 200, 240, 280].map((v) => (
      <line key={`v${v}`} x1={v} y1="0" x2={v} y2="170" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
    ))}
    {[42, 85, 127].map((v) => (
      <line key={`h${v}`} x1="0" y1={v} x2="320" y2={v} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
    ))}
    {/* Node START */}
    <circle cx="52" cy="85" r="28" fill="rgba(123,92,240,0.1)" stroke="rgba(123,92,240,0.55)" strokeWidth="1.5" />
    <circle cx="52" cy="85" r="36" fill="none" stroke="rgba(123,92,240,0.08)" strokeWidth="8" />
    <text x="52" y="89" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8.5" fontFamily="system-ui" fontWeight="600">START</text>
    {/* Node A */}
    <circle cx="155" cy="45" r="23" fill="rgba(123,92,240,0.1)" stroke="rgba(123,92,240,0.45)" strokeWidth="1.5" />
    <path d="M 147 45 L 152 50 L 163 37" stroke="rgba(123,92,240,0.85)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    {/* Node B */}
    <circle cx="155" cy="125" r="23" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
    <rect x="146" y="117" width="18" height="4" rx="2" fill="rgba(0,212,255,0.5)" />
    <rect x="146" y="124" width="11" height="4" rx="2" fill="rgba(0,212,255,0.35)" />
    {/* Node END */}
    <circle cx="268" cy="85" r="28" fill="rgba(123,92,240,0.15)" stroke="rgba(123,92,240,0.7)" strokeWidth="2" />
    <circle cx="268" cy="85" r="36" fill="none" stroke="rgba(123,92,240,0.12)" strokeWidth="8" />
    <path d="M 258 85 L 265 92 L 278 75" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Connections */}
    <path d="M 80 75 Q 112 60 132 52" stroke="rgba(123,92,240,0.45)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
    <path d="M 80 95 Q 112 110 132 118" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
    <path d="M 178 50 Q 215 62 240 75" stroke="rgba(123,92,240,0.45)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
    <path d="M 178 120 Q 215 108 240 95" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
    {/* Arrow tips */}
    <path d="M 131 48 l-8 4 4-7" fill="rgba(123,92,240,0.5)" />
    <path d="M 131 118 l-7 -4 3 7" fill="rgba(0,212,255,0.45)" />
    <path d="M 240 72 l-6 -6 3 8" fill="rgba(123,92,240,0.5)" />
    <path d="M 240 97 l-5 6 2 -8" fill="rgba(0,212,255,0.45)" />
    {/* Labels */}
    <text x="108" y="56" fill="rgba(123,92,240,0.7)" fontSize="8" fontFamily="system-ui">SÍ</text>
    <text x="108" y="126" fill="rgba(0,212,255,0.6)" fontSize="8" fontFamily="system-ui">NO</text>
    {/* Dots */}
    <circle cx="300" cy="22" r="2.5" fill="rgba(123,92,240,0.5)" />
    <circle cx="308" cy="32" r="1.5" fill="rgba(0,212,255,0.4)" />
    <circle cx="18" cy="152" r="2" fill="rgba(123,92,240,0.3)" />
    <circle cx="296" cy="155" r="2" fill="rgba(0,212,255,0.35)" />
  </svg>
)

const ChatbotIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="svc2-bg" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#7B5CF0" stopOpacity="0.07" />
        <stop offset="1" stopColor="#00D4FF" stopOpacity="0.04" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#svc2-bg)" />
    {/* Phone outline */}
    <rect x="22" y="20" width="80" height="130" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
    <rect x="42" y="14" width="40" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
    <circle cx="62" cy="142" r="5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
    {/* Screen content on phone */}
    <rect x="30" y="30" width="64" height="8" rx="3" fill="rgba(123,92,240,0.25)" />
    {/* User bubble */}
    <rect x="34" y="48" width="44" height="14" rx="7" fill="rgba(123,92,240,0.3)" />
    <rect x="34" y="48" width="44" height="14" rx="7" fill="none" stroke="rgba(123,92,240,0.4)" strokeWidth="0.8" />
    {/* Bot bubble */}
    <rect x="30" y="70" width="56" height="22" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
    <rect x="35" y="76" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
    <rect x="35" y="83" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
    {/* User bubble 2 */}
    <rect x="36" y="100" width="36" height="12" rx="6" fill="rgba(123,92,240,0.25)" />
    {/* Status bar */}
    <rect x="30" y="120" width="64" height="1" fill="rgba(255,255,255,0.06)" />
    {/* Right side - chat panel */}
    <rect x="122" y="18" width="182" height="134" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
    {/* Header */}
    <rect x="122" y="18" width="182" height="28" rx="10" fill="rgba(123,92,240,0.08)" />
    <circle cx="140" cy="32" r="9" fill="rgba(123,92,240,0.4)" />
    <path d="M 137 32 L 140 35 L 145 28" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="155" y="27" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
    <rect x="155" y="34" width="35" height="3.5" rx="1.5" fill="rgba(0,212,255,0.4)" />
    {/* AI response bubble */}
    <rect x="130" y="54" width="130" height="38" rx="8" fill="rgba(123,92,240,0.12)" stroke="rgba(123,92,240,0.25)" strokeWidth="1" />
    <rect x="138" y="62" width="90" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
    <rect x="138" y="70" width="110" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
    <rect x="138" y="78" width="68" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
    {/* Sparkle star near AI bubble */}
    <path d="M 278 56 L 280 50 L 282 56 L 288 58 L 282 60 L 280 66 L 278 60 L 272 58 Z" fill="rgba(0,212,255,0.7)" />
    {/* User reply */}
    <rect x="200" y="100" width="94" height="24" rx="8" fill="rgba(123,92,240,0.2)" stroke="rgba(123,92,240,0.3)" strokeWidth="0.8" />
    <rect x="208" y="107" width="60" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
    <rect x="208" y="115" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
    {/* Typing indicator */}
    <rect x="130" y="132" width="52" height="16" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    <circle cx="142" cy="140" r="2.5" fill="rgba(255,255,255,0.35)" />
    <circle cx="151" cy="140" r="2.5" fill="rgba(255,255,255,0.35)" />
    <circle cx="160" cy="140" r="2.5" fill="rgba(255,255,255,0.35)" />
    {/* Decorative */}
    <circle cx="305" cy="25" r="2" fill="rgba(0,212,255,0.4)" />
    <circle cx="20" cy="160" r="1.5" fill="rgba(123,92,240,0.35)" />
  </svg>
)

const ConsultingIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="svc3-glow" cx="50%" cy="50%" r="50%">
        <stop stopColor="#7B5CF0" stopOpacity="0.2" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="170" fill="rgba(123,92,240,0.04)" />
    <ellipse cx="160" cy="85" rx="80" ry="80" fill="url(#svc3-glow)" />
    {/* Outer ring */}
    <circle cx="160" cy="85" r="62" stroke="rgba(123,92,240,0.2)" strokeWidth="1" strokeDasharray="6 4" />
    <circle cx="160" cy="85" r="46" stroke="rgba(123,92,240,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
    {/* Center circle */}
    <circle cx="160" cy="85" r="24" fill="rgba(123,92,240,0.15)" stroke="rgba(123,92,240,0.7)" strokeWidth="2" />
    {/* Lightbulb icon */}
    <path d="M 160 71 C 155 71 151 75 151 80 C 151 84 153 87 156 89 L 156 94 L 164 94 L 164 89 C 167 87 169 84 169 80 C 169 75 165 71 160 71 Z" fill="rgba(255,255,255,0.85)" />
    <line x1="156" y1="96" x2="164" y2="96" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="157" y1="99" x2="163" y2="99" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Cardinal points - strategy nodes */}
    {/* North */}
    <circle cx="160" cy="16" r="14" fill="rgba(123,92,240,0.12)" stroke="rgba(123,92,240,0.45)" strokeWidth="1.5" />
    <text x="160" y="20" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7.5" fontFamily="system-ui">Plan</text>
    {/* South */}
    <circle cx="160" cy="154" r="14" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
    <text x="160" y="158" textAnchor="middle" fill="rgba(0,212,255,0.8)" fontSize="7.5" fontFamily="system-ui">Test</text>
    {/* East */}
    <circle cx="235" cy="85" r="14" fill="rgba(123,92,240,0.12)" stroke="rgba(123,92,240,0.45)" strokeWidth="1.5" />
    <text x="235" y="89" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7.5" fontFamily="system-ui">Build</text>
    {/* West */}
    <circle cx="85" cy="85" r="14" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
    <text x="85" y="89" textAnchor="middle" fill="rgba(0,212,255,0.8)" fontSize="7.5" fontFamily="system-ui">Audit</text>
    {/* Connector lines */}
    <line x1="160" y1="30" x2="160" y2="39" stroke="rgba(123,92,240,0.4)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="160" y1="131" x2="160" y2="140" stroke="rgba(0,212,255,0.35)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="184" y1="85" x2="221" y2="85" stroke="rgba(123,92,240,0.4)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="99" y1="85" x2="114" y2="85" stroke="rgba(0,212,255,0.35)" strokeWidth="1" strokeDasharray="3 2" />
    {/* Diagonals */}
    <line x1="174" y1="67" x2="185" y2="55" stroke="rgba(123,92,240,0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
    <line x1="146" y1="67" x2="135" y2="55" stroke="rgba(0,212,255,0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
    <line x1="174" y1="103" x2="185" y2="115" stroke="rgba(0,212,255,0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
    <line x1="146" y1="103" x2="135" y2="115" stroke="rgba(123,92,240,0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
    {/* Decorative dots */}
    <circle cx="296" cy="22" r="2" fill="rgba(123,92,240,0.4)" />
    <circle cx="24" cy="148" r="2" fill="rgba(0,212,255,0.35)" />
    <circle cx="302" cy="152" r="1.5" fill="rgba(0,212,255,0.3)" />
  </svg>
)

const DevIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="svc4-bg" x1="0" y1="0" x2="0" y2="170" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B5CF0" stopOpacity="0.06" />
        <stop offset="1" stopColor="#0A0A0F" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#svc4-bg)" />
    {/* Terminal frame */}
    <rect x="30" y="18" width="260" height="134" rx="8" fill="rgba(10,10,15,0.6)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
    {/* Title bar */}
    <rect x="30" y="18" width="260" height="26" rx="8" fill="rgba(255,255,255,0.04)" />
    <rect x="30" y="36" width="260" height="8" fill="rgba(255,255,255,0.04)" />
    {/* Traffic lights */}
    <circle cx="48" cy="31" r="4" fill="rgba(255,80,80,0.7)" />
    <circle cx="62" cy="31" r="4" fill="rgba(255,180,0,0.7)" />
    <circle cx="76" cy="31" r="4" fill="rgba(0,200,80,0.6)" />
    {/* Tab name */}
    <rect x="90" y="25" width="70" height="12" rx="3" fill="rgba(123,92,240,0.15)" stroke="rgba(123,92,240,0.2)" strokeWidth="0.8" />
    <text x="125" y="34" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="system-ui">klieto.ts</text>
    {/* Code lines */}
    {/* Line 1 - import */}
    <rect x="44" y="55" width="22" height="5" rx="2" fill="rgba(0,212,255,0.6)" />
    <rect x="70" y="55" width="60" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
    <rect x="134" y="55" width="16" height="5" rx="2" fill="rgba(0,212,255,0.4)" />
    <rect x="154" y="55" width="48" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
    {/* Line 2 - blank */}
    {/* Line 3 - function */}
    <rect x="44" y="68" width="40" height="5" rx="2" fill="rgba(123,92,240,0.7)" />
    <rect x="88" y="68" width="55" height="5" rx="2" fill="rgba(255,255,255,0.55)" />
    <rect x="147" y="68" width="8" height="5" rx="2" fill="rgba(255,255,255,0.3)" />
    <rect x="159" y="68" width="26" height="5" rx="2" fill="rgba(0,212,255,0.45)" />
    <rect x="189" y="68" width="4" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
    {/* Line 4 */}
    <rect x="56" y="80" width="24" height="5" rx="2" fill="rgba(0,212,255,0.5)" />
    <rect x="84" y="80" width="10" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
    <rect x="98" y="80" width="18" height="5" rx="2" fill="rgba(255,180,100,0.7)" />
    <rect x="120" y="80" width="60" height="5" rx="2" fill="rgba(255,255,255,0.3)" />
    {/* Line 5 */}
    <rect x="56" y="92" width="32" height="5" rx="2" fill="rgba(123,92,240,0.6)" />
    <rect x="92" y="92" width="12" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
    <rect x="108" y="92" width="45" height="5" rx="2" fill="rgba(255,255,255,0.35)" />
    <rect x="157" y="92" width="18" height="5" rx="2" fill="rgba(0,212,255,0.4)" />
    {/* Line 6 - return */}
    <rect x="56" y="104" width="32" height="5" rx="2" fill="rgba(0,212,255,0.55)" />
    <rect x="92" y="104" width="80" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
    {/* Line 7 - close */}
    <rect x="44" y="116" width="6" height="5" rx="2" fill="rgba(255,255,255,0.3)" />
    {/* Cursor blink line */}
    <rect x="56" y="128" width="2" height="12" rx="1" fill="rgba(123,92,240,0.8)" />
    {/* Line numbers */}
    {[55, 68, 80, 92, 104, 116, 128].map((y, i) => (
      <text key={y} x="36" y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.15)" fontSize="6" fontFamily="monospace">{i + 1}</text>
    ))}
    {/* Decorative */}
    <circle cx="298" cy="20" r="2" fill="rgba(123,92,240,0.4)" />
    <circle cx="22" cy="160" r="1.5" fill="rgba(0,212,255,0.35)" />
  </svg>
)

const WebIllustration = () => (
  <svg viewBox="0 0 320 170" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="svc5-bg" x1="0" y1="0" x2="320" y2="170" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF" stopOpacity="0.05" />
        <stop offset="1" stopColor="#7B5CF0" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#svc5-bg)" />
    {/* Browser frame */}
    <rect x="20" y="14" width="280" height="142" rx="8" fill="rgba(10,10,15,0.5)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
    {/* Chrome bar */}
    <rect x="20" y="14" width="280" height="24" rx="8" fill="rgba(255,255,255,0.04)" />
    <rect x="20" y="30" width="280" height="8" fill="rgba(255,255,255,0.04)" />
    <circle cx="36" cy="26" r="3.5" fill="rgba(255,80,80,0.65)" />
    <circle cx="48" cy="26" r="3.5" fill="rgba(255,180,0,0.65)" />
    <circle cx="60" cy="26" r="3.5" fill="rgba(0,200,80,0.55)" />
    {/* URL bar */}
    <rect x="76" y="20" width="148" height="12" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    <text x="150" y="29" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="system-ui">klieto.com</text>
    {/* Website content area */}
    {/* Hero section simulation */}
    <rect x="28" y="46" width="264" height="52" rx="4" fill="rgba(123,92,240,0.08)" stroke="rgba(123,92,240,0.12)" strokeWidth="0.5" />
    <rect x="80" y="56" width="160" height="8" rx="3" fill="rgba(255,255,255,0.2)" />
    <rect x="100" y="68" width="120" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
    <rect x="115" y="78" width="40" height="10" rx="4" fill="rgba(123,92,240,0.5)" />
    <rect x="161" y="78" width="40" height="10" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
    {/* Content columns */}
    <rect x="28" y="104" width="82" height="44" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <rect x="35" y="110" width="40" height="4" rx="1.5" fill="rgba(123,92,240,0.4)" />
    <rect x="35" y="117" width="68" height="3" rx="1" fill="rgba(255,255,255,0.15)" />
    <rect x="35" y="123" width="55" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
    <rect x="119" y="104" width="82" height="44" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <rect x="126" y="110" width="40" height="4" rx="1.5" fill="rgba(0,212,255,0.35)" />
    <rect x="126" y="117" width="68" height="3" rx="1" fill="rgba(255,255,255,0.15)" />
    <rect x="126" y="123" width="48" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
    <rect x="210" y="104" width="82" height="44" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <rect x="217" y="110" width="40" height="4" rx="1.5" fill="rgba(123,92,240,0.4)" />
    <rect x="217" y="117" width="62" height="3" rx="1" fill="rgba(255,255,255,0.15)" />
    <rect x="217" y="123" width="50" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
    {/* AI chat widget */}
    <circle cx="272" cy="141" r="10" fill="rgba(123,92,240,0.7)" />
    <path d="M 268 141 C 268 138.5 269.5 137 272 137 C 274.5 137 276 138.5 276 141 C 276 143.5 274.5 145 272 145 L 270 147 L 270 145 C 268.5 144.5 268 143 268 141 Z" fill="rgba(255,255,255,0.9)" />
    {/* Sparkle */}
    <path d="M 285 128 L 287 123 L 289 128 L 294 130 L 289 132 L 287 137 L 285 132 L 280 130 Z" fill="rgba(0,212,255,0.7)" />
    {/* Decorative */}
    <circle cx="302" cy="18" r="2" fill="rgba(0,212,255,0.4)" />
    <circle cx="22" cy="156" r="1.5" fill="rgba(123,92,240,0.35)" />
  </svg>
)

/* ─── Service data ─────────────────────────────────── */

const services = [
  {
    Illustration: AutomationIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Automatización de procesos',
    desc: 'Elimina tareas manuales y repetitivas con flujos automatizados inteligentes.',
  },
  {
    Illustration: ChatbotIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Chatbots e IA conversacional',
    desc: 'Atiende a tus clientes 24/7 en web, WhatsApp o Instagram con IA.',
  },
  {
    Illustration: ConsultingIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456z" />
      </svg>
    ),
    title: 'Consultoría e implementación de IA',
    desc: 'Te guiamos paso a paso para integrar la IA en tu negocio sin fricciones.',
  },
  {
    Illustration: DevIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Desarrollo de soluciones a medida',
    desc: 'Construimos herramientas IA personalizadas adaptadas a tu sector.',
  },
  {
    Illustration: WebIllustration,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Páginas web con IA integrada',
    desc: 'Webs modernas, rápidas y optimizadas con funcionalidades inteligentes.',
  },
]

/* ─── Card ───────────────────────────────────────────── */

function ServiceCard({
  Illustration,
  icon,
  title,
  desc,
}: (typeof services)[0]) {
  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group h-full rounded-[12px] bg-[#12121A] border border-white/[0.08] hover:border-[#7B5CF0]/40 transition-colors duration-300 overflow-hidden cursor-default"
    >
      {/* Illustration */}
      <div className="relative w-full h-44 bg-[#0A0A0F] overflow-hidden">
        <Illustration />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #12121A)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-3">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-[#7B5CF0] group-hover:text-[#00D4FF] transition-colors duration-300">
            {icon}
          </span>
          <h3 className="text-sm font-medium text-white leading-snug">{title}</h3>
        </div>
        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      </div>
    </motion.article>
  )
}

/* ─── Section ────────────────────────────────────────── */

export default function Services() {
  const items = services.map((s) => <ServiceCard key={s.title} {...s} />)

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28 bg-[#12121A] overflow-hidden"
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
            id="services-heading"
            className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight"
          >
            Soluciones de IA para hacer crecer tu negocio
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Desde automatizaciones hasta chatbots, tenemos la solución que tu negocio necesita.
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
            desktopCards={3}
            tabletCards={2}
            maskColor="#12121A"
          />
        </motion.div>
      </div>
    </section>
  )
}
