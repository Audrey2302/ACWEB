document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');

  // année
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (!toggleBtn) return; // si le bouton n'existe pas, on quitte proprement

  // restaurer le thème si déjà choisi
  const saved = localStorage.getItem('acweb-theme');
  if (saved === 'brown') document.documentElement.classList.add('theme-brown');

  // toggle + sauvegarde
  toggleBtn.addEventListener('click', () => {
    const nowBrown = document.documentElement.classList.toggle('theme-brown');
    localStorage.setItem('acweb-theme', nowBrown ? 'brown' : 'green');
  });
});




