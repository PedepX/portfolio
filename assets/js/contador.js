function atualizarTela() {
    preco.innerHTML = precobase * numero;
}

let numero = 0;
function somar() {
  numero++;
  document.getElementById("contador").innerHTML = numero;
}

function subtrair() {
  if (numero <= 0) {
    alert("Não aceito numeros negativos");
    return;
  }
  numero--;
  document.getElementById("contador").innerHTML = numero;
}

atualizarTela();