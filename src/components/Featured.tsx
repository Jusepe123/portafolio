import { mono, maxWidth } from '../tokens'
import { featuredStack } from '../data'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Featured() {
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
          <SectionLabel num="02" label="Proyecto destacado" dark />
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
                FULL-STACK MÓVIL · EN PRODUCCIÓN
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
                App de Predicciones
                <br />
                Mundial 2026
              </h2>
              <p style={{ margin: '0 0 28px', fontSize: 18, lineHeight: 1.6, opacity: 0.82, maxWidth: 520 }}>
                App móvil full-stack con sincronización de resultados en vivo, leaderboard y validación
                server-side. En uso activo por ~20 usuarios reales.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
                {featuredStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: mono,
                      fontSize: 12,
                      padding: '5px 10px',
                      border: '1px solid rgba(255,255,255,0.22)',
                      borderRadius: 2,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,auto)', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>~20</div>
                  <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>usuarios activos</div>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 500 }}>Live</div>
                  <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>sync de resultados</div>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 500 }}>SDK 52</div>
                  <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>Expo · TypeScript</div>
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
                Mundial 2026 · US · CA · MX
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
