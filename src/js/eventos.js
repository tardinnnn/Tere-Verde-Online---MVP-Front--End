const eventos = [
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

const lista = document.getElementById("lista-eventos");

eventos.forEach(ev => {
    const card = `
        <div class="evento-card">
            <img src="${ev.imagem}" class="evento-img" alt="Imagem do evento">
            <h3 class="evento-title">${ev.titulo}</h3>
            <p class="evento-data">📅 ${ev.data}</p>
            <p class="evento-local">📍 ${ev.local}</p>
            <a href="${ev.link}" class="evento-botao">Saiba mais</a>
        </div>
    `;
    lista.innerHTML += card;
});
