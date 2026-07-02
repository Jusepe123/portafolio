# Portafolio — José Andrés Cisternas Zurita

Landing page / portafolio personal. Estudiante de Ingeniería de Sistemas (UPB, Cochabamba)
en la intersección de IA, cloud (AWS) y desarrollo full-stack.

Sitio de una sola página, diseñado como una "ficha técnica": tipografía monoespaciada,
paleta papel/tinta y un acento cálido. Originalmente diseñado en Claude Design y porteado
a un proyecto estándar **Vite + React + TypeScript**.

## Stack

- **Vite 6** — bundler y dev server
- **React 18** + **TypeScript** (strict)
- Estilos inline (CSS-in-JS) sobre variables CSS (`--paper`, `--ink`, `--accent`, …)
- Google Fonts: Space Grotesk, JetBrains Mono, Newsreader
- Sin dependencias de runtime más allá de React

## Estructura

```
index.html              # title, meta tags (SEO/Open Graph), carga de fuentes
amplify.yml             # configuración de build para AWS Amplify Hosting
public/
  favicon.svg
  assets/               # imágenes usadas por el sitio
src/
  main.tsx              # punto de entrada
  App.tsx               # ensambla las secciones
  index.css            # reset + variables de tema + keyframes
  data.ts               # TODO el contenido del CV (editar aquí para actualizar textos)
  tokens.ts             # tokens de estilo compartidos
  hooks/
    useClock.ts         # reloj en vivo (UTC-4)
    useCountUp.ts       # animación del promedio
  components/
    Header, Hero, Ticker, About, Featured,
    Projects, ExperienceSection, Certifications, Contact,
    SectionLabel, Reveal
```

Para actualizar el contenido (skills, proyectos, experiencia, certificaciones, contacto),
editá **`src/data.ts`** — no hace falta tocar los componentes.

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # typecheck + build de producción -> dist/
npm run preview  # previsualizar el build de producción localmente
```

## Deploy

Configurado para **AWS Amplify Hosting** vía `amplify.yml` (build con `npm ci` + `npm run build`,
artefactos en `dist/`). Cada push a la rama conectada dispara un build y deploy automático.
