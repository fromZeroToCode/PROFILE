// Enhanced Digital Business Card with Advanced Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initCardFlip();
    initDynamicGreeting();
    initThemeToggle();
    initNavigation();
    initNameColorChange();
    showWelcomeMessage();

    // Card flip functionality
    function initCardFlip() {
        const cardFront = document.querySelector('.card-front');
        const cardBack = document.querySelector('.card-back');
        const flipBtn = document.getElementById('flipBtn');
        const flipBackBtn = document.getElementById('flipBackBtn');

        flipBtn?.addEventListener('click', function() {
            cardFront.style.transform = 'rotateY(180deg)';
            cardBack.style.transform = 'rotateY(0deg)';
        });

        flipBackBtn?.addEventListener('click', function() {
            cardFront.style.transform = 'rotateY(0deg)';
            cardBack.style.transform = 'rotateY(180deg)';
        });
    }

    // Dynamic greeting based on time of day
    function initDynamicGreeting() {
        const greetingEl = document.getElementById('dynamicGreeting');
        if (!greetingEl) return;

        const now = new Date();
        const hours = now.getHours();
        let greeting = '';
        let emoji = '';

        if (hours >= 5 && hours < 12) {
            greeting = 'Good Morning';
            emoji = '🌅';
        } else if (hours >= 12 && hours < 17) {
            greeting = 'Good Afternoon';
            emoji = '☀️';
        } else if (hours >= 17 && hours < 21) {
            greeting = 'Good Evening';
            emoji = '🌆';
        } else {
            greeting = 'Good Night';
            emoji = '🌙';
        }

        greetingEl.textContent = `${emoji} ${greeting}!`;

        // Add a subtle animation
        greetingEl.style.opacity = '0';
        setTimeout(() => {
            greetingEl.style.opacity = '1';
            greetingEl.style.transition = 'opacity 1s ease-in-out';
        }, 100);
    }

    // Theme toggle functionality
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggle.textContent = '🌞';
        }

        themeToggle?.addEventListener('click', function() {
            body.classList.toggle('light-theme');

            if (body.classList.contains('light-theme')) {
                themeToggle.textContent = '🌞';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Navigation functionality
    function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Contact form functionality removed since form was removed

    // Name color change functionality (enhanced)
    function initNameColorChange() {
        const nameEl = document.getElementById('name');
        const colors = ['#4f8cff', '#e94f37', '#3ec300', '#ffb400', '#ff6b9d', '#c44569'];
        let colorIndex = 0;

        nameEl?.addEventListener('click', function() {
            colorIndex = (colorIndex + 1) % colors.length;
            nameEl.style.color = colors[colorIndex];
            nameEl.style.transform = 'scale(1.05)';
            setTimeout(() => {
                nameEl.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // Welcome message
    function showWelcomeMessage() {
        setTimeout(function() {
            const now = new Date();
            const hours = now.getHours();
            let timeGreeting = '';

            if (hours >= 5 && hours < 12) {
                timeGreeting = 'Good morning';
            } else if (hours >= 12 && hours < 17) {
                timeGreeting = 'Good afternoon';
            } else if (hours >= 17 && hours < 21) {
                timeGreeting = 'Good evening';
            } else {
                timeGreeting = 'Good night';
            }

            alert(`${timeGreeting}! Welcome to Justin's digital business card!`);
        }, 1000);
    }
});
