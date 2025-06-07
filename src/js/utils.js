// utils.js
const mqDesktop = window.matchMedia('(min-width: 768px)');
export function toggleMenu(open) {
  nav.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);          // a11y
  if (open) panel.removeAttribute('hidden');
  else {
    panel.setAttribute('hidden', '');
    btn.focus();                                    // devuelve foco
  }
}

btn.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')));
panel.addEventListener('click', e => {
  if (e.target.tagName === 'A') toggleMenu(false);  // cierra al navegar
});
document.addEventListener('keyup', e => {
  if (e.key === 'Escape') toggleMenu(false);
});
mqDesktop.addEventListener('change', e => { if (e.matches) toggleMenu(false); });
