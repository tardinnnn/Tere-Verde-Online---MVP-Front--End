document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const USER = "admin";
        const PASS = "12345";

        if (username === USER && password === PASS) {
            // Mantém logado até fechar o navegador
            sessionStorage.setItem("logado", "true");

            // Redireciona
            window.location.href = "area_admin.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});


