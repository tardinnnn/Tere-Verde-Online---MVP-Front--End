document.getElementById("event-form").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const titulo = document.getElementById("titulo").value;
    const dd = document.querySelector(".date-input[placeholder='DD']").value;
    const mm = document.querySelector(".date-input[placeholder='MM']").value;
    const yyyy = document.querySelector(".date-input[placeholder='AAAA']").value;

    const hh = document.querySelector(".time-input[placeholder='HH']").value;
    const min = document.querySelector(".time-input[placeholder='MM']").value;

    const local = document.getElementById("local-atividade").value;
    const descricao = document.getElementById("descricao").value;


    const novoEvento = {
        id: Date.now(), 
        titulo: titulo,
        data: `${dd}/${mm}/${yyyy}`,
        horario: `${hh}:${min}`,
        local: local,
        descricao: descricao
    };


    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos.push(novoEvento);
    localStorage.setItem("eventos", JSON.stringify(eventos));

    alert("Evento publicado com sucesso!");
    window.location.href = "eventos.html"; 
});

