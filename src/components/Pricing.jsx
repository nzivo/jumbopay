import { Link } from "react-router-dom";
import "./Pricing.css";

const plans = [
  {
    name: "Basic",
    price: "$89",
    period: "Per user/month, billed monthly",
    segment: "For medium-size teams",
    features: [
      "Advanced Data Analytics",
      "Customizable Dashboards",
      "API Access",
    ],
    cta: "Upgrade to Basic",
    to: "/signup",
    highlight: true,
    badge: "Most popular",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 3 15 14H3L9 3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Professional",
    price: "$199",
    period: "Per user/month, billed monthly",
    segment: "For big companies",
    features: [
      "Real-Time Data Processing",
      "Machine Learning Models",
      "Premium Support",
    ],
    cta: "Upgrade to Professional",
    to: "/signup",
    highlight: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="m9 2.5 1.9 3.9 4.3.6-3.1 3 .7 4.3L9 12.3l-3.8 2 .7-4.3-3.1-3 4.3-.6L9 2.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Tailored billing, contact our team",
    segment: "For global organizations",
    features: [
      "Dedicated Infrastructure",
      "Custom Routing Rules",
      "Dedicated Account Team",
    ],
    cta: "Upgrade to Enterprise",
    to: "/contact",
    highlight: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2.5"
          y="2.5"
          width="5"
          height="5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="10.5"
          y="2.5"
          width="5"
          height="5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="2.5"
          y="10.5"
          width="5"
          height="5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="10.5"
          y="10.5"
          width="5"
          height="5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-head">
          <div>
            <div className="eyebrow lime">✦ PRICING PLAN</div>
            <h2>Simple pricing that scales with you</h2>
          </div>
          <p>
            No hidden fees, no surprises. Pick the plan that matches how your
            business moves money.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              <div className="pricing-top">
                <span className="pricing-icon">{plan.icon}</span>
                <h3>{plan.name}</h3>
                {plan.badge && (
                  <span className="pricing-badge">✦ {plan.badge}</span>
                )}
              </div>

              <div className="pricing-amount">{plan.price}</div>
              <p className="pricing-period">{plan.period}</p>

              <hr />

              <p className="pricing-segment">{plan.segment}</p>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.to}
                className={`btn ${plan.highlight ? "btn-primary" : "btn-muted"}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
