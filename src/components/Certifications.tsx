import { mono, serif, maxWidth } from '../tokens'
import { certs } from '../data'
import { useLang, useT } from '../i18n'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

const CREDLY_URL = 'https://credly.com/users/jose-andres-cisternas-zurita.30aacf75'

export function Certifications() {
  const { lang } = useLang()
  const t = useT()
  const groups = certs[lang]
  const total = groups.reduce((n, g) => n + g.items.length, 0)

  return (
    <section
      id="certificaciones"
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--line)',
        background: 'color-mix(in srgb, var(--accent) 6%, var(--paper))',
      }}
    >
      <div style={{ maxWidth, margin: '0 auto', padding: '96px 40px' }}>
        <Reveal>
          <SectionLabel num="05" label={t.certs.label} />
        </Reveal>

        {/* Summary line + prominent Credly call-to-action */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 32,
              flexWrap: 'wrap',
              marginBottom: 40,
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: 560,
                fontFamily: serif,
                fontSize: 'clamp(20px,2.4vw,28px)',
                lineHeight: 1.4,
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              <strong style={{ fontWeight: 500, color: 'var(--accent)' }}>{total}</strong> {t.certs.intro}
            </p>
            <a
              href={CREDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label={t.certs.credly}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: mono,
                fontSize: 14,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: 'var(--paper)',
                background: 'var(--accent)',
                padding: '15px 26px',
                borderRadius: 3,
                whiteSpace: 'nowrap',
                boxShadow: '0 10px 26px -14px color-mix(in srgb, var(--accent) 80%, transparent)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  border: '1.5px solid var(--paper)',
                  fontSize: 11,
                  lineHeight: 1,
                }}
              >
                ✓
              </span>
              {t.certs.credlyCta}
            </a>
          </div>
        </Reveal>

        {/* Issuer cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {groups.map((grp, gi) => (
            <Reveal
              key={grp.issuer}
              delay={gi * 100}
              className="hover-card"
              style={{
                border: '1px solid var(--line)',
                borderRadius: 4,
                background: 'var(--paper)',
                padding: '26px 26px 10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  marginBottom: 18,
                  paddingBottom: 14,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>{grp.issuer}</span>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    letterSpacing: '0.06em',
                    color: 'var(--paper)',
                    background: 'var(--accent)',
                    padding: '3px 9px',
                    borderRadius: 999,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {grp.items.length}
                </span>
              </div>
              {grp.items.map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '12px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span style={{ display: 'flex', gap: 11, alignItems: 'baseline' }}>
                    <span
                      aria-hidden="true"
                      style={{ color: 'var(--accent)', fontFamily: mono, fontSize: 13, flexShrink: 0 }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.35 }}>{c.name}</span>
                  </span>
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: 'var(--muted)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.date}
                  </span>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
