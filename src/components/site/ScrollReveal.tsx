import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selector = "[data-scroll-reveal]";

    if (reducedMotion) {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    const observeReveals = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (!element.classList.contains("is-visible")) observer.observe(element);
      });
    };

    observeReveals();
    const mutations = new MutationObserver(observeReveals);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
