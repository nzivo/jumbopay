import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { serviceIcons } from "./serviceIcons";
import "./Services.css";

export default function Services() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, services.length - 1));
    const card = track.children[clamped];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const children = track.children;
      if (children.length < 2) return;
      const step = children[1].offsetLeft - children[0].offsetLeft;
      if (step > 0) {
        setPerView(Math.max(1, Math.round(track.clientWidth / step)));
      }
    };

    const onScroll = () => {
      let closest = 0;
      let closestDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - track.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    measure();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const pageCount = Math.max(1, Math.ceil(services.length / perView));
  const activePage = Math.min(pageCount - 1, Math.floor(active / perView));

  return (
    <section className="services">
      <div className="container">
        <div className="services-head">
          <div className="eyebrow dark">✦ OUR PAYMENT SERVICES</div>
          <h2>One gateway, many services</h2>
        </div>

        <div className="services-track" ref={trackRef}>
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="service-card">
              <div className="service-icon">{serviceIcons[s.slug]}</div>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <span className="service-tag">{s.tag}</span>
            </Link>
          ))}
        </div>

        <div className="services-nav">
          <button
            aria-label="Previous"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
          >
            ←
          </button>
          <div className="services-dots">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activePage ? "active" : ""}`}
                aria-label={`Go to services ${i * perView + 1}`}
                onClick={() => scrollToIndex(i * perView)}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === services.length - 1}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
