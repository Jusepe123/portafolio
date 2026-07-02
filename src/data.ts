// All portfolio content lives here. Edit this file to update the site copy.

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
  place: string
  points: string[]
}

export interface CertGroup {
  issuer: string
  items: { name: string; date: string }[]
}

export const skills: SkillGroup[] = [
  { group: 'Lenguajes', items: ['Python', 'TypeScript', 'C#', 'Java', 'Kotlin'] },
  { group: 'Frameworks', items: ['React Native', 'React', 'Zustand', 'React Query', 'Supabase'] },
  { group: 'Tooling', items: ['Git', 'SQL', 'n8n', 'Claude Code', 'VS Code'] },
  { group: 'Cloud · AWS', items: ['Amplify', 'IAM', 'Lambda'] },
]

export const featuredStack: string[] = [
  'React Native (Expo)',
  'TypeScript',
  'Supabase',
  'Zustand',
  'React Query',
]

export const projects: Project[] = [
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
]

export const competitions: Competition[] = [
  { place: '2.º LUGAR', name: 'Hackathon CochaTech 2025', desc: 'MVP bajo estrictas limitaciones de tiempo.' },
  {
    place: 'INCUBACIÓN',
    name: 'GameJam Plus 2025',
    desc: 'Fase internacional · prototipo funcional de videojuego.',
  },
]

export const experience: Experience[] = [
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
    place: 'Amazon Web Services · Cochabamba',
    points: [
      'Equipo fundador del primer AWS Student Builder Group de Cochabamba.',
      'Lideró un taller de AWS Amplify (React + Vite + Amplify Gen 2): slides, documentación y guía práctica de cinco módulos.',
      'Resolvió incidencias de permisos IAM y gestionó la limpieza de recursos Lambda huérfanos post-despliegue.',
    ],
  },
]

export const certs: CertGroup[] = [
  {
    issuer: 'Amazon Web Services',
    items: [
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
