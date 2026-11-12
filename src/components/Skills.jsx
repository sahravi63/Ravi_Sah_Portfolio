import SectionHeader from "./SectionHeader.jsx";
import { getIconLabel } from "./iconMap.js";

export default function Skills({ skills }) {
  const total = Object.keys(skills).length;

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="Toolkit - 02"
          title="Skills & Technologies"
          description="A curated stack I use to ship reliable, intelligent, and well-engineered software across the full lifecycle."
        />

        <div className="card-grid three">
          {Object.entries(skills).map(([category, group], index) => (
            <article key={category} className={`card reveal accent-${group.accent}`}>
              <div className="card-meta">
                <span>
                  {String(index + 1).padStart(2, "0")} / {total}
                </span>
                <i />
              </div>
              <h3>{category}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span key={item.name} className="chip">
                    <b>{getIconLabel(item.iconKey)}</b>
                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
