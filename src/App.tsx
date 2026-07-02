import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Ticker } from './components/Ticker'
import { About } from './components/About'
import { Featured } from './components/Featured'
import { Projects } from './components/Projects'
import { ExperienceSection } from './components/ExperienceSection'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--paper)',
        color: 'var(--ink)',
        fontFamily: "'Space Grotesk', sans-serif",
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Optional dotted grid backdrop, toggled via the --grid CSS variable. */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 'var(--grid)',
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
      />
      <Header />
      <Hero />
      <Ticker />
      <About />
      <Featured />
      <Projects />
      <ExperienceSection />
      <Certifications />
      <Contact />
    </div>
  )
}
