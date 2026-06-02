const botao = document.querySelector("#tema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});