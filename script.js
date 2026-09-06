// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Hero checklist tick-in animation (home page)
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('#checklist .check-item');
  items.forEach((item) => {
    const delay = parseInt(item.getAttribute('data-delay') || '0', 10);
    setTimeout(() => item.classList.add('checked'), delay + 200);
  });
});

// Scroll-reveal: sections below the fold gently fade/rise into view
// as the visitor scrolls, instead of appearing flat.
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
});
