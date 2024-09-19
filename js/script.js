const projetos = [
    // ... (seu código existente para projetos) ...
];

function carregarProjetos(lang) {
    // ... (seu código existente para carregar projetos) ...
}

// Expor carregarProjetos globalmente
window.carregarProjetos = carregarProjetos;

document.addEventListener('DOMContentLoaded', () => carregarProjetos('pt'));