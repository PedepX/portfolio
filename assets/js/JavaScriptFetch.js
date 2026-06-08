const botao = document.querySelector("#btnBuscar");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", async () => {
  resultado.textContent = "Carregando...";

  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!resposta.ok) {
      throw new Error("Erro: " + resposta.status);
    }
    const usuario = await resposta.json();
    resultado.textContent = `Nome: ${usuario.name}`;
  } catch (erro) {
    resultado.textContent = "Falha ao Carregar";
  }
});
