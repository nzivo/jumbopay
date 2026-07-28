import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FaqAccordion from '../components/FaqAccordion'
import FinalCta from '../components/FinalCta'
import './FaqPage.css'

const categories = {
  General: [
    { q: 'What is Jumbopay and how does it work?', a: 'Jumbopay is a checkout and payments layer that lets you accept cards, wallets, and bank transfers through a single integration, with settlement handled automatically.' },
    { q: 'Which countries can I accept payments from?', a: 'Jumbopay supports payment acceptance and local settlement across 45 markets, with more added every quarter.' },
    { q: 'Do I need a developer to get started?', a: 'No. You can launch with our no-code checkout links, or hand our API docs to a developer for a fully custom integration.' },
  ],
  'Pricing & billing': [
    { q: 'Are there any hidden fees?', a: 'No. Pricing is transparent and shown up front on every plan, with no surprise charges or setup fees.' },
    { q: 'Can I change plans at any time?', a: 'Yes, upgrades apply immediately and downgrades take effect at the start of your next billing cycle.' },
    { q: 'How does Enterprise billing work?', a: 'Enterprise pricing is volume-based and quoted individually by our sales team based on your needs.' },
  ],
  Security: [
    { q: 'Is Jumbopay secure for online transactions?', a: 'Yes. All transactions are encrypted end to end and monitored in real time by our fraud detection engine.' },
    { q: 'Are you PCI DSS compliant?', a: 'Jumbopay is PCI DSS Level 1 certified, the highest level of payment security certification available.' },
    { q: 'How do you handle disputes and chargebacks?', a: 'Our dispute management tools automatically collect evidence and help you respond within card network deadlines.' },
  ],
  Integrations: [
    { q: 'Which payment methods are supported?', a: 'Cards, digital wallets, bank transfers, and local payment rails across 130+ currencies.' },
    { q: 'Do you have SDKs for my stack?', a: 'Yes, we maintain SDKs for JavaScript, Python, Ruby, PHP, Java, and Go, plus a full REST API and webhooks.' },
    { q: 'Can I connect Jumbopay to my existing CRM?', a: 'Yes, Jumbopay integrates with major CRM and accounting tools, or you can build a custom sync using our webhooks.' },
  ],
}

const tabs = Object.keys(categories)

export default function FaqPage() {
  const [active, setActive] = useState(tabs[0])

  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="✦ SUPPORT & HELP"
        title="Frequently asked questions"
        subtitle="Straightforward answers about pricing, security, integrations, and getting started with Jumbopay."
      />

      <section className="faqpage-section">
        <div className="container">
          <div className="faqpage-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`faqpage-tab ${active === tab ? 'active' : ''}`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="faqpage-list-wrap">
            <FaqAccordion key={active} items={categories[active]} />
          </div>

          <div className="faqpage-support">
            <div>
              <h3>Still have questions?</h3>
              <p>Our support team typically replies within a couple of hours, every day of the week.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Contact support →
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
