import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Pricing from '../components/Pricing'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import './PricingPage.css'

const rows = [
  { feature: 'Transaction fee', basic: '2.4% + $0.30', pro: '1.9% + $0.30', ent: 'Custom' },
  { feature: 'Currencies supported', basic: '25', pro: '80+', ent: '130+' },
  { feature: 'Instant settlement', basic: false, pro: true, ent: true },
  { feature: 'Fraud detection engine', basic: true, pro: true, ent: true },
  { feature: 'Recurring billing', basic: true, pro: true, ent: true },
  { feature: 'Dedicated account manager', basic: false, pro: false, ent: true },
  { feature: 'Custom routing rules', basic: false, pro: false, ent: true },
  { feature: 'SLA & priority support', basic: false, pro: true, ent: true },
]

const addons = [
  { title: 'Advanced fraud suite', text: 'Device fingerprinting and velocity checks layered on top of the default engine.', price: 'From $0.02 / transaction' },
  { title: 'Dispute management', text: 'Automated evidence collection and chargeback representment handled for you.', price: 'From $15 / dispute' },
  { title: 'Dedicated infrastructure', text: 'Isolated processing capacity for high-volume or seasonal traffic spikes.', price: 'Custom quote' },
]

const faqs = [
  { q: 'Can I change plans at any time?', a: 'Yes. Upgrades apply immediately and downgrades take effect at the start of your next billing cycle.' },
  { q: 'Do you charge setup or cancellation fees?', a: 'No. There are no setup fees, no cancellation fees, and no long-term contracts on Basic or Professional.' },
  { q: 'How is Enterprise pricing calculated?', a: 'Enterprise pricing is based on monthly volume, currency mix, and any add-ons you need. Our team will build a custom quote with you.' },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        eyebrow="✦ PRICING"
        title="Simple, transparent pricing that scales with you"
        subtitle="No hidden fees, no surprise invoices. Pick a plan that matches how your business moves money today, and upgrade the moment it doesn't."
      />

      <Pricing />

      <section className="pp-compare">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ COMPARE PLANS</div>
            <h2>Every feature, side by side</h2>
          </div>

          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{typeof row.basic === 'boolean' ? renderCheck(row.basic) : row.basic}</td>
                    <td>{typeof row.pro === 'boolean' ? renderCheck(row.pro) : row.pro}</td>
                    <td>{typeof row.ent === 'boolean' ? renderCheck(row.ent) : row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pp-addons">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ ADD-ONS</div>
            <h2>Extend any plan as you grow</h2>
          </div>

          <div className="pp-addons-grid">
            {addons.map((a) => (
              <div key={a.title} className="pp-addon-card">
                <h4>{a.title}</h4>
                <p>{a.text}</p>
                <span className="pp-addon-price">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-faq">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ BILLING QUESTIONS</div>
            <h2>Pricing FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/faq" className="btn btn-dark">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}

function renderCheck(value) {
  return value ? <span className="pp-check">✓</span> : <span className="pp-dash">—</span>
}
