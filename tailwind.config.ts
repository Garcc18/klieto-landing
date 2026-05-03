import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'klieto-bg': '#0A0A0F',
        'klieto-surface': '#12121A',
        'klieto-surface-2': '#1A1A26',
        'klieto-violet': '#7B5CF0',
        'klieto-violet-hover': '#6A4DE0',
        'klieto-cyan': '#00D4FF',
        'klieto-border': 'rgba(255,255,255,0.08)',
        'klieto-text-muted': 'rgba(255,255,255,0.55)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
        'violet-glow': '0 0 24px rgba(123,92,240,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
