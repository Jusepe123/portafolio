import type { ReactNode } from 'react'
import { mono } from '../tokens'

/** The numbered "01 · Sobre mí" divider shown atop each section. */
export function SectionLabel({
  num,
  label,
  dark = false,
  right,
}: {
  num: string
  label: string
  dark?: boolean
  right?: ReactNode
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 44 }}>
      <span style={{ fontFamily: mono, fontSize: 13, color: 'var(--accent)' }}>{num}</span>
      <span
        style={{
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: dark ? undefined : 'var(--muted)',
          opacity: dark ? 0.7 : undefined,
        }}
      >
        {label}
      </span>
      <span
        style={{
          flex: 1,
          height: 1,
          background: dark ? 'rgba(255,255,255,0.18)' : 'var(--line)',
        }}
      />
      {right}
    </div>
  )
}
