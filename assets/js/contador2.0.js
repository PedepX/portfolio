let numero = 0;

const contador = document.querySelector("#contador");

const botao = document.querySelector("#somar");

botao.addEventListener("click", () => {
    numero++;
    contador.textContent = numero;
});