import { useState } from "react";
import { scrollToSection } from "./scroll.js";

export default function Hero({ data }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="about" className="hero-section">
      <div className="hero-background" aria-hidden />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="status-pill">
            <span className="status-dot" />
            {data.status}
            <span className="muted-dot">-</span>
            {data.location}
          </p>

          <p className="terminal-line">$ whoami <span>▮</span></p>
          <h1 className="hero-heading">
            <span className="hero-heading-inner">
              Hi, I&apos;m <span>{data.name}</span>.
            </span>
          </h1>
          <p className="hero-title">
            I build secure software and <strong>reliable AI</strong>.
          </p>
          <p className="hero-summary">{data.summary}</p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollToSection("projects")}>
              View My Work
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </button>
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="stats-grid" aria-label="Portfolio stats">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="portrait-wrap">
            {!imageFailed ? (
              <img src={data.photo} alt={data.name} onError={() => setImageFailed(true)} />
            ) : (
              <div className="portrait-fallback">{data.initials}</div>
            )}
          </div>
          <div className="terminal-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
              ~/portfolio
            </div>
            <pre>{`const ravi = {
  stack: ["Python", "FastAPI", "React"],
  focus: "Reliable AI + Full Stack",
  learning: true
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
