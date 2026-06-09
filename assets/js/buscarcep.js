const inputCep = document.querySelector("#cep");
const botaoBuscar = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

botaoBuscar.addEventListener("click", async () => {
  const cep = inputCep.value.trim();
  if (cep === "") {
    resultado.textContent = "Digite um CEP";
    return;
  }
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    if (dados.erro) {
      resultado.textContent = "CEP não encontrado";
      return;
    }
    console.log(dados);
    resultado.innerHTML = `<p><b>Rua:</b> ${dados.logradouro}</p>...`;
  } catch (error) {
    resultado.textContent = "Erro ao buscar o CEP";
  }
});
