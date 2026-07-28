import { useRef, useState } from 'react'

export default function OtpInput({ length = 6, onChange, autoFocus = true, className = '', disabled = false }) {
  const [values, setValues] = useState(Array(length).fill(''))
  const inputsRef = useRef([])

  const focusInput = (i) => {
    const el = inputsRef.current[i]
    if (el) el.focus()
  }

  const commit = (next) => {
    setValues(next)
    onChange?.(next.join(''))
  }

  const handleChange = (i, raw) => {
    const digit = raw.replace(/\D/g, '').slice(-1)
    const next = [...values]
    next[i] = digit
    commit(next)
    if (digit && i < length - 1) focusInput(i + 1)
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !values[i] && i > 0) {
      focusInput(i - 1)
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length).split('')
    if (!digits.length) return
    const next = Array(length).fill('')
    digits.forEach((d, i) => {
      next[i] = d
    })
    commit(next)
    focusInput(Math.min(digits.length, length) - 1)
  }

  return (
    <div className={`otp-row ${className}`} onPaste={handlePaste}>
      {values.map((v, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          className="otp-box"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="one-time-code"
          maxLength={1}
          value={v}
          disabled={disabled}
          autoFocus={autoFocus && i === 0}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          aria-label={`Digit ${i + 1} of verification code`}
        />
      ))}
    </div>
  )
}
