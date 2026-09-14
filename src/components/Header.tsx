import type { CSSProperties } from 'react'
import { useState } from 'react'
import { mono, maxWidth } from '../tokens'
import { useClock } from '../hooks/useClock'
import { useLang, useT } from '../i18n'

const navLink: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '0.08em',
  color: 'var(--muted)',
  textDecoration: 'none',
}

/** Segmented ES / EN control styled to match the mono UI chips. */
function LangToggle({ onSelect }: { onSelect?: () => void }) {
  const { lang, setLang } = useLang()
  const t = useT()
  const seg = (code: 'es' | 'en'): CSSProperties => ({
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: '0.08em',
    padding: '4px 8px',
    borderRadius: 2,
    color: lang === code ? 'var(--paper)' : 'var(--muted)',
    background: lang === code ? 'var(--accent)' : 'transparent',
  })
  return (
    <div
      role="group"
      aria-label={t.langToggleAria}
      className="lang-toggle"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        padding: 2,
        border: '1px solid var(--line)',
        borderRadius: 4,
      }}
    >
      <button
        type="button"
        className="lang-seg"
        onClick={() => {
          setLang('es')
          onSelect?.()
        }}
        aria-pressed={lang === 'es'}
        style={{ border: 'none', cursor: 'pointer', ...seg('es') }}
      >
        ES
      </button>
      <button
        type="button"
        className="lang-seg"
        onClick={() => {
          setLang('en')
          onSelect?.()
        }}
        aria-pressed={lang === 'en'}
        style={{ border: 'none', cursor: 'pointer', ...seg('en') }}
      >
        EN
      </button>
    </div>
  )
}

export function Header() {
  const clock = useClock()
  const { lang } = useLang()
  const t = useT()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuLabel = lang === 'es' ? 'Menú' : 'Menu'
  const closeLabel = lang === 'es' ? 'Cerrar' : 'Close'
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'color-mix(in srgb, var(--paper) 86%, transparent)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        className="site-header__inner"
        style={{
          maxWidth,
          margin: '0 auto',
          padding: '14px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          position: 'relative',
        }}
      >
        <a
          href="#inicio"
          style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: 'inherit' }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'blink 2.4s ease-in-out infinite',
            }}
          />
          <span
            style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}
          >
            J.A. Cisternas
          </span>
        </a>
        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={mobileMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.08em',
            color: 'var(--ink)',
            background: 'transparent',
            border: '1px solid var(--line)',
            borderRadius: 2,
            padding: '8px 11px',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? closeLabel : menuLabel}
        </button>
        <nav
          id="site-navigation"
          className={`site-nav${mobileMenuOpen ? ' site-nav--open' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: 22 }}
        >
          {t.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link"
              style={navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn header-contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'var(--paper)',
              background: 'var(--ink)',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: 2,
            }}
          >
            {t.navContact}
          </a>
          <LangToggle onSelect={() => setMobileMenuOpen(false)} />
        </nav>
        <span
          className="site-header__clock"
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {clock} UTC-4
        </span>
      </div>
    </header>
  )
}
