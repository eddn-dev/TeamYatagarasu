// ------------------------------------------------------------------
// Navegación móvil + efecto opacidad al hacer scroll
// ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  const panel  = document.getElementById('mobilePanel');
  const hero   = document.querySelector('.ui-hero'); // sección que quieres observar

  /* --- 1. Cambiar fondo del nav al hacer scroll ----------------- */
  if (hero) {
    new IntersectionObserver(
      ([entry]) =>
        nav.classList.toggle('ui-nav--scrolled', !entry.isIntersecting),
      { rootMargin: `-${nav.offsetHeight}px 0px 0px 0px` }
    ).observe(hero); // patrón IO recomendado para rendimiento.:contentReference[oaicite:6]{index=6}
  }

  /* --- 2. Abrir / cerrar panel móvil ---------------------------- */
  const setOpen = (open) => {
    toggle.dataset.open   = open.toString();
    toggle.ariaExpanded   = open.toString();

    if (open) {
      panel.classList.add('ui-nav-mobile-panel--open');
    } else {
      panel.classList.remove('ui-nav-mobile-panel--open');
    }
  };

  // Estado inicial (cerrado)
  setOpen(false);

  // Click hamburguesa
  toggle.addEventListener('click', () =>
    setOpen(toggle.dataset.open === 'false')
  );

  // Cerrar al pulsar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Cerrar al navegar dentro del panel
  panel.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => setOpen(false))
  );

  // Cerrar automáticamente al pasar a escritorio
  matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false); // evita que quede abierto al redimensionar
  });
});
