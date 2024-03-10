let lastScrollTop = 0;
window.addEventListener("wheel", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // hacia abajo
        document.querySelector(".cabecera").classList.remove("mostrar");
    } else {
        // hacia arriba
        document.querySelector(".cabecera").classList.add("mostrar");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // para dispositivos móviles
}, false);
