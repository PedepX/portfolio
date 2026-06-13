let db;

const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");
const request = indexedDB.open("TodoDB", 1);

request.onupgradeneeded = event => {
    db = event.target.result;
    db.createObjectStore("tarefas",
        {
            keyPatch: "id",
            autoIncrement: true
        });
};

request.onsuccess = event => {
    db = event.target.result;

    carregarTarefas();
};

request.onerror = () => {
    console.log("Erro ao abrir o Banco");
};

formulario.addEventListener("sumbit", event => {
    event.preventDefault();
    const titulo = input.value.trim();
    if (titulo === "") {
        alert("Digite uma tarefa");
        return;
    }
    adicionarTarefa(titulo);
    input.value = "";
});

function adicionarTarefa(titulo) {
    const transaction = db.transaction("tarefas", "readwrite");
    const store = transaction.objectStore("tarefas");

    const tarefa = {titulo: titulo, concluida: false};
    
    store.add(tarefa);

    transaction.oncomplete = () => {
        carregarTarefas();
    };
}

function carregarTarefas() {
    lista.innerHTML = "";
    const transaction = db.transaction("tarefas", "readonly");
    const store = transaction.objectStore("tarefas");

    const request = store.getAll();
    request.onsuccess = () => {
        const tarefas = request.result;
        tarefas.forEach(tarefa =>
            criarItemNaTela(tarefa));
            atualizarContador(tarefa.length);
    };
}

function criarItemNaTela (tarefa) {
    const item = document.createElement("li");
    const texto = document.createElement("span");
    texto.textContent = tarefa.titulo;
    if (tarefa.concluida) {
        texto.classList.add("concluida"); }
        texto,addEventListener("click", () => alterarStatus(tarefa));
        const btn = document.createElement("button");
        btn.textContent = "Excluir";
        btn.addEventListener("click", () => excluirTarefa(tarefa.id));
        item.appendChild(texto);
        item.appendChild(btn);
        lista.appendChild(item);
    }

function alterarStatus(tarefa) { const transaction = db.transaction("tarefas", "readwrite"); const store = transaction.objectStore("tarefas"); tarefa.concluida = !tarefa.concluida; store.put(tarefa); transaction.oncomplete = () => { carregarTarefas(); }; }

function excluirTarefa(id) { const transaction = db.transaction("tarefas", "readwrite"); const store = transaction.objectStore("tarefas"); store.delete(id); transaction.oncomplete = () => { carregarTarefas(); }; } function atualizarContador(total) { contador.textContent = `Total: ${total} tarefa(s)`; }