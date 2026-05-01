import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      const entry = { ...form, id: Date.now(), createdAt: new Date().toISOString() };
      localStorage.setItem("contactMessages", JSON.stringify([entry, ...existing]));
      setForm({ name: "", email: "", message: "" });
      setStatus("Message saved locally. I'll get back to you soon.");
      setLoading(false);
    }, 500);
  };

  const channels = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, accent: "cyan" },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, accent: "amber" },
    { label: "LinkedIn", value: "linkedin.com/in/ravi-sah", href: contact.linkedin, accent: "cyan" },
    { label: "GitHub", value: "github.com/sahravi63", href: contact.github, accent: "amber" },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          label="Get in Touch - 06"
          title="Let's Build Something Together"
          description="Have an idea, role, or collaboration in mind? My inbox is open and I'll respond as soon as I can."
        />

        <div className="contact-grid">
          <div className="contact-links reveal">
            <div className="availability-card">
              <strong>Available for opportunities</strong>
              <span>Based in Chennai, India - Open to remote</span>
            </div>
            {channels.map((channel) => (
              <a
                key={channel.label}
                className={`contact-card accent-${channel.accent}`}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{channel.label.slice(0, 2).toUpperCase()}</span>
                <div>
                  <strong>{channel.label}</strong>
                  <small>{channel.value}</small>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form card reveal" onSubmit={onSubmit}>
            <h3>Send a message</h3>
            <p className="subtle">Tell me about your project, idea, or just say hi.</p>

            <div className="form-row">
              <label>
                Name
                <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="What would you like to talk about?"
                rows="6"
              />
            </label>

            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
