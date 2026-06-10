const titulo =
document.querySelector("#titulo-produto");
const precoTexto =
document.querySelector("#preco-produto");
const botoes =
document.querySelectorAll(".produto");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    titulo.textContent = botao.dataset.nome;
    precoTexto.textContent = `R$
    ${botao.dataset.preco}`;
    });
});
