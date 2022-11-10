function Abrir_Modal_Carrinho() {
    document.querySelector(".modal-compras").style.display = "flex"
}

function Fechar_Modal_Carrinho() {
    document.querySelector(".modal-compras").style.display = "none"
}

// Função para adicionar jogos ao carrinho

function Adicionar_Jogos() {
    alert("tenta faze")
    let main = document.querySelector(".main")

    //Criando todos os elementos em ordem

    let div_compra = document.createElement("div")
    div_compra.className = "compra"

    main.innerHTML = div_compra

    let div_info = document.createElement("div")
    div_info.className = "informacoes-compra"

    let div_imagem = document.createElement("div")
    div_imagem.className = "div-imagem"

    let img = document.createElement("img")
    img.id = "imagem-carrinho"

    let p_preco = document.createElement("p")
    p_preco.className = "preco-jogo"

    let input_button = document.createElement("input")
    input_button.type = "button"
    input_button.value = "X"

    let hr = document.createElement("hr")
}