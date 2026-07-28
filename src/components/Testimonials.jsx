import { useState } from 'react'
import './Testimonials.css'

const reviews = [
  {
    text: 'Switching to Jumbopay cut our checkout failures almost overnight. Settlements that used to take days now clear the same morning, and our finance team finally trusts the numbers in front of them.',
    name: 'Daniel Foster',
    role: 'Product Lead · Brightcart',
    initials: 'DF',
  },
  {
    text: 'We expanded into six new markets without rebuilding our payment stack. One integration handled every currency.',
    name: 'Maya Iqbal',
    role: 'Head of Finance · Loop Studio',
    initials: 'MI',
  },
  {
    text: 'The fraud engine caught patterns our old provider missed entirely. Chargebacks dropped by a third in two months.',
    name: 'Tomas Reyes',
    role: 'COO · Settl',
    initials: 'TR',
  },
  {
    text: 'Onboarding took an afternoon, not a quarter. The dashboard gives our whole team one source of truth for revenue.',
    name: 'Aisha Khan',
    role: 'Founder · Vaultic',
    initials: 'AK',
  },
  {
    text: 'Real-time payouts changed how we run cash flow. We stopped holding buffer capital just to cover settlement delays.',
    name: 'Priya Nandakumar',
    role: 'CFO · Fernway',
    initials: 'PN',
  },
  {
    text: 'Their API docs are the best we’ve integrated against. We shipped a full checkout flow in under a week.',
    name: 'Lars Eriksen',
    role: 'Engineering Lead · Northloop',
    initials: 'LE',
  },
]

export default function Testimonials() {
  const [start, setStart] = useState(0)
  const total = reviews.length
  const featured = reviews[start]
  const visible = [1, 2, 3].map((offset) => reviews[(start + offset) % total])

  const handlePrev = () => setStart((s) => (s - 1 + total) % total)
  const handleNext = () => setStart((s) => (s + 1) % total)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow dark">✦ TESTIMONIALS</div>
          <h2>Loved by teams moving money worldwide</h2>
          <p>Finance leaders, founders, and operators trust Jumbopay to move money faster and safer.</p>
        </div>

        <div className="testi-grid">
          <div className="testi-main">
            <div className="testi-main-top">
              <div className="stars">★★★★★</div>
              <span className="quote-mark">”</span>
            </div>
            <p className="testi-quote" key={featured.name}>
              {featured.text}
            </p>
            <div className="testi-author-row">
              <div className="testi-author" key={featured.name}>
                <span className="avatar">{featured.initials}</span>
                <div>
                  <strong>{featured.name}</strong>
                  <span>{featured.role}</span>
                </div>
              </div>
              <div className="testi-arrows">
                <button aria-label="Previous" onClick={handlePrev}>←</button>
                <button aria-label="Next" onClick={handleNext}>→</button>
              </div>
            </div>
          </div>

          <div className="testi-stats">
            <div className="testi-score">
              <strong>4.9</strong>
              <div className="stars">★★★★★</div>
              <span>Average rating across 12k+ reviews</span>
            </div>
            <ul>
              <li>
                <strong>669k+</strong>
                <span>
                  Active users
                  <br />
                  worldwide
                </span>
              </li>
              <li>
                <strong>18M+</strong>
                <span>
                  Payments processed
                  <br />
                  monthly
                </span>
              </li>
              <li>
                <strong>45</strong>
                <span>
                  Markets served
                  <br />
                  and growing
                </span>
              </li>
            </ul>
            <div className="testi-brands">Brightcart&ensp;Loop&ensp;Settl&ensp;Vaultic</div>
          </div>

          <div className="testi-lower">
            {visible.map((r) => (
              <div key={r.name} className="testi-small">
                <div className="stars">★★★★★</div>
                <p>{r.text}</p>
                <div className="testi-author">
                  <span className="avatar">{r.initials}</span>
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
