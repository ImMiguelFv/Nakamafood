// Obtiene una referencia al botón del menú mediante su ID
const btn = document.getElementById('btnMenu');
// Obtiene una referencia al menú de navegación mediante su ID
const navBar = document.getElementById('nav-links'); // Cambiado a 'nav-links'

// Agrega un event listener al botón para detectar cuando se hace clic en él
btn.addEventListener('click', () => {
    // Alterna la visibilidad del menú de navegación
    navBar.classList.toggle('nav-links--visible');
});
