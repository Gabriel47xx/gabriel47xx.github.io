// =========================================
// MENU MOBILE (HAMBURGER)
// =========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Adiciona evento de clique no ícone do menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu mobile quando um link é clicado
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// =========================================
// EFEITO MÁQUINA DE ESCREVER (TYPEWRITER)
// =========================================
// Insira aqui as frases ou cargos que deseja que fiquem alternando na seção inicial
const words = ["Desenvolvedor Frontend", "Gestor de TI"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 60);
    };
    // Espera antes de começar a apagar
    setTimeout(loopDeleting, 2000); 
};

// Iniciar efeito ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Limpa o texto atual e começa o efeito
    document.getElementById('typewriter').innerHTML = "";
    typingEffect();
});

// =========================================
// ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA
// =========================================
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Porcentagem do elemento que deve estar visível antes da animação iniciar
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});

// =========================================
// PREVENIR ENVIO REAL DO FORMULÁRIO (Exemplo)
// =========================================
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! (Isso é apenas uma demonstração)');
        form.reset();
    });
}
