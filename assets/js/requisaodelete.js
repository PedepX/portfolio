const botoesExcluir = document.querySelectorAll('.btn-excluir[data-method="DELETE"]');
botoesExcluir.forEach((botao) => {
  botao.addEventListener("click", async () => {
    const id = botao.dataset.id;
    const url = botao.dataset.url;
    const method = botao.dataset.method;

    console.log("1. Botão Clicado");
    console.log("2. ID:", id);
    console.log("3. URL:", url);
    console.log("4. Meétodo HTTP:", method);

    try {
      console.log("5. Enviando...");
      const resposta = await fetch(url, {
        method: method,
        headers: { Accept: "application/json" },
      });
      console.log("6. Status:", resposta.status);
      console.log("7. Resposta:", resposta);

      if (!resposta.ok) {
        console.log("8. Erro ao Excluir");
        return;
      }
      console.log("8. Sucesso");
    } catch (erro) {
      console.log("Erro no fetch:", erro);
    }
  });
});
