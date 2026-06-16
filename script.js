// script.js - Agrinho 2026
document.addEventListener('DOMContentLoaded', () => {

    // ==================== MENU MOBILE ====================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ==================== FORMULÁRIO DE CONTATO ====================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            
            if (nome) {
                alert(`✅ Mensagem enviada com sucesso, ${nome}!\n\nObrigado por participar do Agrinho 2026 🌱`);
                this.reset();
            } else {
                alert('Por favor, preencha seu nome!');
            }
        });
    }

    // ==================== BOTÃO VOLTAR AO TOPO ====================
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log('🌱 Script do Agrinho 2026 carregado com sucesso!');
});
