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