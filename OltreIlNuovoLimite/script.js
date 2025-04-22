function toggleSolution(button) {
    const solution = button.nextElementSibling;
    solution.classList.toggle('visible');
    
    if (solution.classList.contains('visible')) {
        button.textContent = 'Nascondi soluzione';
    } else {
        button.textContent = 'Mostra soluzione';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const exercises = document.querySelectorAll('.exercise');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            if (filter === 'all') {
                exercises.forEach(ex => ex.style.display = 'block');
            } else {
                exercises.forEach(ex => {
                    if (ex.getAttribute('data-difficulty') === filter || 
                        ex.getAttribute('data-type') === filter) {
                        ex.style.display = 'block';
                    } else {
                        ex.style.display = 'none';
                    }
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    searchInput.addEventListener('keyup', function() {
        const searchValue = this.value.toLowerCase();
        
        accordionItems.forEach(item => {
            const term = item.querySelector('.accordion-header').textContent.toLowerCase();
            const definition = item.querySelector('.accordion-content').textContent.toLowerCase();
            
            if (term.includes(searchValue) || definition.includes(searchValue)) {
                item.style.display = 'block';
                if (searchValue.length > 2) {
                    item.classList.add('active');
                }
            } else {
                item.style.display = 'none';
            }
            
            if (searchValue.length === 0) {
                item.classList.remove('active');
            }
        });
    });
});