import { mono, maxWidth } from '../tokens'
import { experience } from '../data'
import { useLang, useT } from '../i18n'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function ExperienceSection() {
  const { lang } = useLang()
  const t = useT()
  return (
    <section
      id="experiencia"
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--line)',
        background: 'color-mix(in srgb, var(--ink) 4%, var(--paper))',
      }}
    >
      <div style={{ maxWidth, margin: '0 auto', padding: '96px 40px' }}>
        <Reveal>
          <SectionLabel num="04" label={t.experience.label} />
        </Reveal>
        {experience[lang].map((e, i) => (
          <Reveal
            key={`${e.org}-${e.role}`}
            delay={i * 90}
            style={{
              display: 'grid',
              gridTemplateColumns: '0.5fr 1.5fr',
              gap: 40,
              padding: '34px 0',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div>
              {e.logo && (
                <img
                  src={e.logo}
                  alt={`${e.org} logo`}
                  style={{ height: 107, width: 114, display: 'block', marginBottom: 18, objectFit: 'contain' }}
                />
              )}
              <div style={{ fontFamily: mono, fontSize: 12, color: 'var(--accent)', marginBottom: 8 }}>
                {e.period}
              </div>
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.4 }}>{e.place}</div>
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 500, letterSpacing: '-0.01em' }}>
                {e.org}
              </h3>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: '0.05em',
                  color: 'var(--muted)',
                  marginBottom: 18,
                }}
              >
                {e.role}
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {e.points.map((pt) => (
                  <li key={pt} style={{ display: 'flex', gap: 12, fontSize: 16, lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--accent)', fontFamily: mono }}>→</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
