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