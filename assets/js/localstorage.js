/* Salvar Dados */
localStorage.setItem("nome", "Pedro");

/* Remover Item
localStorage.removeItem("nome");*/

/* Ler/Recuperar Item 
const nome = localStorage.getItem("nome");
console.log(nome); */
/* Limpar Tudo 
localStorage.clear(); */

const usuario = {
    nome: "Pedro",
    idade: 22
};
localStorage.setItem("usuario", JSON.stringify(usuario));

console.log(usuario.nome);