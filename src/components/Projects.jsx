import SectionHeader from "./SectionHeader.jsx";
import { getIconLabel } from "./iconMap.js";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="Selected Work - 04"
          title="Projects"
          description="A handful of projects that highlight what I love building: from ML pipelines to full-stack systems."
        />

        <div className="card-grid two">
          {projects.map((project, index) => (
            <article key={project.name} className={`card project-card reveal accent-${project.accent}`}>
              <div className="project-top">
                <span className="icon-badge">{getIconLabel(project.iconKey)}</span>
                <div>
                  <p>Project - {String(index + 1).padStart(2, "0")}</p>
                  <span>{project.date}</span>
                </div>
              </div>

              <h3>{project.name}</h3>
              <div className="chip-list">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
