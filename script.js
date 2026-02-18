document.addEventListener('DOMContentLoaded', () => {
    const bodyClass = document.body.className;

    if (bodyClass === 'fh3r-page' || bodyClass === 'npc-page') {
        gsap.from('header h1', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.scroll-box img', {
            opacity: 0,
            x: -50,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.3
        });

        gsap.from('.description', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });

        gsap.from('.sidebar-card', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            delay: 0.7
        });

        gsap.from('.features-list li', {
            opacity: 0,
            x: -20,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.8
        });

        document.querySelectorAll('.scroll-box img').forEach(img => {
            img.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    scale: 1.1,
                    filter: 'brightness(1) grayscale(0%)',
                    borderColor: '#ff003c',
                    boxShadow: '0 10px 20px rgba(255,0,60,0.5)',
                    zIndex: 10,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            img.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    scale: 1,
                    filter: 'brightness(0.7) grayscale(100%)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    boxShadow: 'none',
                    zIndex: 1,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            });
        });
    } else {
        gsap.from('header h1', {
            opacity: 0,
            y: -50,
            skewX: 5,
            duration: 1.2,
            ease: 'power4.out'
        });

        gsap.from('.author', {
            opacity: 0,
            y: 30,
            skewX: -2,
            duration: 1,
            ease: 'power4.out',
            delay: 0.2
        });

        gsap.from('.game-links a', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)',
            delay: 0.4
        });

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

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.2,
                    ease: 'power2.out'
                });

                card.style.setProperty('--glare-x', `${x}px`);
                card.style.setProperty('--glare-y', `${y}px`);
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
    }
});