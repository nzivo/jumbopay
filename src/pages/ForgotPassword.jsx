import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLogo from '../components/AuthLogo'
import OtpStep from '../components/OtpStep'
import './Auth.css'

export default function ForgotPassword() {
  const [step, setStep] = useState('request')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    setStep('otp')
  }

  const handleResetSubmit = (e) => {
    e.preventDefault()
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setError('')
    setStep('done')
  }

  return (
    <section className="auth-section">
      <AuthLogo />
      <div className="auth-panel">
        <div className="auth-panel-inner">
          <div className="eyebrow lime">✦ ACCOUNT RECOVERY</div>
          <h2 style={{ marginTop: 16 }}>Regain access in under a minute</h2>
          <p>
            We'll send a one-time code to verify it's really you before letting anyone reset your
            password.
          </p>
          <div className="auth-benefits">
            <div className="auth-benefit">
              <span>✓</span> Reset codes expire after 10 minutes for your security
            </div>
            <div className="auth-benefit">
              <span>✓</span> We'll never ask for your password by email or phone
            </div>
            <div className="auth-benefit">
              <span>✓</span> Support is available 24/7 if you get stuck
            </div>
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-card">
          {step === 'request' && (
            <>
              <h1>Reset your password</h1>
              <p>Enter the email on your account and we'll send you a reset code.</p>

              <form onSubmit={handleRequestSubmit}>
                <div className="auth-field">
                  <label htmlFor="forgot-email">Email</label>
                  <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send reset code →
                </button>
              </form>

              <p className="auth-footnote">
                Remembered your password? <Link to="/login">Log in</Link>
              </p>
            </>
          )}

          {step === 'otp' && (
            <OtpStep
              email={email || 'your email'}
              heading="Check your email"
              description="Enter the 6-digit reset code we sent to"
              buttonLabel="Verify code"
              onVerified={() => setStep('reset')}
              onBack={() => setStep('request')}
              backLabel="Use a different email"
            />
          )}

          {step === 'reset' && (
            <>
              <h1>Create a new password</h1>
              <p>Choose a new password for your Jumbopay account.</p>

              <form onSubmit={handleResetSubmit}>
                <div className="auth-field">
                  <label htmlFor="new-password">New password</label>
                  <input
                    id="new-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    required
                  />
                </div>
                <div className="auth-field">
                  <label htmlFor="confirm-password">Confirm new password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your new password"
                    required
                  />
                </div>

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="btn btn-primary">
                  Reset password →
                </button>
              </form>
            </>
          )}

          {step === 'done' && (
            <div className="auth-success">
              <span className="auth-success-icon">✓</span>
              <h1>Password reset</h1>
              <p>Your password has been updated. You can now log in with your new password.</p>
              <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>
                Back to log in →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
