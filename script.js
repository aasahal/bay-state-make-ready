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
