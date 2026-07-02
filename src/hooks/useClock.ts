import { useEffect, useState } from 'react'

function format(): string {
  try {
    return new Date().toLocaleTimeString('es-BO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/La_Paz',
    })
  } catch {
    return new Date().toLocaleTimeString('es-BO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }
}

/** Live Cochabamba (UTC-4) wall clock, updated every second. */
export function useClock(): string {
  const [clock, setClock] = useState('--:--:--')
  useEffect(() => {
    setClock(format())
    const t = setInterval(() => setClock(format()), 1000)
    return () => clearInterval(t)
  }, [])
  return clock
}
