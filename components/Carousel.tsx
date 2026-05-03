'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, animate, PanInfo } from 'framer-motion'

interface CarouselProps {
  items: React.ReactNode[]
  desktopCards?: number
  tabletCards?: number
  autoPlay?: boolean
  intervalMs?: number
  maskColor?: string
}

export default function Carousel({
  items,
  desktopCards = 3,
  tabletCards = 2,
  autoPlay = true,
  intervalMs = 4500,
  maskColor = '#0A0A0F',
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const x = useMotionValue(0)
  const GAP = 16

  const cardsPerView =
    containerWidth < 640 ? 1 : containerWidth < 1024 ? tabletCards : desktopCards

  const cardWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (cardsPerView - 1)) / cardsPerView
      : 300

  const maxIndex = Math.max(0, items.length - cardsPerView)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width)
    })
    ro.observe(el)
    setContainerWidth(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex))
      setCurrent(clamped)
      animate(x, -(clamped * (cardWidth + GAP)), {
        type: 'spring',
        stiffness: 340,
        damping: 34,
        mass: 0.9,
      })
    },
    [x, cardWidth, maxIndex]
  )

  // Re-snap to current position on resize without animation
  useEffect(() => {
    if (containerWidth > 0) {
      const clamped = Math.min(current, maxIndex)
      setCurrent(clamped)
      x.set(-(clamped * (cardWidth + GAP)))
    }
  }, [containerWidth, cardWidth, maxIndex]) // eslint-disable-line

  // Auto-play
  useEffect(() => {
    if (!autoPlay || paused || maxIndex === 0) return
    const id = setInterval(() => {
      setCurrent((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1
        animate(x, -(next * (cardWidth + GAP)), {
          type: 'spring',
          stiffness: 340,
          damping: 34,
          mass: 0.9,
        })
        return next
      })
    }, intervalMs)
    return () => clearInterval(id)
  }, [autoPlay, paused, maxIndex, cardWidth, x, intervalMs])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = cardWidth * 0.18
    if (info.offset.x < -threshold) goTo(current + 1)
    else if (info.offset.x > threshold) goTo(current - 1)
    else goTo(current)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fade masks */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${maskColor}, transparent)` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${maskColor}, transparent)` }}
      />

      {/* Track */}
      <div ref={containerRef} className="overflow-hidden px-2">
        <motion.div
          className="flex"
          style={{ x, columnGap: `${GAP}px` }}
          drag={maxIndex > 0 ? 'x' : false}
          dragConstraints={{ left: -(maxIndex * (cardWidth + GAP)), right: 0 }}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: 'grabbing' }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{ width: cardWidth, flexShrink: 0 }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Elemento ${i + 1} de ${items.length}`}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      {maxIndex > 0 && (
        <div
          className="flex items-center justify-center gap-4 mt-8"
          role="group"
          aria-label="Navegación del carrusel"
        >
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#7B5CF0]/50 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path
                d="M10 12 6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Diapositivas">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-5 h-[6px] bg-[#7B5CF0]'
                    : 'w-[6px] h-[6px] bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === maxIndex}
            aria-label="Siguiente"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#7B5CF0]/50 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
