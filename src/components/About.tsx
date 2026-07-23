import { mono, serif, maxWidth } from '../tokens'
import { skills } from '../data'
import { useLang, useT } from '../i18n'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function About() {
  const { lang } = useLang()
  const t = useT()
  return (
    <section
      id="sobre"
      style={{ position: 'relative', zIndex: 1, maxWidth, margin: '0 auto', padding: '96px 40px' }}
    >
      <Reveal>
        <SectionLabel num="01" label={t.about.label} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                margin: '0 0 22px',
                fontFamily: serif,
                fontSize: 'clamp(22px,2.6vw,30px)',
                lineHeight: 1.4,
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              {t.about.p1}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: serif,
                fontSize: 18,
                lineHeight: 1.6,
                fontWeight: 300,
                color: 'var(--muted)',
              }}
            >
              {t.about.p2}
            </p>
          </div>
          <div style={{ border: '1px solid var(--line)', borderRadius: 3 }}>
            <div
              style={{
                padding: '16px 18px',
                borderBottom: '1px solid var(--line)',
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              {t.about.stackTitle}
            </div>
            {skills[lang].map((grp, gi) => (
              <Reveal
                key={grp.group}
                delay={gi * 80}
                style={{ padding: '16px 18px', borderBottom: '1px solid var(--line)' }}
              >
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    color: 'var(--accent)',
                    letterSpacing: '0.06em',
                    marginBottom: 10,
                  }}
                >
                  {grp.group}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {grp.items.map((it) => (
                    <span
                      key={it}
                      className="chip"
                      style={{
                        fontFamily: mono,
                        fontSize: 12,
                        padding: '4px 9px',
                        border: '1px solid var(--line)',
                        borderRadius: 2,
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
            <div style={{ padding: '14px 18px', fontFamily: mono, fontSize: 11, color: 'var(--muted)' }}>
              {t.about.auxNote}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
