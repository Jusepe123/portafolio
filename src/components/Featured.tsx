import { mono, maxWidth } from '../tokens'
import { featuredStack } from '../data'
import { useT } from '../i18n'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Featured() {
  const t = useT()
  return (
    <section
      id="destacado"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'var(--ink)',
        color: 'var(--paper)',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth, margin: '0 auto', padding: '96px 40px' }}>
        <Reveal>
          <SectionLabel num="02" label={t.featured.label} dark />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 0.9fr',
              gap: 56,
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {t.featured.kicker}
              </div>
              <h2
                style={{
                  margin: '0 0 20px',
                  fontSize: 'clamp(34px,5vw,60px)',
                  fontWeight: 500,
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                }}
              >
                {t.featured.titleLine1}
                <br />
                {t.featured.titleLine2}
              </h2>
              <p style={{ margin: '0 0 28px', fontSize: 18, lineHeight: 1.6, opacity: 0.82, maxWidth: 520 }}>
                {t.featured.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
                {featuredStack.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: mono,
                      fontSize: 12,
                      padding: '5px 10px',
                      border: '1px solid rgba(255,255,255,0.22)',
                      borderRadius: 2,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,auto)', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>~20</div>
                  <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>{t.featured.stat1Note}</div>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 500 }}>{t.featured.stat2Value}</div>
                  <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>{t.featured.stat2Note}</div>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 500 }}>SDK 52</div>
                  <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>{t.featured.stat3Note}</div>
                </div>
              </div>
            </div>
            <div
              style={{
                aspectRatio: '4/5',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.2)',
                backgroundImage:
                  'repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 13px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px 32px',
                gap: 26,
              }}
            >
              <img
                src="/assets/worldcup.png"
                alt="FIFA World Cup 2026"
                style={{ display: 'block', width: '74%', maxWidth: 280, height: 'auto' }}
              />
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {t.featured.caption}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
