import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

const STORAGE_KEY = 'portfolio-lang'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LangCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'es' ? saved : 'es'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const toggle = () => setLangState((p) => (p === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>
  )
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

/** UI copy that isn't part of the structured content in data.ts. */
const es = {
  nav: [
    { href: '#sobre', label: '01·Sobre' },
    { href: '#destacado', label: '02·Destacado' },
    { href: '#proyectos', label: '03·Proyectos' },
    { href: '#experiencia', label: '04·Exp' },
    { href: '#certificaciones', label: '05·Certs' },
  ],
  navContact: '06·Contacto',
  langToggleAria: 'Cambiar idioma a inglés',
  hero: {
    kicker: 'Portafolio — 2026',
    badge: 'Disponible para pasantía',
    leadStudent: 'Estudiante de ',
    leadField: 'Ingeniería de Sistemas',
    leadBuilding: ' construyendo en la intersección de ',
    leadIA: 'IA',
    leadCloud: 'cloud (AWS)',
    leadMid: ' y desarrollo ',
    leadFullstack: 'full-stack',
    leadTail: '. Autodidacta, orientado a producción.',
    ctaWork: 'Ver trabajo →',
    ctaGithub: 'GitHub ↗',
    portraitTag: 'Ref.01 · Cochabamba, BO',
    specs: {
      standingLabel: 'Rendimiento',
      standingValue: 'Excelencia',
      standingNote: 'Cuadro de Honor',
      programLabel: 'Carrera',
      programYear: '2.º',
      programYearUnit: ' año',
      programNote: 'UPB · 9 semestres',
      roleLabel: 'Rol',
      roleValue: 'Fundador',
      roleNote: 'Meliorem · AWS SBG',
      langLabel: 'Idiomas',
      langValue: 'ES · EN',
      langNote: 'Nativo · B2–C1',
    },
  },
  ticker:
    'Python · TypeScript · C# · Kotlin ✦ React Native + Supabase ✦ AWS Amplify · IAM · Lambda ✦ Automatización n8n ✦ Agentes de IA ✦ Claude Code ✦ Cochabamba, Bolivia ✦ ',
  about: {
    label: 'Sobre mí',
    p1: 'Aprendo rápido y construyo cosas que corren en producción. Co-fundé una iniciativa de automatización para PYMES y ayudé a levantar la primera comunidad AWS estudiantil de Cochabamba.',
    p2: 'Me muevo cómodo entre el frontend, el backend y la nube: integro agentes de IA en flujos de trabajo reales, resuelvo incidencias bajo presión en hackathones y disfruto optimizar procesos con código. Ahora busco una pasantía donde aplicar esa mentalidad autodidacta en problemas de verdad.',
    stackTitle: 'Stack técnico',
    auxNote: 'Aux. de Cátedra — Cálculo & Física',
  },
  featured: {
    label: 'Proyecto destacado',
    kicker: 'FULL-STACK MÓVIL · EN PRODUCCIÓN',
    titleLine1: 'App de Predicciones',
    titleLine2: 'Mundial 2026',
    desc: 'App móvil full-stack con sincronización de resultados en vivo, leaderboard y validación server-side. En uso activo por ~20 usuarios reales.',
    stat1Note: 'usuarios activos',
    stat2Value: 'Live',
    stat2Note: 'sync de resultados',
    stat3Note: 'Expo · TypeScript',
    caption: 'Mundial 2026 · US · CA · MX',
  },
  projects: {
    label: 'Otros proyectos',
  },
  experience: {
    label: 'Experiencia',
  },
  certs: {
    label: 'Certificaciones',
    credly: 'Perfil verificable en Credly',
    credlyCta: 'Ver en Credly ↗',
    intro: 'certificaciones verificables, emitidas por AWS y Cisco.',
  },
  contact: {
    label: 'Contacto',
    headingLine1: 'Construyamos',
    headingLine2: 'algo juntos.',
    phoneLabel: 'TELÉFONO',
    footerLocation: 'Cochabamba, Bolivia · UTC-4',
    footerTagline: 'Diseñado como una ficha técnica.',
  },
}

const en: typeof es = {
  nav: [
    { href: '#sobre', label: '01·About' },
    { href: '#destacado', label: '02·Featured' },
    { href: '#proyectos', label: '03·Projects' },
    { href: '#experiencia', label: '04·Exp' },
    { href: '#certificaciones', label: '05·Certs' },
  ],
  navContact: '06·Contact',
  langToggleAria: 'Switch language to Spanish',
  hero: {
    kicker: 'Portfolio — 2026',
    badge: 'Available for internship',
    leadStudent: 'Student of ',
    leadField: 'Systems Engineering',
    leadBuilding: ' building at the intersection of ',
    leadIA: 'AI',
    leadCloud: 'cloud (AWS)',
    leadMid: ' and ',
    leadFullstack: 'full-stack',
    leadTail: ' development. Self-taught, production-oriented.',
    ctaWork: 'See work →',
    ctaGithub: 'GitHub ↗',
    portraitTag: 'Ref.01 · Cochabamba, BO',
    specs: {
      standingLabel: 'Standing',
      standingValue: 'Excellence',
      standingNote: 'Honor Roll',
      programLabel: 'Program',
      programYear: '2nd',
      programYearUnit: ' year',
      programNote: 'UPB · 9 semesters',
      roleLabel: 'Role',
      roleValue: 'Founder',
      roleNote: 'Meliorem · AWS SBG',
      langLabel: 'Languages',
      langValue: 'ES · EN',
      langNote: 'Native · B2–C1',
    },
  },
  ticker:
    'Python · TypeScript · C# · Kotlin ✦ React Native + Supabase ✦ AWS Amplify · IAM · Lambda ✦ n8n automation ✦ AI agents ✦ Claude Code ✦ Cochabamba, Bolivia ✦ ',
  about: {
    label: 'About me',
    p1: "I learn fast and build things that run in production. I co-founded a process-automation initiative for SMEs and helped launch Cochabamba's first student AWS community.",
    p2: "I move comfortably across frontend, backend and cloud: I integrate AI agents into real workflows, solve issues under pressure at hackathons, and enjoy optimizing processes with code. Now I'm looking for an internship to apply that self-taught mindset to real problems.",
    stackTitle: 'Tech stack',
    auxNote: 'Teaching Assistant — Calculus & Physics',
  },
  featured: {
    label: 'Featured project',
    kicker: 'MOBILE FULL-STACK · IN PRODUCTION',
    titleLine1: 'Predictions App',
    titleLine2: 'World Cup 2026',
    desc: 'Full-stack mobile app with live score sync, a leaderboard and server-side validation. Actively used by ~20 real users.',
    stat1Note: 'active users',
    stat2Value: 'Live',
    stat2Note: 'score sync',
    stat3Note: 'Expo · TypeScript',
    caption: 'World Cup 2026 · US · CA · MX',
  },
  projects: {
    label: 'Other projects',
  },
  experience: {
    label: 'Experience',
  },
  certs: {
    label: 'Certifications',
    credly: 'Verifiable profile on Credly',
    credlyCta: 'View on Credly ↗',
    intro: 'verifiable certifications, issued by AWS & Cisco.',
  },
  contact: {
    label: 'Contact',
    headingLine1: "Let's build",
    headingLine2: 'something together.',
    phoneLabel: 'PHONE',
    footerLocation: 'Cochabamba, Bolivia · UTC-4',
    footerTagline: 'Designed like a spec sheet.',
  },
}

const strings = { es, en }

/** Returns the UI copy for the active language. */
export function useT() {
  const { lang } = useLang()
  return strings[lang]
}
