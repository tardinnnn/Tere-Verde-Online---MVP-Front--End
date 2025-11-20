document.addEventListener("DOMContentLoaded", function () {
    const logado = sessionStorage.getItem("logado");

    if (logado !== "true") {
        window.location.href = "login.html";
    }
});
