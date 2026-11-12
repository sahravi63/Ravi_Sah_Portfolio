import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar.jsx";
import Hero from "../Hero.jsx";
import Skills from "./Skills.jsx";
import ExperienceEducation from "./ExperienceEducation.jsx";
import Projects from "./Projects.jsx";
import Publications from "./Publications.jsx";
import Certifications from "./Certifications.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { portfolioData } from "../mock.js";

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in-view"));
      return () => document.documentElement.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -15% 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const progressRef = useRef(null);
  useScrollReveal();

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return undefined;

    const heroBackground = document.querySelector(".hero-background");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;
      progress.style.transform = `scaleX(${value})`;
      progress.setAttribute("aria-valuenow", String(Math.round(value * 100)));
      if (heroBackground && !reducedMotion) {
        heroBackground.style.transform = `translate3d(0, ${window.scrollY * 0.07}px, 0)`;
      }
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

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
      <div
        ref={progressRef}
        className="scroll-progress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
      />
      <Navbar activeSection={activeSection} navLinks={portfolioData.navLinks} />
      <main>
        <Hero data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <ExperienceEducation data={portfolioData} />
        <Projects projects={portfolioData.projects} />
        <Publications publications={portfolioData.publications} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
