import type { CSSProperties } from 'react'
import { mono, maxWidth } from '../tokens'
import { useClock } from '../hooks/useClock'

const navLink: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '0.08em',
  color: 'var(--muted)',
  textDecoration: 'none',
}

const nav = [
  { href: '#sobre', label: '01·Sobre' },
  { href: '#destacado', label: '02·Destacado' },
  { href: '#proyectos', label: '03·Proyectos' },
  { href: '#experiencia', label: '04·Exp' },
  { href: '#certificaciones', label: '05·Certs' },
]

export function Header() {
  const clock = useClock()
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'color-mix(in srgb, var(--paper) 86%, transparent)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth,
          margin: '0 auto',
          padding: '14px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a
          href="#inicio"
          style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: 'inherit' }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'blink 2.4s ease-in-out infinite',
            }}
          />
          <span
            style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}
          >
            J.A. Cisternas
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} style={navLink}>
              {n.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'var(--paper)',
              background: 'var(--ink)',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: 2,
            }}
          >
            06·Contacto
          </a>
        </nav>
        <span
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {clock} UTC-4
        </span>
      </div>
    </header>
  )
}
