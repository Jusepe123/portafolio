import { mono, maxWidth } from '../tokens'
import { featuredStack, momentumStack } from '../data'
import { useT } from '../i18n'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Featured() {
  const t = useT()
  const featuredProjects = [
    {
      kicker: t.featured.kicker,
      titleLine1: t.featured.titleLine1,
      titleLine2: t.featured.titleLine2,
      desc: t.featured.desc,
      stack: featuredStack,
      stats: [
        ['~20', t.featured.stat1Note],
        [t.featured.stat2Value, t.featured.stat2Note],
        ['SDK 52', t.featured.stat3Note],
      ],
      image: '/assets/worldcup.png',
      imageAlt: 'FIFA World Cup 2026',
      caption: t.featured.caption,
    },
    {
      kicker: t.featured.momentum.kicker,
      titleLine1: t.featured.momentum.titleLine1,
      titleLine2: t.featured.momentum.titleLine2,
      desc: t.featured.momentum.desc,
      stack: momentumStack,
      stats: [
        [t.featured.momentum.stat1Value, t.featured.momentum.stat1Note],
        [t.featured.momentum.stat2Value, t.featured.momentum.stat2Note],
        [t.featured.momentum.stat3Value, t.featured.momentum.stat3Note],
      ],
      image: '/assets/momentum.png',
      imageAlt: 'Momentum multisport training tracker',
      caption: t.featured.momentum.caption,
      href: 'https://github.com/Jusepe123/Momentum',
      link: t.featured.momentum.link,
    },
  ]

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
          {featuredProjects.map((project, projectIndex) => (
            <div
              className={`featured-project${projectIndex % 2 === 1 ? ' featured-project--reverse' : ''}`}
              key={project.titleLine1}
              style={{ marginTop: projectIndex === 0 ? 0 : 88 }}
            >
              <div className="featured-project__copy">
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {project.kicker}
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
                {project.titleLine1}
                <br />
                {project.titleLine2}
              </h2>
              <p style={{ margin: '0 0 28px', fontSize: 18, lineHeight: 1.6, opacity: 0.82, maxWidth: 520 }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
                {project.stack.map((tag) => (
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
              <div className="featured-stats">
                {project.stats.map(([value, note]) => (
                  <div key={note}>
                    <div style={{ fontSize: 30, fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
                      {value}
                    </div>
                    <div style={{ fontFamily: mono, fontSize: 11, opacity: 0.6 }}>{note}</div>
                  </div>
                ))}
              </div>
              {project.href && (
                <a
                  className="featured-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link} ↗
                </a>
              )}
            </div>
            <div
              className="featured-project__visual"
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
                src={project.image}
                alt={project.imageAlt}
                style={{ display: 'block', width: projectIndex === 0 ? '74%' : '100%', maxWidth: projectIndex === 0 ? 280 : 560, height: 'auto' }}
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
                {project.caption}
              </span>
            </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
