import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/**
 * Fades + slides its children in the first time they scroll into view.
 * `delay` (ms) staggers siblings; motion is neutralized by the global
 * prefers-reduced-motion rule in index.css.
 */
export function Reveal({
  children,
  style,
  delay = 0,
  className,
}: {
  children: ReactNode
  style?: CSSProperties
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true)
            io.unobserve(en.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(18px)',
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
