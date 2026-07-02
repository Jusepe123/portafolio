import { mono, maxWidth } from '../tokens'
import { certs } from '../data'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Certifications() {
  return (
    <section
      id="certificaciones"
      style={{ position: 'relative', zIndex: 1, maxWidth, margin: '0 auto', padding: '96px 40px' }}
    >
      <Reveal>
        <SectionLabel
          num="05"
          label="Certificaciones"
          right={
            <a
              href="https://credly.com/users/jose-andres-cisternas-zurita.30aacf75"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: mono, fontSize: 11, color: 'var(--muted)', textDecoration: 'none' }}
            >
              verificable en Credly ↗
            </a>
          }
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {certs.map((grp) => (
            <div key={grp.issuer}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 18,
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {grp.issuer}
              </div>
              {grp.items.map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '11px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span style={{ fontSize: 15 }}>{c.name}</span>
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
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
