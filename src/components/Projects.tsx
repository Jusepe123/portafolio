import { mono, maxWidth } from '../tokens'
import { projects, competitions } from '../data'
import { useLang, useT } from '../i18n'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Projects() {
  const { lang } = useLang()
  const t = useT()
  return (
    <section
      id="proyectos"
      style={{ position: 'relative', zIndex: 1, maxWidth, margin: '0 auto', padding: '96px 40px' }}
    >
      <Reveal>
        <SectionLabel num="03" label={t.projects.label} />
      </Reveal>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 0,
          border: '1px solid var(--line)',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        {projects[lang].map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            style={{
              padding: '26px 24px',
              borderRight: '1px solid var(--line)',
              minHeight: 230,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                marginBottom: 'auto',
              }}
            >
              {p.tag}
            </div>
            <h3
              style={{
                margin: '24px 0 10px',
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              {p.title}
            </h3>
            <p style={{ margin: '0 0 14px', fontSize: 14, lineHeight: 1.55, color: 'var(--muted)' }}>
              {p.desc}
            </p>
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: 'var(--ink)',
                borderTop: '1px solid var(--line)',
                paddingTop: 12,
              }}
            >
              {p.stack}
            </div>
          </Reveal>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
        {competitions[lang].map((c, i) => (
          <Reveal
            key={c.name}
            delay={i * 90}
            className="hover-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              border: '1px solid var(--line)',
              borderRadius: 3,
              padding: '22px 24px',
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--paper)',
                background: 'var(--accent)',
                padding: '8px 12px',
                borderRadius: 2,
                whiteSpace: 'nowrap',
              }}
            >
              {c.place}
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 500 }}>{c.name}</div>
              <div style={{ fontSize: 14, color: 'var(--muted)' }}>{c.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
