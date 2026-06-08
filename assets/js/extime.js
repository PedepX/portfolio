function esperar () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Terminou a espera');
            }, 2000);
});
}
async function iniciar () {
    console.log('Inicio');
    const resposta = await esperar();
    console.log(resposta);
    console.log('Fim');
}