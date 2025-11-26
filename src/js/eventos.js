function estaLogado() {
    return sessionStorage.getItem("logado") === "true"; 
}

const eventosFixos = [
    {
        titulo: "Trilha no Parque Nacional",
        data: "12/12/2025",
        local: "Parque Nacional da Serra dos Órgãos",
        imagem: "src/img/imgSerraDosOrgaos.jpg",
        link: "#"
    },
    {
        titulo: "Trilha Tres Picos",
        data: "18/12/2025",
        local: "Parque Estadual dos Três Picos-Sede Teresópolis",
        imagem: "src/img/imgTresPicos.jpg",
        link: "#"
    },
    {
        titulo: "Trilha pedra do sino",
        data: "20/12/2025",
        local: "Parque Nacional da Serra dos Órgãos",
        imagem: "src/img/pedra do sino.jpg",
        link: "#"
    },
];

const eventosCadastrados = JSON.parse(localStorage.getItem("eventos")) || [];

const todosEventos = [...eventosCadastrados, ...eventosFixos];


const lista = document.getElementById("lista-eventos");

function criarCardEvento(evento) {
    
    const titulo = evento.titulo;
    const local = evento.local;
    const dataCompleta = evento.horario ? `📅 ${evento.data} às ${evento.horario}` : `📅 ${evento.data}`;
    const imagemUrl = evento.imagem || "src/img/default.jpg"; 
    const linkUrl = evento.link || "#";

    let botaoExcluir = '';
    if (evento.id && estaLogado()) { 
        botaoExcluir = `<button class="excluir-btn" data-id="${evento.id}">Excluir</button>`;
    }

    return `
        <div class="evento-card">
            <img src="${imagemUrl}" class="evento-img" alt="Imagem do evento">
            <h3 class="evento-title">${titulo}</h3>
            <p class="evento-data">${dataCompleta}</p>
            <p class="evento-local">📍 ${local}</p>
            <div class="card-actions">
                <a href="${linkUrl}" class="evento-botao">Saiba mais</a>
                ${botaoExcluir} 
            </div>
        </div>
    `;
}

todosEventos.forEach(ev => {
    lista.innerHTML += criarCardEvento(ev);
});


function excluirEvento(id) {
    if (!estaLogado()) {
        alert("Acesso negado. Você precisa estar logado para excluir eventos.");
        return; 
    }

    if (!confirm("Tem certeza que deseja excluir este evento? Esta ação é permanente.")) {
        return;
    }
    
    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    
    const idParaExcluir = parseInt(id);
    const novaLista = eventos.filter(ev => ev.id !== idParaExcluir);
    
    localStorage.setItem("eventos", JSON.stringify(novaLista));
    
    window.location.reload();
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('excluir-btn')) {
        const id = e.target.getAttribute('data-id');
        excluirEvento(id);
    }
});