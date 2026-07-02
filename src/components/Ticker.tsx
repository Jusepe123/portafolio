import { mono } from '../tokens'

const TEXT =
  'Python · TypeScript · C# · Kotlin ✦ React Native + Supabase ✦ AWS Amplify · IAM · Lambda ✦ n8n automation ✦ AI agents ✦ Claude Code ✦ Cochabamba, Bolivia ✦ '

export function Ticker() {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        overflow: 'hidden',
        padding: '11px 0',
        background: 'var(--ink)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 32s linear infinite',
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--paper)',
        }}
      >
        <span style={{ padding: '0 26px' }}>{TEXT}</span>
        <span style={{ padding: '0 26px' }} aria-hidden="true">
          {TEXT}
        </span>
      </div>
    </div>
  )
}
