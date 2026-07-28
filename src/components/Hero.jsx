import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-noise" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">✦ CX-02 Trusted global payments</div>
          <h1>
            Connecting businesses
            <br />
            with global payments
          </h1>
          <p>
            Jumbopay brings together international transactions with guaranteed security,
            speed and flexibility, empowering any business to accept payments globally
            without borders.
          </p>
          <div className="hero-cta">
            <Link to="/signup" className="btn btn-primary">
              Get started
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore features
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-card card-back">
            <div className="hero-card-top">
              <span>Total balance</span>
            </div>
            <div className="hero-card-amount">$4,089,461</div>
            <div className="hero-card-number">5840 8420 7710 3027</div>
            <div className="hero-card-holder">A. MERCER</div>
          </div>

          <div className="hero-phone">
            <div className="hero-phone-notch" />
            <div className="hero-phone-screen">
              <div className="phone-chip">
                <span>+ $20.00</span>
              </div>
              <div className="phone-chip alt">
                <span>$1,250</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
