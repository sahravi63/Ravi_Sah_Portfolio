import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { getIconLabel } from "./iconMap.js";

function NptelCertificate({ certificate }) {
  return (
    <div className="certificate-preview">
      <div className="certificate-band">
        <p>Roll: NPTEL25CS149S638500804</p>
        <strong>ELITE</strong>
        <h3>NPTEL Online Certification</h3>
        <span>Funded by the MoE, Govt. of India</span>
      </div>
      <div className="certificate-body">
        <p>This certificate is awarded to</p>
        <h4>RAVI SAH</h4>
        <p>for successfully completing</p>
        <h5>Introduction to Machine Learning</h5>
        <div className="score-grid">
          <div>
            <span>Assignments</span>
            <strong>{certificate.score.assignments}</strong>
          </div>
          <div>
            <span>Exam</span>
            <strong>{certificate.score.exam}</strong>
          </div>
        </div>
        <strong className="total-score">{certificate.score.total}</strong>
        <p>Jul-Sep 2025 - 8 week course - IIT Kharagpur</p>
      </div>
    </div>
  );
}

export default function Certifications({ certifications }) {
  const [openCertificate, setOpenCertificate] = useState(null);

  return (
    <section id="certifications" className="section section-muted">
      <div className="container">
        <SectionHeader
          label="Credentials - 05"
          title="Certifications"
          description="Verified credentials from cloud, AI, and academic platforms: milestones along my learning journey."
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
                    <button onClick={() => setOpenCertificate(certification)}>
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openCertificate && (
        <div className="modal-backdrop" role="presentation" onClick={() => setOpenCertificate(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 id="certificate-title">{openCertificate.name}</h2>
                <p>{openCertificate.issuer} - {openCertificate.validity}</p>
              </div>
              <button onClick={() => setOpenCertificate(null)} aria-label="Close certificate">
                Close
              </button>
            </div>
            <NptelCertificate certificate={openCertificate} />
          </div>
        </div>
      )}
    </section>
  );
}
