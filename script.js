// Dynamic Auto-Typing Configuration
const professions = ["Web Developer.", "UI/UX Designer.", "Full-Stack Learner."];
let index = 0, letterIndex = 0;
let currentText = "", currentLetters = "";
let isDeleting = false;

function typeAnimation() {
    if (index === professions.length) {
        index = 0;
    }
    currentText = professions[index];

    if (isDeleting) {
        currentLetters = currentText.slice(0, --letterIndex);
    } else {
        currentLetters = currentText.slice(0, ++letterIndex);
    }

    document.querySelector('.typing-text').textContent = currentLetters;

    let typeSpeed = 100;
    if (isDeleting) { typeSpeed /= 2; }

    if (!isDeleting && currentLetters === currentText) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentLetters === "") {
        isDeleting = false;
        index++;
        typeSpeed = 400;
    }

    setTimeout(typeAnimation, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeAnimation();
});

// Interactive Navigation Active Tracker (Updated without reviews)
const pageSections = document.querySelectorAll('section');
const navigationLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let activeSectionId = '';
    pageSections.forEach(section => {
        const sectionTopPosition = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTopPosition - sectionHeight / 3)) {
            activeSectionId = section.getAttribute('id');
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(activeSectionId)) {
            link.classList.add('active');
        }
    });
});