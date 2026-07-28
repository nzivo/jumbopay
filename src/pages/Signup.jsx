import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLogo from '../components/AuthLogo'
import OtpStep from '../components/OtpStep'
import { GoogleIcon, AppleIcon } from '../components/SocialIcons'
import './Auth.css'

export default function Signup() {
  const [step, setStep] = useState('details')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleDetailsSubmit = (e) => {
    e.preventDefault()
    setStep('otp')
  }

  return (
    <section className="auth-section">
      <AuthLogo />
      <div className="auth-panel">
        <div className="auth-panel-inner">
          <div className="eyebrow lime">✦ GET STARTED</div>
          <h2 style={{ marginTop: 16 }}>Join 18M+ users moving money with Jumbopay</h2>
          <p>
            Create a free account and start accepting payments in minutes, no setup fees or
            long-term contracts required.
          </p>
          <div className="auth-benefits">
            <div className="auth-benefit">
              <span>✓</span> Live in minutes with a single integration
            </div>
            <div className="auth-benefit">
              <span>✓</span> Transparent pricing, no hidden fees ever
            </div>
            <div className="auth-benefit">
              <span>✓</span> Cancel anytime, no long-term contracts
            </div>
          </div>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-card">
          {step === 'details' && (
            <>
              <h1>Create your account</h1>
              <p>Start accepting payments globally in minutes.</p>

              <form onSubmit={handleDetailsSubmit}>
                <div className="auth-field">
                  <label htmlFor="signup-name">Full name</label>
                  <input id="signup-name" type="text" placeholder="Jamie Chen" required />
                </div>
                <div className="auth-field">
                  <label htmlFor="signup-company">Company</label>
                  <input id="signup-company" type="text" placeholder="Acme Inc." required />
                </div>
                <div className="auth-field">
                  <label htmlFor="signup-email">Work email</label>
                  <input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="auth-field">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" placeholder="Create a password" required />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: 6 }}>
                  Create account →
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
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </>
          )}

          {step === 'otp' && (
            <OtpStep
              email={email || 'your email'}
              heading="Verify your email"
              description="Enter the 6-digit code we sent to"
              buttonLabel="Verify & create account"
              onVerified={() => setStep('success')}
              onBack={() => setStep('details')}
            />
          )}

          {step === 'success' && (
            <div className="auth-success">
              <span className="auth-success-icon">✓</span>
              <h1>Account created</h1>
              <p>Your email is verified and your Jumbopay account is ready to go.</p>
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
