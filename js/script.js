/**
 * Arquivo: script.js
 * Funcionalidade: Toggle do Menu Hamburguer para Mobile
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("O site Vyrus Survivor carregou com sucesso!");

    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mainMenu = document.getElementById('mainMenu');

    // Verifica se os elementos foram encontrados antes de adicionar o listener
    if (hamburgerButton && mainMenu) {
        hamburgerButton.addEventListener('click', () => {
            // Adiciona ou remove a classe 'is-open' do menu
            mainMenu.classList.toggle('is-open');
            
            // Opcional: Adiciona classe ao botão para animar o X (transformar as barras)
            hamburgerButton.classList.toggle('is-active');
            
            // Opcional: Toggle aria-expanded para acessibilidade
            const isExpanded = mainMenu.classList.contains('is-open');
            hamburgerButton.setAttribute('aria-expanded', isExpanded);
        });
        
        // Opcional: Fechar o menu ao clicar em um link (para navegação em SPA)
        const navLinks = mainMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('is-open');
                hamburgerButton.classList.remove('is-active');
                hamburgerButton.setAttribute('aria-expanded', 'false');
            });
        });
    }
});