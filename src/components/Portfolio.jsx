import { useEffect, useState } from "react";
import Navbar from "../Navbar.jsx";
import Hero from "../Hero.jsx";
import Skills from "./Skills.jsx";
import ExperienceEducation from "./ExperienceEducation.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { portfolioData } from "../mock.js";

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const current = portfolioData.navLinks
        .map((link) => {
          const element = document.getElementById(link.id);
          return element ? { id: link.id, top: element.getBoundingClientRect().top } : null;
        })
        .filter(Boolean)
        .filter((section) => section.top <= 140)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell">
      <Navbar activeSection={activeSection} navLinks={portfolioData.navLinks} />
      <main>
        <Hero data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <ExperienceEducation data={portfolioData} />
        <Projects projects={portfolioData.projects} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
