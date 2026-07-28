import './TechShowcase.css'

const chips = [
  { label: 'Fraud engine', style: { top: '34%', left: '0%' } },
  { label: 'Payment gateway', style: { top: '30%', right: '0%' } },
  { label: 'Smart routing', style: { bottom: '22%', left: '2%' } },
  { label: 'Instant settle', style: { bottom: '30%', right: '2%' } },
]

export default function TechShowcase() {
  return (
    <section className="tech">
      <div className="tech-rings" />
      <div className="container tech-inner">
        <div className="eyebrow lime">OUR TECHNOLOGY</div>

        <div className="tech-stage">
          {chips.map((c) => (
            <span key={c.label} className="tech-chip" style={c.style}>
              <i /> {c.label}
            </span>
          ))}

          <div className="tech-phone">
            <div className="tech-phone-notch" />
            <div className="tech-phone-screen">
              <span className="tech-label">Send money</span>
              <span className="tech-amount">$1,250</span>

              <div className="tech-recipient">
                <span className="tech-avatar" />
                <div>
                  <strong>To: A. Mercer</strong>
                  <span>Account 5840</span>
                </div>
              </div>

              <div className="tech-status">
                <span className="tech-status-label">Network status</span>
                {['Verified', 'Encrypted', 'Routed'].map((s) => (
                  <div key={s} className="tech-status-row">
                    <span className="tech-status-dot" /> {s}
                  </div>
                ))}
              </div>

              <div className="tech-btn">Confirm payment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
