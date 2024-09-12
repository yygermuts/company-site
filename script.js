document.querySelector('.menu-open').addEventListener('click', function() {
    const nav = document.querySelector('.menu nav');
    
    // Se o menu já estiver visível
    if (nav.classList.contains('show')) {
        nav.style.opacity = '0'; // Inicia o desaparecimento
        setTimeout(() => {
            nav.classList.remove('show'); // Remove o menu após a transição
        }, 500); // 500ms = 0.5 segundo
    } else {
        nav.classList.add('show'); // Mostra o menu
        setTimeout(() => {
            nav.style.opacity = '1'; // Inicia a aparição gradativa
        }, 10); // Pequeno atraso para garantir a transição
    }
});

let currentSlide = 0; // Índice do slide atual

// Função para mudar de slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove a classe 'active' de todos os slides
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe 'active' ao slide atual
        }
    });
}

// Função para o botão 'Próximo Slide'
document.getElementById('nextSlide').addEventListener('click', function() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide
    showSlide(currentSlide);
});

// Inicializa com o primeiro slide visível
showSlide(currentSlide);