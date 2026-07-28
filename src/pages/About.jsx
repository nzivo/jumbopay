import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import './About.css'

const timeline = [
  { year: '2019', title: 'Jumbopay is founded', text: 'Started in a small office with one goal: make cross-border payments feel local.' },
  { year: '2021', title: 'First 1M transactions', text: 'Launched multi-currency settlement and crossed our first million processed payments.' },
  { year: '2023', title: 'Global expansion', text: 'Opened routing across 45 markets and introduced real-time fraud detection.' },
  { year: '2026', title: '18M+ users served', text: 'Now powering payments for thousands of businesses moving money without borders.' },
]

const values = [
  {
    title: 'Radical transparency',
    text: 'No hidden fees, no fine print. Pricing and settlement times are shown up front, every time.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 5.5v4l2.6 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Security first',
    text: 'Every transaction is encrypted end to end and monitored by adaptive fraud models around the clock.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2 3.5 4v4.2c0 3.4 2.3 6.2 5.5 7.3 3.2-1.1 5.5-3.9 5.5-7.3V4L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Built to scale',
    text: 'From your first sale to your billionth, the same infrastructure handles it without missing a beat.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 14V9M8 14V6M13 14v-5M3 14h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Humans behind the API',
    text: 'Real support engineers answer your questions, no matter how big or small your business is.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 15c.7-3 3-4.6 5.5-4.6s4.8 1.6 5.5 4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

const team = [
  { name: 'Elena Voss', role: 'Chief Executive Officer', initials: 'EV' },
  { name: 'Marcus Odei', role: 'Chief Technology Officer', initials: 'MO' },
  { name: 'Sofia Reyes', role: 'VP of Product', initials: 'SR' },
  { name: 'Kabir Anand', role: 'Head of Risk & Compliance', initials: 'KA' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About us"
        eyebrow="✦ OUR STORY"
        title="Building the payment rails for global business"
        subtitle="Jumbopay started with a simple frustration: moving money across borders took too long and cost too much. Today we help thousands of businesses accept and settle payments everywhere their customers are."
      />

      <section className="about-story">
        <div className="container about-story-inner">
          <div className="about-story-copy">
            <div className="eyebrow dark">✦ OUR MISSION</div>
            <h2>Money should move as fast as your business does</h2>
            <p>
              We founded Jumbopay after watching too many great businesses get held back by slow
              settlement, opaque fees, and payment stacks that couldn't keep up with how fast they
              were growing.
            </p>
            <p>
              So we built the infrastructure we wished existed: one integration for cards, wallets,
              and bank transfers, instant settlement, and pricing that's honest from the first
              invoice. It's the same platform whether you're processing your first sale or your
              billionth.
            </p>
            <Link to="/contact" className="btn btn-dark">
              Get in touch →
            </Link>
          </div>

          <div className="about-stat-grid">
            <div className="about-stat-card">
              <strong>18M+</strong>
              <span>Active users served worldwide</span>
            </div>
            <div className="about-stat-card">
              <strong>45</strong>
              <span>Markets with local settlement rails</span>
            </div>
            <div className="about-stat-card">
              <strong>130+</strong>
              <span>Currencies supported at checkout</span>
            </div>
            <div className="about-stat-card">
              <strong>99.99%</strong>
              <span>Platform uptime, every quarter</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ HOW WE GOT HERE</div>
            <h2>Seven years of building payment infrastructure</h2>
            <p>From a two-person team to the rails behind thousands of businesses.</p>
          </div>

          <div className="about-timeline-track">
            {timeline.map((item) => (
              <div key={item.year} className="about-timeline-item">
                <div className="about-timeline-year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ WHAT WE STAND FOR</div>
            <h2>The principles behind every release</h2>
          </div>

          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.title} className="about-value-card">
                <span className="about-value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow dark">✦ LEADERSHIP</div>
            <h2>The team steering Jumbopay</h2>
            <p>Operators and engineers from payments, banking, and fraud backgrounds.</p>
          </div>

          <div className="about-team-grid">
            {team.map((member) => (
              <div key={member.name} className="about-team-card">
                <span className="about-team-avatar">{member.initials}</span>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
