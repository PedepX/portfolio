/*const form = document.querySelector("#formulario");
form.addEventListener("submit", (e) => {
  
  document.querySelector("#j-button").disabled = true;
  e.preventDefault();
  const nome = document.querySelector("#nome");
  console.log(nome.value)
})*/

const input = 
document.querySelector("#tarefa");
const botao = 
document.querySelector("#adicionar");
const lista = 
document.querySelector("#lista");

botao.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = input.value;
  lista.appendChild(item);
  input.value = "";
})
