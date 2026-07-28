import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound-section">
      <div className="container notfound-inner">
        <div className="notfound-code">404</div>
        <h1>Looks like this transaction didn't go through</h1>
        <p>
          The page you're looking for has been moved, renamed, or never existed in the first
          place. Let's get you back on a route that actually settles.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            Back to homepage
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact support
          </Link>
        </div>
        <div className="notfound-links">
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </section>
  )
}
