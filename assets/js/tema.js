function temaEscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function temaClaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function temaAlternar() {
    if (document.body.className === "light") {
        
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.body.className = "dark";
    } else {

        document.body.style.background = "white";
        document.body.style.color = "black";
        document.body.className = "light";
    }
}