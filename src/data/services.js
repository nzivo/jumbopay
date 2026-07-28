export const services = [
  {
    slug: "fraud-prevention",
    tag: "Risk & security",
    title: "Fraud prevention with AI",
    tagline: "Stop fraud before it ever reaches checkout",
    summary: "Detect and stop fraudulent activity instantly with adaptive machine learning models trained on billions of transactions.",
    description: [
      "Every transaction that hits Jumbopay is scored in real time against hundreds of signals, from device fingerprint to behavioral velocity, before it is ever given the chance to complete. Models retrain continuously on network-wide data, so new fraud patterns are caught within hours instead of waiting for a quarterly rules review.",
      "Borderline transactions are routed through proportionate step-up authentication rather than an outright decline, which means fewer genuine customers get caught in the crossfire. The result is a meaningful lift in approval rates with no increase in chargeback exposure.",
    ],
    stats: [
      { value: "99.7%", label: "Fraud caught before checkout" },
      { value: "<80ms", label: "Average scoring latency" },
      { value: "32%", label: "Fewer false declines vs. rules-only" },
    ],
    features: [
      "Real-time device fingerprinting and network reputation checks",
      "Behavioral and velocity scoring across the full transaction graph",
      "Adaptive models retrained continuously on network-wide signals",
      "Proportionate step-up authentication instead of blunt declines",
    ],
    useCases: [
      "High-volume e-commerce checkout protection",
      "Marketplace seller and buyer vetting",
      "Subscription signup and trial abuse screening",
    ],
  },
  {
    slug: "multi-currency",
    tag: "Global reach",
    title: "Multi-currency support",
    tagline: "Let every customer pay the way they prefer",
    summary: "Handle transactions in 130+ currencies and let customers pay the way they prefer, wherever they are.",
    description: [
      "Jumbopay settles in 130+ currencies with local pricing displayed at checkout, so customers see familiar amounts instead of confusing conversions. Behind the scenes, our routing layer picks the cheapest and fastest path for every transaction automatically.",
      "You can hold balances in multiple currencies and choose when to convert, giving your finance team control over FX exposure instead of forcing an immediate conversion on every sale.",
    ],
    stats: [
      { value: "130+", label: "Currencies supported" },
      { value: "45", label: "Markets with local rails" },
      { value: "0.4%", label: "Average FX spread" },
    ],
    features: [
      "Local currency display and dynamic pricing at checkout",
      "Multi-currency balances with flexible conversion timing",
      "Automatic routing to the cheapest available settlement path",
      "Transparent, published FX rates with no hidden markup",
    ],
    useCases: [
      "Cross-border e-commerce storefronts",
      "Global SaaS subscription billing",
      "Marketplaces paying out sellers internationally",
    ],
  },
  {
    slug: "global-processing",
    tag: "Infrastructure",
    title: "Global payment processing",
    tagline: "One integration, every market you sell into",
    summary: "Accept payments from anywhere in the world through a single, reliable integration built to scale.",
    description: [
      "Rather than stitching together a different processor for every region, Jumbopay gives you one API that already speaks the local payment methods, banking rails, and compliance requirements of 45 markets.",
      "Our infrastructure is built for peak load from day one: the same processing layer that handles your first transaction handles Black Friday traffic without any re-architecture on your side.",
    ],
    stats: [
      { value: "99.99%", label: "Platform uptime, every quarter" },
      { value: "45", label: "Markets with native processing" },
      { value: "18M+", label: "Transactions processed monthly" },
    ],
    features: [
      "Single API for cards, wallets, and bank transfers worldwide",
      "Local acquiring relationships in every supported market",
      "Elastic infrastructure that absorbs seasonal traffic spikes",
      "Automatic failover across redundant processing paths",
    ],
    useCases: [
      "Retailers expanding into new international markets",
      "Platforms with unpredictable, spiky transaction volume",
      "Businesses replacing multiple regional processors with one",
    ],
  },
  {
    slug: "lower-costs",
    tag: "Pricing",
    title: "Lower processing costs",
    tagline: "Pay less without switching providers every year",
    summary: "Cut fees with smart routing and transparent, predictable transaction pricing at every volume tier.",
    description: [
      "Our routing engine chooses the lowest-cost path for every transaction that still meets your approval-rate targets, so savings compound automatically as your volume grows rather than requiring a manual renegotiation.",
      "Pricing is published up front for every plan, with volume discounts that apply automatically once you cross a threshold, no calls to a sales team required to see the number that matters.",
    ],
    stats: [
      { value: "50%", label: "Average cost reduction vs. legacy stack" },
      { value: "0", label: "Hidden fees or surprise line items" },
      { value: "3", label: "Volume tiers with automatic discounts" },
    ],
    features: [
      "Smart routing that continuously optimizes for lowest net cost",
      "Transparent, published pricing with no setup fees",
      "Automatic volume discounts as your processing grows",
      "Detailed cost breakdowns by market, method, and channel",
    ],
    useCases: [
      "Thin-margin retailers optimizing unit economics",
      "High-volume merchants consolidating multiple processors",
      "Finance teams needing predictable, auditable fee reporting",
    ],
  },
  {
    slug: "instant-settlement",
    tag: "Payouts",
    title: "Instant settlement & payouts",
    tagline: "Put your revenue to work the moment it clears",
    summary: "Move funds to your account in real time, without waiting on banking cut-off times or business days.",
    description: [
      "Instead of the traditional two-to-five business day settlement window, funds move to your account within minutes of a transaction clearing. That freed-up working capital can go straight back into inventory, payroll, or supplier terms.",
      "Instant settlement runs on our own relationships with local banking rails in every market, which is why the feature works consistently everywhere Jumbopay operates rather than only in a handful of markets.",
    ],
    stats: [
      { value: "<2s", label: "Average settlement time" },
      { value: "24/7", label: "Payouts, including weekends" },
      { value: "45", label: "Markets with instant local rails" },
    ],
    features: [
      "Real-time payouts to linked bank accounts, day or night",
      "No dependency on banking cut-off times or business days",
      "Configurable payout schedules for teams that prefer batching",
      "Full visibility into settlement status from the dashboard",
    ],
    useCases: [
      "Businesses with tight working-capital cycles",
      "Marketplaces paying out sellers same-day",
      "Seasonal merchants needing cash on hand during peak periods",
    ],
  },
  {
    slug: "recurring-billing",
    tag: "Billing",
    title: "Recurring billing & subscriptions",
    tagline: "Recover more failed payments, automatically",
    summary: "Automate renewals and retries with flexible billing cycles that recover failed payments automatically.",
    description: [
      "Jumbopay handles the full subscription lifecycle: trials, upgrades, proration, dunning, and involuntary churn recovery. Smart retry logic waits for the right moment to reattempt a declined card instead of hammering the network on a fixed schedule.",
      "Every billing cycle, currency, and plan change is logged and reconcilable, so your finance team never has to guess why a subscriber's invoice looked different from last month.",
    ],
    stats: [
      { value: "28%", label: "Failed payments recovered on retry" },
      { value: "12", label: "Billing cycle configurations supported" },
      { value: "0", label: "Manual dunning emails required" },
    ],
    features: [
      "Flexible billing cycles: monthly, annual, usage-based, or custom",
      "Smart retry logic timed around card-issuer behavior",
      "Automated dunning emails and in-app renewal reminders",
      "Proration handling for upgrades, downgrades, and cancellations",
    ],
    useCases: [
      "SaaS products with tiered or usage-based pricing",
      "Membership and content subscription businesses",
      "Any business recovering revenue lost to failed card renewals",
    ],
  },
  {
    slug: "api-first",
    tag: "Developers",
    title: "Built for developers, API-first",
    tagline: "Ship a production checkout in a day, not a quarter",
    summary: "Ship faster with clean REST APIs, SDKs, and webhooks that plug into any stack.",
    description: [
      "Every feature in the Jumbopay dashboard is backed by a documented REST endpoint, so nothing you can do by hand is off-limits to automation. SDKs cover the major languages, and webhooks keep your systems in sync without polling.",
      "Sandbox and production share the exact same API surface, so testing your integration does not mean maintaining a second, slightly different mental model of how the platform behaves.",
    ],
    stats: [
      { value: "6", label: "Official language SDKs" },
      { value: "<1 day", label: "Typical time to first live checkout" },
      { value: "99.99%", label: "Webhook delivery reliability" },
    ],
    features: [
      "Clean, versioned REST API with predictable pagination and errors",
      "Official SDKs for JavaScript, Python, Ruby, PHP, Java, and Go",
      "Webhooks for every state change, with automatic retry on failure",
      "Identical sandbox and production environments, one toggle apart",
    ],
    useCases: [
      "Engineering teams building a fully custom checkout",
      "Platforms embedding payments inside their own product",
      "Companies automating reconciliation against internal ledgers",
    ],
  },
  {
    slug: "chargeback-protection",
    tag: "Risk & security",
    title: "Chargeback & dispute protection",
    tagline: "Win more disputes with less manual work",
    summary: "Automated evidence collection and dispute management to help you win more chargebacks.",
    description: [
      "When a dispute is filed, Jumbopay automatically assembles the evidence package: transaction logs, delivery confirmation, device data, and prior communication, then submits it within the card network's deadline without anyone on your team touching a spreadsheet.",
      "A running risk score flags merchants and buyers trending toward higher dispute rates before it becomes a network-level problem, so you can act early rather than reactively.",
    ],
    stats: [
      { value: "38%", label: "Higher dispute win rate on average" },
      { value: "0", label: "Manual evidence packets required" },
      { value: "<24h", label: "From dispute filed to response submitted" },
    ],
    features: [
      "Automatic evidence collection from transaction and delivery data",
      "Deadline-aware submission to card networks on your behalf",
      "Ongoing dispute-rate monitoring with early-warning alerts",
      "Full dispute history and outcomes surfaced in the dashboard",
    ],
    useCases: [
      "Merchants with high order volume and limited support staff",
      "Digital goods sellers facing friendly-fraud disputes",
      "Businesses working to stay under card network dispute thresholds",
    ],
  },
  {
    slug: "real-time-reporting",
    tag: "Analytics",
    title: "Real-time reporting",
    tagline: "One source of truth for every market and channel",
    summary: "One dashboard for every market, currency, and channel, with exports your finance team can trust.",
    description: [
      "Every transaction, settlement, and dispute rolls up into a single real-time dashboard, broken down by market, currency, and channel. No more reconciling numbers across three different processor portals at month end.",
      "Exports match what your finance team already expects from a general ledger, and scheduled reports land in their inbox automatically instead of requiring someone to remember to pull them.",
    ],
    stats: [
      { value: "Real time", label: "Data latency across the dashboard" },
      { value: "20+", label: "Pre-built report templates" },
      { value: "1", label: "Single source of truth for finance" },
    ],
    features: [
      "Unified reporting across every market, currency, and channel",
      "Scheduled exports delivered automatically to your finance team",
      "Custom dashboards and saved views for different stakeholders",
      "Drill-down from summary metrics to individual transactions",
    ],
    useCases: [
      "Finance teams closing the books across multiple entities",
      "Operators tracking performance by market or channel",
      "Businesses needing audit-ready transaction history on demand",
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}

export function getOtherServices(service, limit = 3) {
  return services.filter((s) => s.slug !== service.slug).slice(0, limit)
}
