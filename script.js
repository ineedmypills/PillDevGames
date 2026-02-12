document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.game-links a');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const width = rect.width;
            const height = rect.height;

            const rotateX = (y / height - 0.5) * -25;
            const rotateY = (x / width - 0.5) * 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            card.style.setProperty('--glare-x', `${x}px`);
            card.style.setProperty('--glare-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
