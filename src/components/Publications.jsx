import SectionHeader from "./SectionHeader.jsx";
import { getIconLabel } from "./iconMap.js";

export default function Publications({ publications }) {
  return (
    <section id="publications" className="section">
      <div className="container">
        <SectionHeader
          label="Research - 05"
          title="Publications"
          description="Peer-reviewed research presented at IEEE conferences."
        />

        {publications.map((pub) => (
          <article key={pub.title} className={`card publication-card reveal accent-${pub.accent}`}>
            <div className="publication-head">
              <span className="icon-badge">{getIconLabel(pub.iconKey)}</span>
              <div>
                <p className="eyebrow">
                  {pub.shortVenue} <span className="publication-status">{pub.status}</span>
                </p>
                <h3>{pub.title}</h3>
                <p className="subtle publication-authors">{pub.authors.join(", ")}</p>
              </div>
            </div>

            <p className="publication-venue">
              {pub.venue}
              <br />
              <span className="subtle">
                {pub.location} - {pub.date} - Paper ID {pub.paperId}
              </span>
            </p>

            <p className="publication-summary">{pub.summary}</p>

            <div className="publication-metrics">
              {pub.highlights.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="project-links">
              {pub.certificate && (
                <a href={pub.certificate} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              )}
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  Read Paper
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
