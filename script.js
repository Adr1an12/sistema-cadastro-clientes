let clientes = [];

function adicionarCliente() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    clientes.push({ nome, email });
    atualizarLista();

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    clientes.forEach((cliente, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${cliente.nome} - ${cliente.email}
            <button class="remover" onclick="removerCliente(${index})">X</button>
        `;

        lista.appendChild(li);
    });
}

function removerCliente(index) {
    clientes.splice(index, 1);
    atualizarLista();
}