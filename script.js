const projetos = [
    { titulo: "Projeto 1", descricao: "Descrição do projeto 1" },
    { titulo: "Projeto 2", descricao: "Descrição do projeto 2" },
    { titulo: "Projeto 3", descricao: "Descrição do projeto 3" }
];

function carregarProjetos() {
    const projetosLista = document.getElementById('projetos-lista');
    projetos.forEach((projeto, index) => {
        const projetoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card project-card" style="opacity: 0; transform: translateY(20px);">
                    <div class="card-body">
                        <h5 class="card-title">${projeto.titulo}</h5>
                        <p class="card-text">${projeto.descricao}</p>
                    </div>
                </div>
            </div>
        `;
        projetosLista.innerHTML += projetoHTML;
        
        setTimeout(() => {
            const card = projetosLista.children[index].querySelector('.card');
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

document.addEventListener('DOMContentLoaded', carregarProjetos);