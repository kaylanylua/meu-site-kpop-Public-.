// Seleciona todos os links do menu
const links = document.querySelectorAll('nav ul li a');

// Adiciona evento de clique para scroll suave
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth' // Scroll suave
        });
    });
});
