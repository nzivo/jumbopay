import { Link } from 'react-router-dom'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container page-hero-inner">
        {crumb && (
          <div className="page-hero-crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{crumb}</span>
          </div>
        )}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
