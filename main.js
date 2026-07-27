// js/main.js  ← Versão corrigida

let telaAtual = 0;

function navegar(tela) {
    telaAtual = tela;
    
    // Remove active de todos os botões
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Ativa o botão clicado
    const botaoAtivo = document.getElementById(`menu-${tela}`);
    if (botaoAtivo) botaoAtivo.classList.add('active');

    // Limpa o conteúdo e carrega a tela certa
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = '';   // Limpa tudo antes

    if (tela === 0) {
        renderizarEstoque();
    } else if (tela === 1) {
        renderizarEntrada();
    } else if (tela === 2) {
        renderizarSaida();
    } else if (tela === 3) {
        renderizarRelatorios();
    } else if (tela === 4) {
        renderizarBusca();
    }
}

// Atualiza data no cabeçalho
function atualizarData() {
    const el = document.getElementById('data-atual');
    if (el) {
        el.textContent = new Date().toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    }
}

// Inicialização do sistema
window.onload = function() {
    carregarDB();
    atualizarData();
    navegar(0);        // Começa na tela de Estoque
    console.log("✅ Sistema carregado com sucesso!");
};