let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


carrinho.forEach(produto => {
    produto.forEach(valor => {
        let preco = produto.precoTotal
        console.log(preco)
    })
});



