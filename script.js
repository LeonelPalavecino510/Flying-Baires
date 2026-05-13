document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once animation is triggered
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // El punto sigue al mouse instantáneamente
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // El círculo lo sigue con una pequeña transición (definida en CSS)
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });

    // Efecto Hover en elementos interactivos
    const interactables = document.querySelectorAll('a, button, #boton-main, .boton-arriba img');
    
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-hover');
        });
    });
});
