// Aggiungi animazione al passaggio del mouse sui bottoni
const buttons = document.querySelectorAll('.btn-main');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Scroll animato per il link del menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Effetto fade-in con IntersectionObserver
const elements = document.querySelectorAll('.section-content');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element);
});

//Glossario con searchBar
const searchInput = document.getElementById('searchInput');
const termini = document.querySelectorAll('.termine-box');

termini.forEach(termine => {
    termine.addEventListener('click', () => {
        const definizione = termine.nextElementSibling;

        if (definizione.style.display === 'block') {
            definizione.style.display = 'none';
        } else {
            definizione.style.display = 'block';
        }
    });
});

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const filtro = searchInput.value.toLowerCase();

        termini.forEach(termine => {
            const testo = termine.textContent.toLowerCase();
            const definizione = termine.nextElementSibling;

            if (testo.includes(filtro)) {
                termine.style.display = 'block';
                definizione.style.display = 'none';
            } else {
                termine.style.display = 'none';
                definizione.style.display = 'none';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const videoModal = document.getElementById('videoModal');
    const openVideoBtn = document.querySelector('.open-video-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Apri il modal
    openVideoBtn.addEventListener('click', function () {
        videoModal.style.display = 'flex';
    });

    // Chiudi il modal
    closeModalBtn.addEventListener('click', function () {
        videoModal.style.display = 'none';
    });

    // Chiudi il modal se clicchi fuori dal video
    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
        }
    });
});