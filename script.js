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



/* === Effet Parallax sur l’image de fond du Hero === */

// On écoute l'événement "scroll" de la fenêtre
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero"); // sélectionne la section hero

  // Calcul de l'offset : plus on descend, plus la valeur augmente
  // Le facteur 0.3 contrôle la vitesse du mouvement (plus petit = plus lent, plus subtil)
  let offset = window.scrollY * 0.3;

  // On applique ce décalage sur la position verticale de l’image de fond
  hero.style.backgroundPositionY = `${offset}px`;
});


