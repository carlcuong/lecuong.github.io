// Dark mode: lưu lựa chọn trong localStorage
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
if (themeToggle) {
  themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    if (isDark) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem('portfolio-theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      document.documentElement.dataset.theme = 'dark';
      localStorage.setItem('portfolio-theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });
}

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(opened));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hiệu ứng khi cuộn trang bằng Intersection Observer
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
