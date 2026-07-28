import { Link } from 'react-router-dom'
import './PayFast.css'

const features = [
  {
    title: 'Advanced security',
    text: 'End to end encryption and real time fraud protection on every transfer.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2 3.5 4v4.2c0 3.4 2.3 6.2 5.5 7.3 3.2-1.1 5.5-3.9 5.5-7.3V4L9 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M6.6 9 8.2 10.6l3.2-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Global reach',
    text: 'Accept and settle payments in 130+ currencies across 45 markets.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 9h13M9 2.5c1.8 1.8 2.8 4.1 2.8 6.5s-1 4.7-2.8 6.5c-1.8-1.8-2.8-4.1-2.8-6.5S7.2 4.3 9 2.5Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Multiple options',
    text: 'Cards, digital wallets, bank transfers, and account to account in one flow.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4.5" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
]

export default function PayFast() {
  return (
    <section className="pay-fast">
      <div className="container pay-fast-inner">
        <div className="pay-fast-content">
          <div className="eyebrow dark">✦ JUMBOOPAY PAY</div>
          <h2>
            Seamless payments
            <br />
            with Jumbopay Pay
          </h2>
          <p>
            Jumbopay Pay simplifies international transactions with speed, security, and
            flexibility, empowering any business to accept payments globally without
            friction.
          </p>
          <Link to="/services" className="btn btn-dark">
            Learn more →
          </Link>
        </div>

        <div className="pay-fast-art">
          <div className="pay-fast-glow" />
          <div className="pay-fast-hand">
            <div className="pay-fast-card">
              <span className="card-toggle">
                <span className="toggle-dot" />
                <span className="toggle-dot ghost" />
              </span>
              <strong>PAY FAST</strong>
              <span>Tap to learn the network</span>
              <span className="card-chip" />
            </div>
          </div>
        </div>

        <ul className="pay-fast-features">
          {features.map((f) => (
            <li key={f.title}>
              <span className="feat-icon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
