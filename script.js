// Dynamic Auto-Typing Configuration
const professions = ["CSE Student.", "Web Developer.", "Tech Enthusiast."];
let index = 0, letterIndex = 0, isDeleting = false;

function typeAnimation() {
    const currentText = professions[index];
    const displayLetters = isDeleting ? currentText.slice(0, --letterIndex) : currentText.slice(0, ++letterIndex);
    
    document.querySelector('.typing-text').textContent = displayLetters;
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && displayLetters === currentText) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && displayLetters === "") {
        isDeleting = false;
        index = (index + 1) % professions.length;
        speed = 300;
    }
    setTimeout(typeAnimation, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeAnimation();
    
    // 📱 Mobile Hamburger Menu Logic
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });

    // ✨ Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 100; // Trigger point
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    
    // Trigger once on load, then on scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Active Navbar Highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= (section.offsetTop - section.clientHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});