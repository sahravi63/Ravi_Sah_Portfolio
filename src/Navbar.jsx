import { useEffect, useState } from "react";
import { portfolioData } from "./mock.js";

export default function Navbar({ activeSection, navLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => scrollTo("about")} aria-label="Go to top">
          <span>&lt;</span>
          ravi<span className="brand-dot">.</span>sah
          <span>/&gt;</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => scrollTo(link.id)}
            >
              <span>0{index + 1}.</span>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <button className="primary-btn small" onClick={() => scrollTo("contact")}>
            Hire Me
          </button>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => scrollTo(link.id)}
            >
              <span>0{index + 1}.</span>
              {link.label}
            </button>
          ))}
          <div className="mobile-links">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.contact.email}`}>Email</a>
          </div>
        </nav>
      )}
    </header>
  );
}
