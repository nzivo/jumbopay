import { useEffect, useState } from 'react'

export function useCountdown(seconds) {
  const [remaining, setRemaining] = useState(seconds)

  useEffect(() => {
    if (remaining <= 0) return undefined
    const timer = setInterval(() => setRemaining((r) => r - 1), 1000)
    return () => clearInterval(timer)
  }, [remaining])

  const reset = () => setRemaining(seconds)

  return [remaining, reset]
}
