function titulo(dataTitulo, dataColor) {
  mudarTexto(dataTitulo);
  alterarCor(dataColor);
}

function mudarTexto(data) {
  let t = document.getElementById("titulo");
  t.innerHTML = data;
}

function alterarCor(data) {
  let titulo = document.getElementById("titulo");
  titulo.style.color = data;
}
