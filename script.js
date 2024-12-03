// 1. Controle do modo escuro
let isDarkMode = false;

// Seleção do botão de modo escuro
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

// Função que alterna entre o modo claro e escuro
darkModeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        // Ativa o modo escuro
        body.style.backgroundColor = "#333";
        body.style.color = "#fff";
        darkModeBtn.textContent = "Modo Claro";  // Muda o texto do botão
    } else {
        // Volta para o modo claro
        body.style.backgroundColor = "#f0f0f0";
        body.style.color = "#333";
        darkModeBtn.textContent = "Modo Escuro";  // Muda o texto do botão
    }
});

// 2. Aumento do tamanho da fonte
const increaseFontBtn = document.getElementById('increaseFontBtn');

// Função que aumenta o tamanho da fonte do corpo
increaseFontBtn.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(body).fontSize);  // Obtém o tamanho atual da fonte
    body.style.fontSize = (currentSize + 2) + "px";  // Aumenta o tamanho da fonte em 2px
});

// 3. Diminuição do tamanho da fonte
const decreaseFontBtn = document.getElementById('decreaseFontBtn');

// Função que diminui o tamanho da fonte do corpo
decreaseFontBtn.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(body).fontSize);  // Obtém o tamanho atual da fonte
    if (currentSize > 10) {  // Impede que a fonte fique muito pequena
        body.style.fontSize = (currentSize - 2) + "px";  // Diminui o tamanho da fonte em 2px
    }
});
