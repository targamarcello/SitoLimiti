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
        // Verifica se il link è un'ancora interna (es. #sezione)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();  // Blocca il comportamento di navigazione

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Fai lo scroll alla sezione
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Per evitare che il menu copra il contenuto
                behavior: 'smooth'
            });
        } else {
            // Non fare nulla, lascia che il link navighi normalmente
        }
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
