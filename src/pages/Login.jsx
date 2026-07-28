import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLogo from '../components/AuthLogo'
import OtpStep from '../components/OtpStep'
import { GoogleIcon, AppleIcon } from '../components/SocialIcons'
import './Auth.css'

export default function Login() {
  const [step, setStep] = useState('credentials')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleCredentialsSubmit = (e) => {
    e.preventDefault()
    setStep('otp')
  }

  return (
    <section className="auth-section">
      <AuthLogo />
      <div className="auth-panel">
        <div className="auth-panel-inner">
          <div className="eyebrow lime">✦ WELCOME BACK</div>
          <h2 style={{ marginTop: 16 }}>Move money the moment you log in</h2>
          <p>
            Access your Jumbopay dashboard to track settlements, manage payouts, and monitor
            transactions in real time.
          </p>
          <div className="auth-benefits">
            <div className="auth-benefit">
              <span>✓</span> Real-time transaction monitoring across every market
            </div>
            <div className="auth-benefit">
              <span>✓</span> One dashboard for cards, wallets, and bank transfers
            </div>
            <div className="auth-benefit">
              <span>✓</span> 24/7 support from a real payments team
            </div>
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-card">
          {step === 'credentials' && (
            <>
              <h1>Log in to Jumbopay</h1>
              <p>Enter your credentials to access your dashboard.</p>

              <form onSubmit={handleCredentialsSubmit}>
                <div className="auth-field">
                  <label htmlFor="login-email">Email</label>
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="auth-field">
                  <label htmlFor="login-password">Password</label>
                  <input id="login-password" type="password" placeholder="••••••••" required />
                </div>

                <div className="auth-row-between">
                  <label className="auth-checkbox">
                    <input type="checkbox" /> Remember me
                  </label>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>

                <button type="submit" className="btn btn-primary">
                  Log in →
                </button>
              </form>

              <div className="auth-divider">or continue with</div>

              <div className="auth-social">
                <button type="button" className="auth-social-btn" onClick={() => setStep('success')}>
                  <GoogleIcon /> Google
                </button>
                <button type="button" className="auth-social-btn" onClick={() => setStep('success')}>
                  <AppleIcon /> Apple
                </button>
              </div>

              <p className="auth-footnote">
                Don't have an account? <Link to="/signup">Sign up free</Link>
              </p>
            </>
          )}

          {step === 'otp' && (
            <OtpStep
              email={email || 'your email'}
              heading="Verify it's you"
              description="Enter the 6-digit code we sent to"
              buttonLabel="Verify & log in"
              onVerified={() => setStep('success')}
              onBack={() => setStep('credentials')}
            />
          )}

          {step === 'success' && (
            <div className="auth-success">
              <span className="auth-success-icon">✓</span>
              <h1>You're logged in</h1>
              <p>Your identity has been verified. Redirecting you to your Jumbopay dashboard.</p>
              <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>
                Go to homepage →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
