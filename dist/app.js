(() => {
  // src/js/index.js
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("mainNav");
    const toggle = document.getElementById("navToggle");
    const panel = document.getElementById("mobilePanel");
    const hero = document.querySelector(".ui-hero");
    if (hero) {
      new IntersectionObserver(
        ([entry]) => nav.classList.toggle("ui-nav--scrolled", !entry.isIntersecting),
        { rootMargin: `-${nav.offsetHeight}px 0px 0px 0px` }
      ).observe(hero);
    }
    const setOpen = (open) => {
      nav.dataset.open = open.toString();
      toggle.ariaExpanded = open.toString();
      panel.hidden = !open;
    };
    setOpen(false);
    toggle.addEventListener(
      "click",
      () => setOpen(nav.dataset.open === "false")
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
    panel.querySelectorAll("a").forEach(
      (link) => link.addEventListener("click", () => setOpen(false))
    );
    matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  });
})();
//# sourceMappingURL=app.js.map
