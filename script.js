// Função chamada ao clicar no botão de alternar tema
function toggleTheme() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    
    // Verifica qual é o tema atual (o padrão do seu CSS é escuro)
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // Mudar para escuro (remover o data-theme="light")
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        if (themeBtn) {
            themeBtn.textContent = '☀️ Modo Claro';
        }
    } else {
        // Mudar para claro (definir data-theme="light")
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (themeBtn) {
            themeBtn.textContent = '🌙 Modo Escuro';
        }
    }
}

// Aplica a preferência salva assim que a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeBtn) {
            themeBtn.textContent = '🌙 Modo Escuro';
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeBtn) {
            themeBtn.textContent = '☀️ Modo Claro';
        }
    }
});
