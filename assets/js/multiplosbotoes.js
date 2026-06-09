const botoes =
document.querySelectorAll(".produto");
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const id = botao.dataset.id;
        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);
        console.log(id, nome, preco);
    });
});