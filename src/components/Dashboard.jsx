import './Dashboard.css'

const stats = [
  { value: '0%', label: 'Transaction cost savings' },
  { value: '0%', label: 'Higher conversion rate' },
]
const statsBottom = [
  { value: '50%', label: 'Transaction cost savings' },
  { value: '25%', label: 'Higher conversion rate' },
]

export default function Dashboard() {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow dark">✦ TAKE CONTROL IN REAL TIME</div>
          <h2>Real time dashboard</h2>
        </div>

        <div className="stat-cluster">
          <div className="stat-row top">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="stat-row bottom">
            <div className="stat-card">
              <strong>{statsBottom[0].value}</strong>
              <span>{statsBottom[0].label}</span>
            </div>
            <p className="stat-insight">
              Real time <span>insight</span>
            </p>
            <div className="stat-card">
              <strong>{statsBottom[1].value}</strong>
              <span>{statsBottom[1].label}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-mock">
          <div className="dash-topbar">
            <div className="dash-brand">
              <span className="dash-dot" /> Jumbopay
            </div>
            <div className="dash-title">Dashboard</div>
            <div className="dash-right">
              <span className="dash-search">Search anything...</span>
              <span className="dash-user">
                <i /> Your Name
              </span>
            </div>
          </div>

          <div className="dash-body">
            <div className="dash-sidebar">
              {['Dashboard', 'Transactions', 'Payouts', 'Customers', 'Settings'].map((s, i) => (
                <div key={s} className={`dash-side-item ${i === 0 ? 'active' : ''}`}>
                  {s}
                </div>
              ))}
            </div>

            <div className="dash-main">
              <div className="dash-cards">
                <div className="dash-card">
                  <span>Total revenue</span>
                  <strong>$513k</strong>
                  <em>+18%</em>
                </div>
                <div className="dash-card">
                  <span>Transactions</span>
                  <strong>321k</strong>
                  <em>+9%</em>
                </div>
                <div className="dash-card">
                  <span>Total products</span>
                  <strong>564</strong>
                  <em>+6%</em>
                </div>
                <div className="dash-card highlight">
                  <span>Customers</span>
                  <strong>254k</strong>
                  <em>+22%</em>
                </div>
              </div>

              <div className="dash-lower">
                <div className="dash-chart">
                  <svg viewBox="0 0 400 120" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="2"
                      points="0,80 40,85 80,70 120,75 160,60 200,68 240,50 280,55 320,45 360,50 400,42"
                    />
                    <polyline
                      fill="none"
                      stroke="var(--lime-500)"
                      strokeWidth="2.5"
                      points="0,95 40,75 80,88 120,50 160,60 200,25 240,42 280,15 320,32 360,8 400,20"
                    />
                  </svg>
                </div>
                <div className="dash-donut">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="var(--lime-500)"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="264"
                      strokeDashoffset="85"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <span>68%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
