import { Link } from 'react-router-dom'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-box">
          <h2>Ready to transform how you get paid?</h2>
          <p>Join thousands of businesses moving money faster, safer, and without borders.</p>
          <Link to="/signup" className="btn btn-primary">
            Start for free →
          </Link>
        </div>
      </div>
    </section>
  )
}
