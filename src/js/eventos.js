document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista-eventos");
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    const logado = sessionStorage.getItem("logado") === "true";

    lista.innerHTML = "";

    eventos.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("evento-card");

        card.innerHTML = `
            
            <div class="evento-info">
                <h3>${evento.titulo}</h3>

                <p><strong>Data:</strong> ${evento.data}</p>
                <p><strong>Horário:</strong> ${evento.horario}</p>
                <p><strong>Local:</strong> ${evento.local}</p>
    

                <p class="descricao">${evento.descricao}</p>

                ${logado ? `
                    <button class="btn-excluir" onclick="excluirEvento(${evento.id})">Excluir</button>
                ` : ""}
            </div>
        `;

        lista.appendChild(card);
    });
});

function excluirEvento(id) {
    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos = eventos.filter(e => e.id !== id);
    localStorage.setItem("eventos", JSON.stringify(eventos));
    location.reload();
}


