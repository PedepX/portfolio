const aviso = sessionStorage.getItem("visto");
if (aviso === "sim") {
    console.log("Já foi mostrado.")
}
else {
    alert("Bem-Vindo!");
    sessionStorage.setItem("visto", "sim");
}