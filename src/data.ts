// All portfolio content lives here. Edit this file to update the site copy.
// Every collection is keyed by language (es / en) so the toggle can swap it live.
import type { Lang } from './i18n'

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Project {
  tag: string
  title: string
  desc: string
  stack: string
}

export interface Competition {
  place: string
  name: string
  desc: string
}

export interface Experience {
  org: string
  role: string
  period: string
  logo?: string
  url?: string
  place: string
  points: string[]
}

export interface CertGroup {
  issuer: string
  items: { name: string; date: string; url?: string }[]
}

export const skills: Record<Lang, SkillGroup[]> = {
  es: [
    { group: 'Lenguajes', items: ['Python', 'TypeScript', 'C#', 'Java', 'Kotlin'] },
    { group: 'Frameworks', items: ['React Native', 'React', 'Zustand', 'React Query', 'Supabase'] },
    { group: 'Tooling', items: ['Git', 'SQL', 'VS Code'] },
    { group: 'Cloud · AWS', items: ['EC2', 'S3', 'IAM', 'Lambda', 'Amplify'] },
    { group: 'IA y automatización', items: ['Agentes de IA', 'IA generativa', 'n8n', 'Kiro', 'Claude Code'] },
  ],
  en: [
    { group: 'Languages', items: ['Python', 'TypeScript', 'C#', 'Java', 'Kotlin'] },
    { group: 'Frameworks', items: ['React Native', 'React', 'Zustand', 'React Query', 'Supabase'] },
    { group: 'Tooling', items: ['Git', 'SQL', 'VS Code'] },
    { group: 'Cloud · AWS', items: ['EC2', 'S3', 'IAM', 'Lambda', 'Amplify'] },
    { group: 'AI and automation', items: ['AI agents', 'Generative AI', 'n8n', 'Kiro', 'Claude Code'] },
  ],
}

export const featuredStack: string[] = [
  'React Native (Expo)',
  'TypeScript',
  'Supabase',
  'Zustand',
  'React Query',
]

export const momentumStack: string[] = [
  'React',
  'TypeScript',
  'Supabase',
  'Recharts',
  'Expo · React Native',
]

export const projects: Record<Lang, Project[]> = {
  es: [
    {
      tag: 'INSTRUMENTACIÓN · UPB',
      title: 'Radar ultrasónico',
      desc: 'Sensor HC-SR04 con barrido por servomotor y visualización polar en tiempo real.',
      stack: 'Arduino · MATLAB',
    },
    {
      tag: 'INSTRUMENTACIÓN · UPB',
      title: 'Dashboard IoT',
      desc: 'Panel multi-sensor (temperatura, luz, vibración) con interfaz de pestañas.',
      stack: 'Arduino · MATLAB',
    },
    {
      tag: 'INSTRUMENTACIÓN · UPB',
      title: 'Integridad estructural',
      desc: 'Monitoreo sísmico con sensor de vibración y comunicación serial en tiempo real.',
      stack: 'MATLAB App Designer',
    },
  ],
  en: [
    {
      tag: 'INSTRUMENTATION · UPB',
      title: 'Ultrasonic radar',
      desc: 'HC-SR04 sensor with servo-driven sweep and real-time polar visualization.',
      stack: 'Arduino · MATLAB',
    },
    {
      tag: 'INSTRUMENTATION · UPB',
      title: 'IoT Dashboard',
      desc: 'Multi-sensor panel (temperature, light, vibration) with a tabbed interface.',
      stack: 'Arduino · MATLAB',
    },
    {
      tag: 'INSTRUMENTATION · UPB',
      title: 'Structural integrity',
      desc: 'Seismic monitoring with a vibration sensor and real-time serial communication.',
      stack: 'MATLAB App Designer',
    },
  ],
}

export const competitions: Record<Lang, Competition[]> = {
  es: [
    { place: '2.º LUGAR', name: 'Hackathon CochaTech 2025', desc: 'MVP bajo estrictas limitaciones de tiempo.' },
    {
      place: 'INCUBACIÓN',
      name: 'GameJam Plus 2025',
      desc: 'Fase internacional · prototipo funcional de videojuego.',
    },
  ],
  en: [
    { place: '2ND PLACE', name: 'Hackathon CochaTech 2025', desc: 'MVP built under strict time constraints.' },
    {
      place: 'INCUBATION',
      name: 'GameJam Plus 2025',
      desc: 'International phase · functional game prototype.',
    },
  ],
}

export const experience: Record<Lang, Experience[]> = {
  es: [
    {
      org: 'Meliorem',
      role: 'Miembro Fundador',
      period: '2024 — Presente',
      logo: '/assets/meliorem.png',
      place: 'Automatización & digitalización de procesos para PYMES · Cochabamba',
      points: [
        'Co-fundó la empresa enfocada en la eficiencia operativa y transformación digital de negocios locales.',
        'Diseña y despliega flujos de trabajo automatizados y escalables con n8n.',
        'Configura e integra agentes de IA para optimizar operaciones empresariales.',
      ],
    },
    {
      org: 'AWS Student Builder Group UPB',
      role: 'Core Team · Miembro Fundador',
      period: '2024 — Presente',
      logo: '/assets/awsbg-mark.png',
      url: 'https://bolivia.studentcommunity.day/',
      place: 'Amazon Web Services · Cochabamba',
      points: [
        'Equipo fundador del primer AWS Student Builder Group de Cochabamba.',
        'Realizó varios talleres sobre EC2, S3, Amplify y Kiro.',
        'Organizador del AWS Student Community Day Cochabamba, Bolivia 2026, celebrado el 10 de octubre en UPB Cochabamba junto a los AWS Student Builder Groups.',
      ],
    },
    {
      org: 'Auxiliar de Cátedra · Cálculo',
      role: 'Universidad Privada Boliviana',
      period: '2025 — Presente',
      logo: '/assets/awsbg-mark.png',
      place: 'Auxiliatura académica · Cochabamba',
      points: [
        'Seleccionado como Auxiliar de Cátedra en Cálculo por rendimiento académico destacado.',
        'Apoya el aprendizaje de estudiantes de primer año con sesiones prácticas y resolución de ejercicios.',
      ],
    },
  ],
  en: [
    {
      org: 'Meliorem',
      role: 'Founding Member',
      period: '2024 — Present',
      logo: '/assets/meliorem.png',
      place: 'Process automation & digitalization for SMEs · Cochabamba',
      points: [
        'Co-founded the company focused on operational efficiency and digital transformation for local businesses.',
        'Designs and deploys automated, scalable workflows with n8n.',
        'Configures and integrates AI agents to optimize business operations.',
      ],
    },
    {
      org: 'AWS Student Builder Group UPB',
      role: 'Core Team · Founding Member',
      period: '2024 — Present',
      logo: '/assets/awsbg-mark.png',
      url: 'https://bolivia.studentcommunity.day/',
      place: 'Amazon Web Services · Cochabamba',
      points: [
        'Founding team of the first AWS Student Builder Group in Cochabamba.',
        'Delivered multiple workshops on EC2, S3, Amplify and Kiro.',
        'Organizer of the AWS Student Community Day Cochabamba, Bolivia 2026, held on October 10 at UPB Cochabamba alongside the AWS Student Builder Groups.',
      ],
    },
    {
      org: 'Teaching Assistant · Calculus',
      role: 'Universidad Privada Boliviana',
      period: '2025 — Present',
      logo: '/assets/awsbg-mark.png',
      place: 'Academic teaching assistantship · Cochabamba',
      points: [
        'Selected as Teaching Assistant for Calculus based on outstanding academic performance.',
        'Supports first-year students with hands-on sessions and problem-solving practice.',
      ],
    },
  ],
}

const certsEs: CertGroup[] = [
  {
    issuer: 'Amazon Web Services',
    items: [
      { name: 'AWS Certified Cloud Practitioner', date: '2026', url: 'https://www.credly.com/badges/b0c508b9-311e-41cd-96a7-028001fe66cf/public_url' },
      { name: 'AWS Certified AI Practitioner', date: 'Ago 2026' },
      { name: 'AWS Cloud Clubs — Core Team', date: 'Mar 2026' },
      { name: 'AWS Educate · Getting Started with Compute', date: 'Mar 2026' },
      { name: 'AWS Educate · Getting Started with Storage', date: 'Abr 2026' },
    ],
  },
  {
    issuer: 'Cisco Networking Academy',
    items: [
      { name: 'Junior Cybersecurity Analyst', date: 'Jun 2024' },
      { name: 'Python Essentials 1 & 2', date: 'Jun 2023' },
      { name: 'Networking Basics · Intro to Data Science', date: '2023' },
      { name: 'Learn-A-Thon Award Recipient', date: '2023 · 2024' },
    ],
  },
]

const certsEn: CertGroup[] = [
  {
    issuer: 'Amazon Web Services',
    items: [
      { name: 'AWS Certified Cloud Practitioner', date: '2026', url: 'https://www.credly.com/badges/b0c508b9-311e-41cd-96a7-028001fe66cf/public_url' },
      { name: 'AWS Certified AI Practitioner', date: 'Aug 2026' },
      { name: 'AWS Cloud Clubs — Core Team', date: 'Mar 2026' },
      { name: 'AWS Educate · Getting Started with Compute', date: 'Mar 2026' },
      { name: 'AWS Educate · Getting Started with Storage', date: 'Apr 2026' },
    ],
  },
  {
    issuer: 'Cisco Networking Academy',
    items: [
      { name: 'Junior Cybersecurity Analyst', date: 'Jun 2024' },
      { name: 'Python Essentials 1 & 2', date: 'Jun 2023' },
      { name: 'Networking Basics · Intro to Data Science', date: '2023' },
      { name: 'Learn-A-Thon Award Recipient', date: '2023 · 2024' },
    ],
  },
]

export const certs: Record<Lang, CertGroup[]> = { es: certsEs, en: certsEn }
