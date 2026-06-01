// Seleciona todos os itens
// const itens =
// document.querySelectorAll('.item');

//Resultado: NodeList(3)
//console.log(itens);

itens.forEach(function(item) {

    itens[1].style.fontWeight = 'bold';

    item.addEventListener('click', function() {
        console.log("Clicou no item: " + item.innerText);
    });
})