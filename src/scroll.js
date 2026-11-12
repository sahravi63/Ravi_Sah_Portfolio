function getScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: getScrollBehavior() });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}
