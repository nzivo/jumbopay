export const blogPosts = [
  {
    slug: 'ai-in-modern-payment-networks',
    tag: 'Product',
    date: 'Feb 18, 2026',
    readTime: '6 min read',
    variant: 'dots',
    title: 'The role of AI in modern payment networks',
    excerpt: 'How adaptive machine learning models are reshaping fraud detection, routing, and approval rates across global payment rails.',
    author: { name: 'Sofia Reyes', role: 'VP of Product', initials: 'SR' },
    content: [
      'Every payment network makes thousands of small decisions per second: which route to send a transaction down, whether to challenge a card for additional verification, and how to price interchange for a given merchant. For most of the industry\'s history, those decisions were made with static rules written by risk teams and updated on a quarterly cadence.',
      'That approach is breaking down. Fraud patterns shift weekly, not quarterly, and the cost of a false decline is now understood to be as damaging as the cost of a missed fraud case. Machine learning models trained continuously on transaction data can adapt in near real time, catching new fraud patterns within hours rather than waiting for the next rules review.',
      'At Jumbopay, our fraud engine scores every transaction against hundreds of signals, from device fingerprint to behavioral velocity, and routes borderline cases through step-up authentication instead of an outright decline. The result has been a meaningful lift in approval rates without any increase in chargeback exposure for the merchants who use it.',
      'The next frontier is routing intelligence: using the same models to choose which acquiring bank or local rail gives a transaction the best chance of success, not just the lowest fee. We expect this to be one of the most consequential, and least visible, improvements in payments over the next few years.',
    ],
  },
  {
    slug: 'instant-settlement-cash-flow',
    tag: 'Payments',
    date: 'Feb 15, 2026',
    readTime: '4 min read',
    variant: 'bars',
    title: 'How instant settlement changes cash flow',
    excerpt: 'Why waiting two to five business days for funds is no longer acceptable, and what real-time payouts unlock for growing businesses.',
    author: { name: 'Marcus Odei', role: 'Chief Technology Officer', initials: 'MO' },
    content: [
      'Ask any finance lead at a fast-growing company what keeps them up at night, and "working capital" comes up more often than almost anything else. Traditional card settlement takes two to five business days, which means a business processing a million dollars a week is routinely carrying several hundred thousand dollars of capital in limbo, doing nothing.',
      'Instant settlement closes that gap. Instead of waiting on batch processing and banking cut-off times, funds move to your account within minutes of a transaction clearing. For businesses with thin margins or seasonal demand, that difference can be the line between hiring ahead of a busy quarter and scrambling for a bridge loan.',
      'We\'ve seen customers use the freed-up capital in very different ways: some reinvest it directly into inventory, others use it to negotiate better terms with their own suppliers by paying faster. Either way, the pattern is the same — cash that used to sit idle in the settlement pipeline is now working for the business immediately.',
      'Instant settlement isn\'t free to provide; it requires real relationships with local banking rails in every market you support. That\'s part of why we built our own routing layer rather than relying on a single processor, and it\'s the reason settlement speed varies so much between payment providers today.',
    ],
  },
  {
    slug: 'stopping-fraud-before-checkout',
    tag: 'Security',
    date: 'Feb 12, 2026',
    readTime: '5 min read',
    variant: 'check',
    title: 'Stopping fraud before it reaches checkout',
    excerpt: 'A look inside the layered defenses that catch fraudulent transactions before they ever get a chance to complete.',
    author: { name: 'Kabir Anand', role: 'Head of Risk & Compliance', initials: 'KA' },
    content: [
      'The best fraud prevention is invisible to legitimate customers and impossible for fraudsters to route around. That balance is harder to strike than it sounds, since almost every signal that separates a stolen card from a genuine one can, in rare cases, also describe a normal customer having an unusual day.',
      'We think about defense in layers. Device and network signals catch the most obvious automated attacks before a transaction ever reaches a decision engine. Behavioral models look at how a session compares to a customer\'s own history and to patterns across the wider network. Only transactions that clear every layer with confidence are approved automatically; everything else gets a proportionate response, from a soft challenge to an outright block.',
      'One principle we hold firmly: false declines are also a fraud cost, just one that shows up as lost revenue instead of a chargeback. A model tuned purely to minimize fraud losses will reject far too many genuine customers, so every threshold we ship is evaluated against both sides of that equation.',
      'Compliance and security teams sometimes treat fraud prevention as a cost center. We\'d argue it\'s closer to a growth lever: merchants who trust their fraud stack are willing to say yes to more transactions, more markets, and more payment methods, because they know the guardrails are already in place.',
    ],
  },
  {
    slug: 'expanding-to-six-new-markets',
    tag: 'Company',
    date: 'Feb 8, 2026',
    readTime: '3 min read',
    variant: 'dots',
    title: 'What it takes to expand payment rails into six new markets',
    excerpt: 'Behind the scenes of our latest expansion: local banking partnerships, regulatory groundwork, and lessons learned along the way.',
    author: { name: 'Elena Voss', role: 'Chief Executive Officer', initials: 'EV' },
    content: [
      'Launching in a new market looks simple from the outside: flip a switch, and a country appears in the dashboard. In reality, every market requires its own local banking relationships, its own regulatory registration, and often its own preferred payment methods that barely exist anywhere else in the world.',
      'This quarter we added local settlement rails in six new markets across Southeast Asia and Latin America. In several of them, bank transfers and mobile wallets outnumber card payments entirely, which meant building new integrations from scratch rather than extending our existing card processing stack.',
      'The regulatory groundwork is often the longest pole in the tent. Money transmission licensing, data residency requirements, and local reporting obligations can take months to clear even before the first test transaction runs. We work with local counsel and compliance partners in every market well ahead of any public launch.',
      'None of this is visible to a merchant using Jumbopay: from their side, it\'s still one integration and one dashboard. That\'s the point. The complexity of going local should be our problem to solve, not something we pass down to the businesses building on top of us.',
    ],
  },
  {
    slug: 'reducing-checkout-abandonment',
    tag: 'Product',
    date: 'Feb 3, 2026',
    readTime: '5 min read',
    variant: 'bars',
    title: 'Five small checkout changes that reduce cart abandonment',
    excerpt: 'Practical, low-effort adjustments to your checkout flow that consistently move conversion numbers.',
    author: { name: 'Sofia Reyes', role: 'VP of Product', initials: 'SR' },
    content: [
      'Most checkout abandonment isn\'t caused by dramatic product problems; it\'s caused by small pieces of friction that accumulate. A card field that doesn\'t auto-format, a currency that doesn\'t match what a customer expects, or an extra page before the final confirmation can each cost a percentage point or two of conversion on their own.',
      'The single highest-impact change we see merchants make is showing local payment methods by default rather than defaulting everyone to card entry. In markets where bank transfers or wallets dominate, this alone can lift conversion by double digits.',
      'Saved payment methods and one-click checkout for returning customers remove an entire step for your highest-intent buyers. Combined with smart retry logic for declined transactions, which quietly attempts a second authorization before showing an error, this recovers a surprising share of transactions that would otherwise be lost.',
      'Finally, transparency about fees and delivery timing before the final click reduces abandonment at the last step of the funnel, where a surprised customer is most likely to close the tab entirely.',
    ],
  },
  {
    slug: 'pci-dss-explained',
    tag: 'Security',
    date: 'Jan 28, 2026',
    readTime: '4 min read',
    variant: 'check',
    title: 'PCI DSS compliance, explained for non-security teams',
    excerpt: 'What PCI DSS actually requires, why it matters even if you never touch raw card data, and how Jumbopay handles it for you.',
    author: { name: 'Kabir Anand', role: 'Head of Risk & Compliance', initials: 'KA' },
    content: [
      'PCI DSS, the Payment Card Industry Data Security Standard, is the baseline set of security requirements every business that touches card data must meet. For most merchants using a hosted checkout or tokenized payment fields, the practical burden is far lighter than the standard\'s reputation suggests.',
      'The key idea is scope reduction: if raw card numbers never touch your servers, your compliance obligations shrink dramatically. Jumbopay\'s hosted fields and checkout links are designed specifically so that card data goes directly to our PCI DSS Level 1 certified infrastructure, never through yours.',
      'That said, compliance isn\'t only about card data. Access controls, logging, and how your team handles any payment-related information still matter, and we provide guidance and self-assessment questionnaires to make that part straightforward too.',
      'The businesses that get tripped up are usually the ones who built a custom card form years ago and never revisited it. If that describes your checkout, migrating to a hosted or tokenized flow is one of the highest-leverage changes you can make this quarter.',
    ],
  },
]

export const blogCategories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.tag)))]

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(post, limit = 3) {
  return blogPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, limit)
}
