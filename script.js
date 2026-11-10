const buttons = document.querySelectorAll('.pack-more');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentCard = button.closest('.card-pack');
        const isCurrentlyExpanded = currentCard.classList.contains('is-expanded');

        // 1. Cerrar todas las tarjetas y restaurar sus botones
        document.querySelectorAll('.card-pack').forEach((card) => {
            card.classList.remove('is-expanded');
            const cardBtn = card.querySelector('.pack-more');
            if (cardBtn) {
                cardBtn.setAttribute('aria-expanded', 'false');
                cardBtn.textContent = 'Ver todas las funcionalidades';
            }
        });

        // 2. Si la tarjeta clickeada estaba cerrada, la abrimos
        if (!isCurrentlyExpanded) {
            currentCard.classList.add('is-expanded');
            button.setAttribute('aria-expanded', 'true');
            button.textContent = 'Ocultar funcionalidades';
        }
    });
});

// ---------- Menú hamburguesa (celular y tablet) ----------
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');

function setMenu(open) {
    navbar.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

navToggle.addEventListener('click', () => {
    setMenu(!navbar.classList.contains('is-open'));
});

// Cierra el menú al elegir una opción
document.querySelectorAll('.nav-lado a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});
