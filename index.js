let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adiciona eventos aos botões
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btnComprar").forEach(botao => {
        botao.addEventListener("click", adicionarCarrinho);
    });

    exibirCarrinho(); // Exibe carrinho salvo no localStorage
});

function adicionarCarrinho(event) {
    let produtoElemento = event.target.closest(".produto");
    let produtoName = produtoElemento.querySelector(".produtoName").innerText;
    let quantidade = parseInt(produtoElemento.querySelector(".quantidade").value) || 1;
    let preco = parseFloat(produtoElemento.querySelector(".preco").innerText);

    // Verifica se o produto já está no carrinho
    let produtoExistente = carrinho.find(item => item.produto === produtoName);

    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
        produtoExistente.precoTotal = produtoExistente.quantidade * preco;
    } else {
        carrinho.push({
            produto: produtoName,
            quantidade: quantidade,
            preco: preco,
            precoTotal: quantidade * preco
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    exibirCarrinho();
    atualizarContadorCarrinho();
}

function exibirCarrinho() {
    let carrinhoContainer = document.querySelector(".carrinho");
    carrinhoContainer.innerHTML = ""; // Limpa a lista antes de recriar

    let totalGeral = 0;

    carrinho.forEach((produto, index) => {
        let item = document.createElement("div");
        item.innerHTML = `
            <span>${produto.quantidade}x ${produto.produto} - R$ ${produto.precoTotal.toFixed(2)}</span>
            <button class="remover" data-index="${index}">Remover</button>
        `;
        carrinhoContainer.appendChild(item);
        totalGeral += produto.precoTotal;
    });

    document.querySelector(".totalCarrinho").innerText = totalGeral.toFixed(2);

    // Adiciona evento para remover itens
    document.querySelectorAll(".remover").forEach(botao => {
        botao.addEventListener("click", removerItem);
    });
    console.log(carrinho)

    atualizarContadorCarrinho();
}

function removerItem(event) {
    let index = event.target.getAttribute("data-index");
    carrinho.splice(index, 1); // Remove item do array

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    exibirCarrinho(); // Atualiza carrinho na tela
}

function atualizarContadorCarrinho() {
    let totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.querySelector(".contadorCarrinho").innerText = totalItens;
}


