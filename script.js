// Função chamada ao clicar no botão de alternar tema
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');
    
    // Alterna a classe 'dark-mode' no <body>
    body.classList.toggle('dark-mode');
    
    // Verifica se a classe está ativa e atualiza o botão e o localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        if (themeBtn) {
            themeBtn.textContent = '🌙 Modo Escuro';
        }
    } else {
        localStorage.setItem('theme', 'light');
        if (themeBtn) {
            themeBtn.textContent = '☀️ Modo Claro';
        }
    }
}

// Aplica a preferência salva assim que a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('theme-toggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeBtn) {
            themeBtn.textContent = '🌙 Modo Escuro';
        }
    } else {
        document.body.classList.remove('dark-mode');
        if (themeBtn) {
            themeBtn.textContent = '☀️ Modo Claro';
        }
    }
});
