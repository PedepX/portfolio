const botao = document.querySelector("#tema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Salvando a Escolha
localStorage.setItem("theme", "dark");

// Na Inicialização
const theme = localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
}