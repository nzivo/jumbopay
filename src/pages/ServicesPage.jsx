import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { services } from '../data/services'
import { serviceIcons } from '../components/serviceIcons'
import './ServicesPage.css'

const steps = [
  { title: 'Integrate', text: 'Drop in our SDK or hit the REST API directly. Most teams ship a first checkout in under a day.' },
  { title: 'Configure', text: 'Set routing rules, currencies, and risk thresholds from a single dashboard, no code required.' },
  { title: 'Go live', text: 'Switch from sandbox to production with one toggle. No migration windows, no downtime.' },
  { title: 'Scale', text: 'Add markets and payment methods as you grow, on the same integration you started with.' },
]

const industries = ['E-commerce & retail', 'SaaS & subscriptions', 'Marketplaces', 'Travel & hospitality', 'Gaming & digital goods', 'Non-profits']

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="✦ WHAT WE OFFER"
        title="One gateway, every service your business needs"
        subtitle="From fraud prevention to instant payouts, Jumbopay bundles the full payments stack into a single integration so your team can focus on the product, not the plumbing."
      />

      <section className="svc-grid-section">
        <div className="container">
          <div className="svc-grid">
            {services.map((s) => (
              <div key={s.slug} className="svc-card">
                <span className="svc-icon">{serviceIcons[s.slug]}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <Link to={`/services/${s.slug}`} className="svc-card-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ HOW IT WORKS</div>
            <h2>Live in days, not quarters</h2>
            <p>A payments integration that respects your engineering time.</p>
          </div>

          <div className="svc-process-track">
            {steps.map((step, i) => (
              <div key={step.title} className="svc-step">
                <div className="svc-step-number">0{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-industries">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ WHO WE SERVE</div>
            <h2>Built for every kind of business</h2>
          </div>

          <div className="svc-industries-grid">
            {industries.map((name) => (
              <div key={name} className="svc-industry-pill">
                <span />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
