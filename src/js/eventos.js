// Aguarda o carregamento completo do HTML antes de executar o script de listagem
document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista-eventos");
    // Tenta obter a lista de eventos do Local Storage, ou usa um array vazio se não houver
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    // Verifica se o usuário está logado (para exibir o botão de exclusão)
    const logado = sessionStorage.getItem("logado") === "true";

    // Limpa o conteúdo atual da lista
    lista.innerHTML = "";

    // Itera sobre a lista de eventos para criar o HTML de cada card
    eventos.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("evento-card");

        // Cria a estrutura HTML do card, injetando os dados do evento
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

/**
 * Função global para excluir um evento após confirmação.
 * @param {number} id - O ID do evento a ser excluído.
 */
function excluirEvento(id) {
    // 1. Exibe a caixa de diálogo de confirmação (Esta é a linha que deve aparecer)
    const confirmacao = confirm("Tem certeza de que deseja excluir este evento?");

    if (confirmacao) {
        // Se o usuário clicar em OK:
        
        // Carrega a lista atual
        let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
        
        // Filtra a lista, removendo o evento com o ID fornecido
        eventos = eventos.filter(e => e.id !== id);
        
        // Salva a nova lista (sem o evento excluído) de volta no Local Storage
        localStorage.setItem("eventos", JSON.stringify(eventos));
        
        // 2. EXIBE O ALERTA DE SUCESSO (Aparece antes de recarregar)
        alert("Evento excluído com sucesso!");
        
        // 3. Recarrega a página para atualizar a lista exibida
        location.reload(); 
        
    } else {
        // Se o usuário clicar em Cancelar
        alert("Exclusão cancelada.");
    }
}