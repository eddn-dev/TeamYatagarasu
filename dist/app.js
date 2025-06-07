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
      toggle.dataset.open = open.toString();
      toggle.ariaExpanded = open.toString();
      if (open) {
        panel.classList.add("ui-nav-mobile-panel--open");
      } else {
        panel.classList.remove("ui-nav-mobile-panel--open");
      }
    };
    setOpen(false);
    toggle.addEventListener(
      "click",
      () => setOpen(toggle.dataset.open === "false")
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
  document.querySelectorAll(".ui-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--rx", -(y - r.height / 2) / 12 + "deg");
      card.style.setProperty("--ry", (x - r.width / 2) / 12 + "deg");
    });
    card.addEventListener("pointerleave", () => card.style.cssText = "");
  });
})();
//# sourceMappingURL=app.js.map
