document.addEventListener('DOMContentLoaded', () => {
    // --- Page Transition In ---
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out'
    });

    // --- Page Transition Out ---
    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute('href');
        if (url && url.endsWith('.html')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                gsap.to('body', {
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power1.in',
                    onComplete: () => {
                        window.location.href = url;
                    }
                });
            });
        }
    });

    // --- Text Animation ---
    const mainTitle = document.querySelector('header h1');
    if (mainTitle) {
        const split = new SplitType(mainTitle, { types: 'chars' });
        gsap.from(split.chars, {
            opacity: 0,
            y: -20,
            skewX: 10,
            duration: 0.05,
            stagger: 0.03,
            ease: 'power2.out',
            delay: 0.3
        });
    }


    const bodyClass = document.body.className;

    if (bodyClass === 'fh3r-page' || bodyClass === 'npc-page') {
        // --- Game Page Animations ---
        gsap.from('.scroll-box', { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out', delay: 0.6 });
        gsap.from('.description', { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0.8 });
        gsap.from('.sidebar-card', { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 1.0 });
        gsap.from('.features-list li', { opacity: 0, x: -20, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 1.2 });

        const scrollBox = document.querySelector('.scroll-box');
        if (scrollBox) {
            const scrollImages = scrollBox.querySelectorAll('img');
            scrollImages.forEach(img => {
                img.addEventListener('mouseenter', () => {
                    gsap.to(img, {
                        scale: 1.05,
                        filter: 'brightness(1) grayscale(0%)',
                        zIndex: 10,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    scrollImages.forEach(other => {
                        if (other !== img) {
                            gsap.to(other, {
                                filter: 'brightness(0.5) grayscale(100%)',
                                scale: 0.98,
                                duration: 0.3
                            });
                        }
                    });
                });
            });

            scrollBox.addEventListener('mouseleave', () => {
                gsap.to(scrollImages, {
                    scale: 1,
                    filter: 'brightness(0.7) grayscale(100%)',
                    zIndex: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        }

    } else {
        // --- Main Page Animations ---
        gsap.from('.author', { opacity: 0, y: 30, skewX: -2, duration: 1, ease: 'power4.out', delay: 0.6 });

        gsap.from('.game-links a', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8
        });

        const cards = document.querySelectorAll('.game-links a');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const width = rect.width;
                const height = rect.height;
                const rotateX = (y / height - 0.5) * -20;
                const rotateY = (x / width - 0.5) * 20;

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
                    duration: 0.8,
                    ease: 'power4.out'
                });
            });
        });
    }
});