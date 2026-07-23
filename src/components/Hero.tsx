import type { CSSProperties, ReactNode } from 'react'
import { mono, maxWidth } from '../tokens'
import { useT } from '../i18n'
import { Reveal } from './Reveal'

const specLabel: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '0.1em',
  color: 'var(--muted)',
  textTransform: 'uppercase',
  marginBottom: 8,
}

const specValue: CSSProperties = {
  fontSize: 34,
  fontWeight: 500,
  letterSpacing: '-0.02em',
}

const specNote: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  color: 'var(--muted)',
  marginTop: 4,
}

function Spec({
  label,
  value,
  note,
  style,
}: {
  label: string
  value: ReactNode
  note: ReactNode
  style?: CSSProperties
}) {
  return (
    <div style={style}>
      <div style={specLabel}>{label}</div>
      <div style={specValue}>{value}</div>
      <div style={specNote}>{note}</div>
    </div>
  )
}

export function Hero() {
  const t = useT()
  const s = t.hero.specs
  return (
    <section
      id="inicio"
      style={{ position: 'relative', zIndex: 1, maxWidth, margin: '0 auto', padding: '78px 40px 46px' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              flexWrap: 'wrap',
              marginBottom: 26,
            }}
          >
            <span
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: '0.16em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}
            >
              {t.hero.kicker}
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '0.12em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                border: '1px solid var(--accent)',
                borderRadius: 999,
                padding: '4px 11px',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: 'blink 2.4s ease-in-out infinite',
                }}
              />
              {t.hero.badge}
            </span>
          </div>
          <h1
            style={{
              margin: 0,
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              fontSize: 'clamp(44px,6.4vw,88px)',
            }}
          >
            <span style={{ display: 'block' }}>José Andrés</span>
            <span
              style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1.3px var(--ink)' }}
            >
              Cisternas Zurita
            </span>
          </h1>
          <p
            style={{
              margin: '30px 0 0',
              maxWidth: 520,
              fontSize: 'clamp(16px,1.5vw,19px)',
              lineHeight: 1.55,
              color: 'var(--ink)',
            }}
          >
            {t.hero.leadStudent}
            <strong style={{ fontWeight: 600 }}>{t.hero.leadField}</strong>
            {t.hero.leadBuilding}
            <span style={{ color: 'var(--accent)' }}>{t.hero.leadIA}</span>
            {', '}
            <span style={{ color: 'var(--accent)' }}>{t.hero.leadCloud}</span>
            {t.hero.leadMid}
            <span style={{ color: 'var(--accent)' }}>{t.hero.leadFullstack}</span>
            {t.hero.leadTail}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a
              href="#destacado"
              className="btn"
              style={{
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: 'var(--paper)',
                background: 'var(--accent)',
                padding: '14px 22px',
                borderRadius: 2,
              }}
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="https://github.com/Jusepe123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: 'var(--ink)',
                border: '1px solid var(--line)',
                padding: '14px 22px',
                borderRadius: 2,
              }}
            >
              {t.hero.ctaGithub}
            </a>
          </div>
        </Reveal>

        {/* RIGHT: portrait */}
        <Reveal delay={120}>
          <figure style={{ margin: 0, position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                padding: 10,
                border: '1px solid var(--line)',
                borderRadius: 4,
                background: 'var(--paper)',
              }}
            >
              <img
                src="/assets/portrait-color.jpg"
                alt="José Andrés Cisternas Zurita"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 20,
                  bottom: 20,
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--paper)',
                  background: 'var(--ink)',
                  padding: '5px 10px',
                  borderRadius: 2,
                }}
              >
                {t.hero.portraitTag}
              </span>
            </div>
          </figure>
        </Reveal>
      </div>

      {/* SPEC STRIP */}
      <Reveal delay={220}>
        <div
          style={{
            marginTop: 52,
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
          }}
        >
          <Spec
            style={{ padding: '20px 22px 20px 0', borderRight: '1px solid var(--line)' }}
            label={s.standingLabel}
            value={s.standingValue}
            note={<span style={{ color: 'var(--accent)' }}>{s.standingNote}</span>}
          />
          <Spec
            style={{ padding: '20px 22px', borderRight: '1px solid var(--line)' }}
            label={s.programLabel}
            value={
              <span>
                {s.programYear}
                <span style={{ fontSize: 16, color: 'var(--muted)' }}>{s.programYearUnit}</span>
              </span>
            }
            note={s.programNote}
          />
          <Spec
            style={{ padding: '20px 22px', borderRight: '1px solid var(--line)' }}
            label={s.roleLabel}
            value={s.roleValue}
            note={s.roleNote}
          />
          <Spec
            style={{ padding: '20px 0 20px 22px' }}
            label={s.langLabel}
            value={s.langValue}
            note={s.langNote}
          />
        </div>
      </Reveal>
    </section>
  )
}
