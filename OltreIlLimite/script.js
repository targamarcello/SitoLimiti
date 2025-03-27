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
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Per evitare che il menu copra il contenuto
            behavior: 'smooth'
        });
    });
});

// Effetto di fade-in per gli elementi quando entrano nella vista
const elements = document.querySelectorAll('.section-content');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element);
});
