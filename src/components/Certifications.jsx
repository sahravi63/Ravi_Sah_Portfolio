import SectionHeader from "./SectionHeader.jsx";
import { getIconLabel } from "./iconMap.js";

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section section-muted">
      <div className="container">
        <SectionHeader
          label="Credentials - 05"
          title="Certifications"
          description="Cloud and machine-learning credentials backed by verifiable certification details."
        />

        <div className="card-grid two">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className={`card certification-card reveal accent-${certification.accent}`}
            >
              <span className="icon-badge">{getIconLabel(certification.iconKey)}</span>
              <div>
                <p className="eyebrow">{certification.issuer}</p>
                <h3>{certification.name}</h3>
                <p className="subtle">{certification.validity}</p>
                <div className="project-links">
                  {certification.badge && (
                    <a href={certification.badge} target="_blank" rel="noopener noreferrer">
                      View Badge
                    </a>
                  )}
                  {certification.certificate && (
                    <a href={certification.certificate} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
