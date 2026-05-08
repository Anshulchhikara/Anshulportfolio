// =============================================
//  ANSHUL CHHIKARA — PORTFOLIO SCRIPTS
//  File: script.js
// =============================================

// ── Custom Cursor ──────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animRing);
})();

// ── Sticky Nav on Scroll ───────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Scroll Reveal ──────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

reveals.forEach(r => revealObserver.observe(r));

// ── Mouse-tracked Gradient on Project Cards ─
function trackMouse(e, card) {
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
  card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
}