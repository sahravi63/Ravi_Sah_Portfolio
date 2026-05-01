import { portfolioData } from "../mock.js";

export default function Footer({ name }) {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            &lt;ravi<span>.</span>sah/&gt;
          </p>
          <p>Building reliable, intelligent software at the intersection of ML and full-stack engineering.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            {portfolioData.navLinks.map((link) => (
              <a href={`#${link.id}`} key={link.id}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>Connect</h3>
          <div className="footer-socials">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.contact.email}`}>Email</a>
            <button onClick={scrollTop}>Top</button>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} {name}. All rights reserved.</span>
        <span>Designed and built with React.</span>
      </div>
    </footer>
  );
}
