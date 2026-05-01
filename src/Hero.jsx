import { useState } from "react";

export default function Hero({ data }) {
  const [imageFailed, setImageFailed] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-background" aria-hidden />
      <div className="container hero-grid">
        <div className="hero-copy reveal in-view">
          <p className="status-pill">
            <span className="status-dot" />
            {data.status}
            <span className="muted-dot">-</span>
            {data.location}
          </p>

          <p className="terminal-line">$ whoami <span>▮</span></p>
          <h1>
            Hi, I&apos;m <span>{data.name}</span>.
          </h1>
          <p className="hero-title">
            I build with <strong>code</strong>, learn from <strong>data</strong>.
          </p>
          <p className="hero-summary">{data.summary}</p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollTo("projects")}>
              View My Work
            </button>
            <button className="secondary-btn" onClick={() => scrollTo("contact")}>
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

        <div className="hero-visual reveal in-view">
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
  stack: ["Python", "React", "AWS"],
  focus: "ML + Cloud",
  learning: true
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
