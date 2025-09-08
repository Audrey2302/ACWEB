// Bouton thème
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("theme-brown");
});

// Année automatique
document.getElementById("year").textContent = new Date().getFullYear();