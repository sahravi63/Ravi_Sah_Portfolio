import SectionHeader from "./SectionHeader.jsx";

export default function ExperienceEducation({ data }) {
  return (
    <section id="experience" className="section section-muted">
      <div className="container">
        <SectionHeader
          label="Background - 03"
          title="Experience & Education"
          description="Where I've learned, built, and grown: academic foundations paired with hands-on industry exposure."
        />

        <div className="split-grid">
          <article className="card timeline-card reveal accent-cyan">
            <p className="eyebrow">Experience</p>
            <h3>Real-world projects</h3>
            {data.experience.map((item) => (
              <div className="timeline-item" key={item.role}>
                <h4>{item.role}</h4>
                <p className="subtle">
                  {item.org} - {item.type} - {item.duration}
                </p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <article className="card timeline-card reveal accent-amber">
            <p className="eyebrow">Education</p>
            <h3>Academic foundation</h3>
            <div className="timeline-item">
              <h4>{data.education.degree}</h4>
              <p className="subtle">{data.education.institution}</p>
              <p className="subtle">
                {data.education.duration} - {data.education.location}
              </p>
              <div className="score-box">
                <span>CGPA</span>
                <strong>{data.education.cgpa}</strong>
              </div>
              <div className="chip-list">
                {data.education.coursework.map((course) => (
                  <span className="chip" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <article className="card achievement-card reveal accent-amber">
          <div>
            <p className="eyebrow">Highlights</p>
            <h3>Achievements & Recognition</h3>
          </div>
          <ul className="achievement-list">
            {data.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
