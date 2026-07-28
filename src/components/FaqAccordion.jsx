import { useState } from 'react'

export default function FaqAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={item.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
            <span className={open === i ? 'filled' : ''}>{open === i ? '×' : '+'}</span>
          </button>
          {open === i && <p className="faq-answer">{item.a}</p>}
        </div>
      ))}
    </div>
  )
}
