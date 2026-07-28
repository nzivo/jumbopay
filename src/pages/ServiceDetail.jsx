import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { getServiceBySlug, getOtherServices } from '../data/services'
import { serviceIcons } from '../components/serviceIcons'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const others = getOtherServices(service)

  return (
    <>
      <PageHero
        crumb={service.title}
        eyebrow={`✦ ${service.tag.toUpperCase()}`}
        title={service.title}
        subtitle={service.tagline}
      />

      <section className="svcd-section">
        <div className="container">
          <div className="svcd-back">
            <Link to="/services">← Back to services</Link>
          </div>

          <div className="svcd-body">
            {service.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="svcd-stats">
            {service.stats.map((stat) => (
              <div key={stat.label} className="svcd-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="svcd-columns">
            <div>
              <h3>What's included</h3>
              <ul className="svcd-feature-list">
                {service.features.map((f) => (
                  <li key={f}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Where it's used</h3>
              <ul className="svcd-usecase-list">
                {service.useCases.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="svcd-related">
        <div className="container">
          <div className="eyebrow dark">✦ MORE SERVICES</div>
          <div className="svcd-related-grid">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svcd-related-card">
                <span className="svc-icon">{serviceIcons[s.slug]}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
