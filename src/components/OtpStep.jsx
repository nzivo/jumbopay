import { useEffect, useState } from 'react'
import OtpInput from './OtpInput'
import { useCountdown } from '../hooks/useCountdown'

const CHECK_DELAY = 600
// Kept in sync with the merge + pop-in + glow sequence in Auth.css (~2.6s)
// so the boxes finish merging into the circle before we move on.
const SUCCESS_HOLD = 2800
const RETRY_SECONDS = 5

export default function OtpStep({
  email,
  heading,
  description,
  buttonLabel,
  onVerified,
  onBack,
  backLabel = 'Use a different email',
  // Demo-only: entering this exact code simulates a failed verification so the
  // error animation can be seen without a real backend. Any other code "succeeds".
  wrongCode = '000000',
}) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState('input') // input | checking | success | error
  const [resendKey, setResendKey] = useState(0)
  const [seconds, resetCountdown] = useCountdown(30)
  const [retrySeconds, setRetrySeconds] = useState(RETRY_SECONDS)

  const complete = code.length === 6
  const showBoxes = phase === 'input' || phase === 'checking'
  const showResult = phase === 'success' || phase === 'error'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!complete || phase !== 'input') return
    setPhase('checking')
    setTimeout(() => {
      if (code === wrongCode) {
        setRetrySeconds(RETRY_SECONDS)
        setPhase('error')
      } else {
        setPhase('success')
      }
    }, CHECK_DELAY)
  }

  const handleResend = () => {
    if (seconds > 0 || phase !== 'input') return
    resetCountdown()
    setResendKey((k) => k + 1)
    setCode('')
  }

  // Auto-continue to the caller's next step a moment after the success glow appears.
  useEffect(() => {
    if (phase !== 'success') return undefined
    const t = setTimeout(() => onVerified(code), SUCCESS_HOLD)
    return () => clearTimeout(t)
  }, [phase, code, onVerified])

  // Count down the error state, then reset back to a fresh, empty code entry.
  useEffect(() => {
    if (phase !== 'error') return undefined
    if (retrySeconds <= 0) {
      setPhase('input')
      setCode('')
      setResendKey((k) => k + 1)
      return undefined
    }
    const t = setTimeout(() => setRetrySeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, retrySeconds])

  return (
    <>
      <h1>{heading}</h1>
      <p>
        {description} <strong>{email}</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="otp-stage">
          <OtpInput
            key={resendKey}
            onChange={setCode}
            disabled={phase !== 'input'}
            className={[phase === 'checking' && 'otp-row--checking', showResult && 'otp-row--collapsed']
              .filter(Boolean)
              .join(' ')}
          />

          {showResult && (
            <div className={`otp-result otp-result--${phase}`}>
              <span className="otp-result-icon">{phase === 'success' ? '✓' : '✕'}</span>
            </div>
          )}
        </div>

        {phase === 'error' && (
          <p className="otp-retry-note">You can try again in {retrySeconds}s…</p>
        )}

        {showBoxes && (
          <button type="submit" className="btn btn-primary" disabled={!complete || phase === 'checking'}>
            {phase === 'checking' ? 'Verifying…' : buttonLabel}
          </button>
        )}
      </form>

      {showBoxes && (
        <div className="otp-resend-row">
          <button type="button" className="auth-link-btn" onClick={handleResend} disabled={seconds > 0}>
            {seconds > 0 ? `Resend code in ${seconds}s` : 'Resend code'}
          </button>
          <button type="button" className="auth-link-btn" onClick={onBack}>
            {backLabel}
          </button>
        </div>
      )}
    </>
  )
}
