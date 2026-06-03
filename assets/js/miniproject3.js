const pessoas = [
    { nome: "Ana", idade: 20 },
    { nome: "João", idade: 15 }
]

const maiores = pessoas.filter(p => p.idade >= 18);
console.log(maiores);