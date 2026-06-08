async function buscarUsuario() {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    // O Fetch não rejeita em erros 404/500, então precisamos verificar manualmente
    if (!resposta.ok) {
      throw new Error("Erro: " + resposta.status);
    }
    const usuario = await resposta.json();
    console.log(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
}
buscarUsuario();
