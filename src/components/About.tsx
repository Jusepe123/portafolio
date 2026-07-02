import { mono, serif, maxWidth } from '../tokens'
import { skills } from '../data'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function About() {
  return (
    <section
      id="sobre"
      style={{ position: 'relative', zIndex: 1, maxWidth, margin: '0 auto', padding: '96px 40px' }}
    >
      <Reveal>
        <SectionLabel num="01" label="Sobre mí" />
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
              Aprendo rápido y construyo cosas que corren en producción. Co-fundé una iniciativa de
              automatización para PYMES y ayudé a levantar la primera comunidad AWS estudiantil de
              Cochabamba.
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
              Me muevo cómodo entre el frontend, el backend y la nube: integro agentes de IA en flujos de
              trabajo reales, resuelvo incidencias bajo presión en hackathones y disfruto optimizar
              procesos con código. Ahora busco una pasantía donde aplicar esa mentalidad autodidacta en
              problemas de verdad.
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
              Stack técnico
            </div>
            {skills.map((grp) => (
              <div key={grp.group} style={{ padding: '16px 18px', borderBottom: '1px solid var(--line)' }}>
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
              </div>
            ))}
            <div style={{ padding: '14px 18px', fontFamily: mono, fontSize: 11, color: 'var(--muted)' }}>
              Aux. de Cátedra — Cálculo &amp; Física
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
