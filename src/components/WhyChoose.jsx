import { Link } from "react-router-dom";
import "./WhyChoose.css";

const items = [
  {
    title: "Lightning fast transactions",
    text: "Experience instant, reliable payments designed to keep your business moving without delays.",
    stat: "Avg settle under 2s",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M9 1 3 9h4l-1 6 6-8H8l1-6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Bank grade security",
    text: "Protecting every transaction with advanced encryption and continuous fraud monitoring.",
    stat: "256 bit encryption",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5 3 3.4V7.5c0 3 2.1 5.5 5 6.5 2.9-1 5-3.5 5-6.5V3.4L8 1.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Trusted by businesses",
    text: "Thousands of businesses worldwide rely on Jumbopay for secure, dependable money movement.",
    stat: "18M+ users served",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M3 14c.6-2.6 2.7-4 5-4s4.4 1.4 5 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 4.2 13 5.2l2-2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="why">
      <div className="container">
        <div className="why-head">
          <div>
            <div className="eyebrow lime">✦ WHY TEAMS CHOOSE JUMBOPAY</div>
            <h2>A smarter way to pay, built for every team</h2>
          </div>
          <p>
            Move money the way modern businesses expect: instant, secure, and
            trusted at scale.
          </p>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <div key={item.title} className="why-card">
              <span className="why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="why-card-footer">
                <span className="why-stat">
                  <i /> {item.stat}
                </span>
                <Link to="/services" aria-label="Learn more">
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
