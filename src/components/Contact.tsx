import type { CSSProperties } from 'react'
import { mono, maxWidth } from '../tokens'
import { useT } from '../i18n'
import { Reveal } from './Reveal'

const tile: CSSProperties = {
  background: 'var(--ink)',
  padding: 24,
  textDecoration: 'none',
  color: 'inherit',
}

const tileLabel: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  opacity: 0.55,
  marginBottom: 10,
}

export function Contact() {
  const t = useT()

  const contacts = [
    {
      label: 'EMAIL',
      value: 'joseandrescisternaszurita@gmail.com',
      // Abre el redactor de Gmail (web) con el destinatario y asunto ya cargados.
      href:
        'https://mail.google.com/mail/?view=cm&fs=1&to=joseandrescisternaszurita@gmail.com&su=Contacto%20desde%20tu%20portafolio',
      external: true,
      breakAll: true,
    },
    {
      label: 'LINKEDIN ↗',
      value: 'Jose Andrés Cisternas Zurita',
      href: 'https://linkedin.com/in/jose-andres-cisternas-zurita-54405a3b5',
      external: true,
      breakAll: false,
    },
    {
      label: 'GITHUB ↗',
      value: '@Jusepe123',
      href: 'https://github.com/Jusepe123',
      external: true,
      breakAll: false,
    },
    {
      label: t.contact.phoneLabel,
      value: '+591 63923958',
      href: 'tel:+59163923958',
      external: false,
      breakAll: false,
    },
  ]

  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'var(--ink)',
        color: 'var(--paper)',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth, margin: '0 auto', padding: '110px 40px 60px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 44 }}>
            <span style={{ fontFamily: mono, fontSize: 13, color: 'var(--accent)' }}>06</span>
            <span
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.7,
              }}
            >
              {t.contact.label}
            </span>
            <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.18)' }} />
          </div>
          <h2
            style={{
              margin: '0 0 40px',
              fontSize: 'clamp(38px,7vw,92px)',
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
            }}
          >
            {t.contact.headingLine1}
            <br />
            {t.contact.headingLine2}
          </h2>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 1,
            background: 'rgba(255,255,255,0.16)',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                className="contact-tile"
                style={{ ...tile, display: 'block', height: '100%' }}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div style={tileLabel}>{c.label}</div>
                <div style={{ fontSize: 14, wordBreak: c.breakAll ? 'break-all' : 'normal' }}>{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
        <div
          style={{
            marginTop: 60,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.16)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.08em',
            opacity: 0.6,
          }}
        >
          <span>© 2026 José Andrés Cisternas Zurita</span>
          <span>{t.contact.footerLocation}</span>
          <span>{t.contact.footerTagline}</span>
        </div>
      </div>
    </section>
  )
}
