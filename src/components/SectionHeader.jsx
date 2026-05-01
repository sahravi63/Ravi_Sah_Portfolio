export default function SectionHeader({ label, title, description, align = "left" }) {
  return (
    <div className={`section-header reveal ${align === "center" ? "center" : ""}`}>
      <p className="section-kicker">
        <span />
        {label}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
