const cafes = {
    arabico: {
        imagem: "img/cafearabe.jpeg",
        descricao: "O Café Arábico é suave, aromático e possui baixa acidez.",
        nome: "Café Arábico",
        preco: 47.90
    },
    europeu: {
        imagem: "img/cafeeuropa.jpeg",
        descricao: "O Café Europeu tem um sabor forte e intenso, perfeito para quem gosta de cafés encorpados.",
        nome: "Café Europeu",
        preco: 49.90
    },
    mineiro: {
        imagem: "img/cafeminas.jpeg",
        descricao: "O Café Mineiro é equilibrado, com notas de chocolate e aroma irresistível.",
        nome: "Café Mineiro",
        preco: 49.90
    },

};



function atualizarInfo() {
    const cafe1 = document.getElementById("cafe1").value;
    const cafe2 = document.getElementById("cafe2").value;
    
    const chaveMistura = [cafe1, cafe2].sort().join("-");

    if (cafe1 === "none" || cafe2 === "none") {
        document.getElementById("resultadoContainer").style.display = "none";
        return;
    }



    const cafe1Imagem = document.getElementById("cafe1ImagemUnico");
    const cafe1Descricao = document.getElementById("cafe1DescricaoUnico");
    cafe1Imagem.src = cafes[cafe1].imagem;
    cafe1Imagem.alt = cafe1;
    cafe1Descricao.textContent = cafes[cafe1].descricao;


    const cafe2Imagem = document.getElementById("cafe2ImagemUnico");
    const cafe2descricao = document.getElementById("cafe2DescricaoUnico");
    cafe2Imagem.src = cafes[cafe2].imagem;
    cafe2Imagem.alt = cafe2;
    cafe2descricao.textContent = cafes[cafe2].descricao;
    if (misturas[chaveMistura]) {
        document.getElementById("resultadoNome").textContent = misturas[chaveMistura].nome;
        document.getElementById("resultadoImagem").src = misturas[chaveMistura].imagem;
        document.getElementById("resultadoDescricao").textContent = misturas[chaveMistura].descricao;
        document.getElementById("resultadoPreco").textContent = `Preço: R$ ${misturas[chaveMistura].preco.toFixed(2)}`;
        document.getElementById("resultadoContainer").style.display = "block";
        document.getElementById("comprarBtn").style.display = "block";
    } else {
        document.getElementById("resultadoNome").textContent = "Escolha 2 Tipos diferentes!!";
        document.getElementById("resultadoContainer").style.display = "none";
        document.getElementById("comprarBtn").style.display = "none";
    }
}

async function exibirCafe(event) {

    let produtoElemento = event.target.closest(".cafe");
    const cafe1 = produtoElemento.querySelector("select").value;

    const resultadoContainer = produtoElemento.querySelector(".result");
    
    let divResult = document.createElement("div");

    if (cafe1 === "europeu") {
     
        divResult.innerHTML = `
        <div class="info-cafe">
             <div class="produtoSelect">

            <div class="produtoName"> Café Europeu</div>
            <img src="img/cafeEuropeu.jpeg" alt="">

            <h4>Sobre</h4>
            <p>O café europeu é geralmente mais encorpado e intenso, com torra mais escura. Ele é apreciado por seu
                sabor forte e presença marcante.</p>
            <h5>Detalhes</h5>
            <ul>
                <li>Sabor mais amargo e intenso</li>
                <li>Maior concentração de cafeína (cerca de 1,5%)</li>
                <li>Torra escura para um corpo mais encorpado</li>
                <li>Notas de caramelo e especiarias</li>
            </ul>
            <div class="valorItem">
                <p class="preco1">R$</p>
                <p class="preco">70,00</p>
            </div>
        
        </div>

            </div>
        `
        resultadoContainer.innerHTML = divResult.innerHTML

    } 
    if (cafe1 === "mineiro") {
        divResult.innerHTML = `
                <div class="info-cafe">
    <div class="produtoSelect">

            <div class="produtoName">Café Mineiro</div>
            <img src="img/cafeMineiro.png" alt="">

            <h4>Sobre</h4>
            <p>O café mineiro é tradicional no Brasil, conhecido por seu sabor encorpado e notas achocolatadas. Ele
                é cultivado nas montanhas de Minas Gerais.</p>
            <h5>Detalhes</h5>
            <ul>
                <li>Sabor equilibrado com baixa acidez</li>
                <li>Média concentração de cafeína (cerca de 1,3%)</li>
                <li>Cultivado entre 800 e 1.200 metros de altitude</li>
                <li>Notas de chocolate e nozes</li>
            </ul>
            <div class="valorItem">
                <p class="preco1">R$</p>
                <p class="preco">49,00</p>
            </div>
        

        </div>
        </div>
    `
        resultadoContainer.innerHTML = divResult.innerHTML
    } 
    if (cafe1 === "arabico") {
        divResult.innerHTML = `
                <div class="info-cafe">
         <div class="produtoSelect">

            <div class="produtoName"> Café Arábica</div>
            <img src="img/cafeArabico.jpeg" alt="">

            <h4>Sobre</h4>
            <p>OO café Arábica é um dos mais valorizados no mundo, devido ao seu sabor suave e complexo. Ele é
                cultivado em altitudes elevadas e possui menos amargor.</p>
            <h5>Detalhes</h5>
            <ul>
                <li>Mais aromático e saboroso</li>
                <li>Média concentração de cafeína (cerca de 1,2%)</li>
                <li>Cultivado acima de 1.000 metros de altitude</li>
                <li>Sabor mais adocicado e ácido</li>
            </ul>
            <div class="valorItem">
                <p class="preco1">R$</p>
                <p class="preco">99,00</p>
            </div>
        

        </div>
        </div>

    `
        resultadoContainer.innerHTML = divResult.innerHTML
    } 
    if (cafe1 === "none") {
        divResult.innerHTML = ``
        resultadoContainer.innerHTML = divResult.innerHTML

    }
    resumo() 
}

let item = [
   
]
const misturas = [
    {
        combinacao: ["arabico", "mineiro"],
        nome: "Blend Ouro Negro",
        imagem: "img/ouronegro.jpeg",
        descricao: "Uma mistura equilibrada do aroma do Café Arábico com as notas achocolatadas do Café Mineiro.",
        preco: 57.90
    },
    {
        combinacao: ["mineiro", "arabico"],
        nome: "Blend Ouro Negro",
        imagem: "img/ouronegro.jpeg",
        descricao: "Uma mistura equilibrada do aroma do Café Arábico com as notas achocolatadas do Café Mineiro.",
        preco: 57.90
    },
    {
        combinacao: ["mineiro", "europeu"],
        nome: "Café Imperial",
        imagem: "img/cafeimperial.jpeg",
        descricao: "A força do Café Europeu combinada com o toque suave do Café Mineiro.",
        preco: 50.90
    },
    {
        combinacao: ["europeu", "mineiro"],
        nome: "Café Imperial",
        imagem: "img/cafeimperial.jpeg",
        descricao: "A força do Café Europeu combinada com o toque suave do Café Mineiro.",
        preco: 50.90
    },
    {
        combinacao: ["europeu", "arabico"],
        nome: "Nocturno blend",
        imagem: "img/Nocturnoblend.jpeg",
        descricao: "Um blend refinado que equilibra a suavidade do Arábico com a intensidade do Europeu.",
        preco: 52.90
    },
    {
        combinacao: ["arabico", "europeu"],
        nome: "Nocturno blend",
        imagem: "img/Nocturnoblend.jpeg",
        descricao: "Um blend refinado que equilibra a suavidade do Arábico com a intensidade do Europeu.",
        preco: 52.90
    }
];

a

