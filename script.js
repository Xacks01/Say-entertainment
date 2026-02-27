// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Countdown Timer Logic
const countdownContainer = document.querySelector('.countdown');
if (countdownContainer) {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const targetDate = new Date('March 22, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}
