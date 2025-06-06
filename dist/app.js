(() => {
  // src/js/index.js
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("mainNav");
    const navList = document.getElementById("navList");
    const toggleBtn = document.getElementById("navToggle");
    const [topL, midL, botL] = toggleBtn.querySelectorAll(".ui-toggle-line");
    const hero = document.querySelector(".ui-hero");
    new IntersectionObserver(
      ([e]) => nav.classList.toggle("ui-nav--scrolled", !e.isIntersecting),
      { rootMargin: `-${nav.offsetHeight}px 0px 0px 0px` }
    ).observe(hero);
    toggleBtn.addEventListener("click", () => {
      const open = navList.classList.toggle("ui-nav-list-open");
      toggleBtn.setAttribute("aria-expanded", open);
      topL.classList.toggle("ui-x-top", open);
      midL.classList.toggle("ui-x-mid", open);
      botL.classList.toggle("ui-x-bot", open);
    });
    navList.querySelectorAll("a").forEach(
      (a) => a.addEventListener("click", () => {
        navList.classList.remove("ui-nav-list-open");
        [topL, midL, botL].forEach((l) => l.classList.remove("ui-x-top", "ui-x-mid", "ui-x-bot"));
        toggleBtn.setAttribute("aria-expanded", "false");
      })
    );
  });
})();
//# sourceMappingURL=app.js.map
