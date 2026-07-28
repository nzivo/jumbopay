import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Faq.css'

const faqs = [
  {
    q: 'What is Jumbopay Pay and how does it work?',
    a: 'Jumbopay Pay is a checkout and payments layer that lets you accept cards, wallets, and bank transfers through a single integration, with settlement handled automatically.',
  },
  {
    q: 'Is Jumbopay Pay secure for online transactions?',
    a: 'Yes. All transactions are encrypted end to end and monitored in real time by our fraud detection engine.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'Cards, digital wallets, bank transfers, and local payment rails across 50+ currencies.',
  },
  {
    q: 'Can I accept international payments?',
    a: 'Yes, Jumbopay routes payments through local rails in each region for faster, cheaper settlement.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. Pricing is transparent and shown up front on every plan, with no surprise charges.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq">
      <div className="container faq-inner">
        <div className="faq-side">
          <div className="eyebrow dark">✦ SUPPORT &amp; HELP</div>
          <h2>Frequently asked questions</h2>
          <p>
            Find straightforward answers to common questions about Jumbopay, covering
            pricing, security, features, and how you can get started faster.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={item.q} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                {item.q}
                <span className={open === i ? 'filled' : ''}>{open === i ? '×' : '+'}</span>
              </button>
              {open === i && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
