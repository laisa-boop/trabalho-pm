document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona um evento de clique ao botão do menu
    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'show' no menu de navegação
        navMenu.classList.toggle('show');
    });

    // Fecha o menu quando um link é clicado (útil para navegação em uma única página)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });
});