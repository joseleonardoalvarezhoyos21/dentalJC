const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

// Función para abrir el menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Función para cerrar el menú al hacer clic en la capa de fondo
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});
