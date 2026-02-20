document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    const yearSpan = document.getElementById('year');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- State ---
    let currentLang = localStorage.getItem('lang') || 'en';

    // --- Init ---
    updateLanguage(currentLang);
    yearSpan.textContent = new Date().getFullYear();

    // --- Mobile Navigation ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    }));

    // --- Dark/Light Mode Toggle ---
    // Dark is the default. In dark mode show a SUN icon (click = go to light).
    // In light mode show a MOON icon (click = go back to dark).
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
    }
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('light-mode') ? 'light-mode' : '';
        localStorage.setItem('theme', theme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        const isLight = body.classList.contains('light-mode');
        // In light mode → show moon to go back to dark
        // In dark mode  → show sun to go to light
        icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    }

    // --- Language Toggle ---
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        // Update Button Text
        langToggle.textContent = lang === 'en' ? 'FR' : 'EN';

        // Update Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Check if the key ends with _detail to use innerHTML for rich text
                if (key.endsWith('_detail')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang;
    }

    // --- Smooth Scrolling & Active Link Highlighting ---
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            if (li.getAttribute('href').includes(current)) {
                li.style.color = 'var(--green)';
            } else {
                li.style.color = '';
            }
        });
    });


    // --- XamLeydi Carousel ---
    const xamleydiCard = document.getElementById('xamleydi-card');
    const modal = document.getElementById('xamleydi-modal');
    if (modal) {
        const slides = Array.from(modal.querySelectorAll('.carousel-slide'));
        const prevBtn = modal.querySelector('.carousel-prev');
        const nextBtn = modal.querySelector('.carousel-next');
        const closeBtn = modal.querySelector('.close-modal');
        const dotsContainer = modal.querySelector('.carousel-dots');
        let currentSlide = 0;

        function buildDots() {
            dotsContainer.innerHTML = '';
            slides.forEach((s, i) => {
                const d = document.createElement('button');
                d.className = 'dot';
                d.setAttribute('aria-label', `Go to slide ${i + 1}`);
                d.addEventListener('click', () => showSlide(i));
                dotsContainer.appendChild(d);
            });
        }

        function showSlide(index) {
            currentSlide = ((index % slides.length) + slides.length) % slides.length;
            slides.forEach((s, i) => s.style.display = i === currentSlide ? 'block' : 'none');
            Array.from(dotsContainer.children).forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        }

        function openModal(start = 0) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            showSlide(start);
        }

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        prevBtn && prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn && nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        closeBtn && closeBtn.addEventListener('click', closeModal);

        // Close by clicking overlay
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display !== 'flex') return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
            if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
        });

        buildDots();
        showSlide(0);

        // Open modal when clicking the card image or gallery button
        if (xamleydiCard) {
            xamleydiCard.querySelectorAll('.project-image, .open-gallery').forEach(el => {
                el.style.cursor = 'pointer';
                el.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    openModal(0);
                });
            });
        }
    }

    // --- Projects Carousel ---
    const slider = document.getElementById('projects-slider');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (slider && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            // Scroll back one full width
            slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            // Scroll forward one full width
            slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
        });
    }

    // --- Generic Project Detail Modal ---
    const detailModal = document.getElementById('project-detail-modal');
    if (detailModal) {
        const detailImage = document.getElementById('detail-image');
        const detailTitle = document.getElementById('detail-title');
        const detailDesc = document.getElementById('detail-description');
        const closeDetailBtn = document.getElementById('close-project-modal');

        // Open Modal Logic
        document.querySelectorAll('[data-project-detail]').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                // Prevent opening if clicking a link/button inside
                if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

                const detailKey = card.getAttribute('data-project-detail');
                // Grab the title from the card - class is now .project-name
                const titleText = card.querySelector('.project-name').textContent;
                const imgSrc = card.querySelector('img').getAttribute('src');

                // Set Content
                detailImage.src = imgSrc;
                detailTitle.textContent = titleText;

                // Set data-i18n for dynamic updates
                detailDesc.setAttribute('data-i18n', detailKey);

                // Immediate update
                if (translations[currentLang] && translations[currentLang][detailKey]) {
                    detailDesc.innerHTML = translations[currentLang][detailKey];
                }

                detailModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Close Logic
        function closeDetailModal() {
            detailModal.style.display = 'none';
            document.body.style.overflow = '';
        }

        closeDetailBtn.addEventListener('click', closeDetailModal);

        detailModal.addEventListener('click', (e) => {
            if (e.target === detailModal) closeDetailModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && detailModal.style.display === 'flex') {
                closeDetailModal();
            }
        });
    }
});
