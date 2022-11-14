function Abrir_Modal_Carrinho() {
    document.querySelector(".modal-compras").style.display = "flex"
}

function Fechar_Modal_Carrinho() {
    document.querySelector(".modal-compras").style.display = "none"
}

// LocalStorage do carrinho
let total = 0
total.toFixed(2)
let compras = [] 
let compras_Salvas = localStorage.getItem("Compras")// Nome da chave ser o email do usuario

if (compras_Salvas !== null){
    compras = JSON.parse(compras_Salvas)

    let main = document.querySelector(".main")

    for (let game of compras){

        let div_compra = document.createElement("div")
        div_compra.className = "compra"
        main.append(div_compra)

        let div_info_compras = document.createElement("div")
        div_info_compras.className = "informacoes-compra"
        div_compra.append(div_info_compras)

        let div_imagem = document.createElement("div")
        div_imagem.className = "div-imagem"
        div_info_compras.append(div_imagem)

        let img = document.createElement("img")
        img.src = game.imagem
        img.id = "imagem-carrinho"
        div_imagem.append(img)

        let p_nome = document.createElement("p")
        p_nome.innerText = game.nomeJogo
        p_nome.className = "nome-jogo"
        div_imagem.append(p_nome)

        let div_infos = document.createElement("div")
        div_infos.className = "div-infos"
        div_info_compras.append(div_infos)

        let p_preco = document.createElement("p")
        p_preco.innerText = game.valor
        p_preco.className = "preco-jogo"
        div_infos.append(p_preco)

        let input_button = document.createElement("input")
        input_button.type = "button"
        input_button.value = "X"
        div_infos.append(input_button)

        let hr = document.createElement("hr")
        div_compra.append(hr)
      
        let valor = parseFloat(game.valor)
        total = total + valor
    }
    document.getElementById("valor-total").innerText = total
}
// Função para adicionar jogos ao carrinho

function Adicionar_Jogos(number) {
    
    let main = document.querySelector(".main")

    //Criando todos os elementos em ordem

    let div_compra = document.createElement("div")
    div_compra.className = "compra"
    main.append(div_compra)
    
    let div_info_compras = document.createElement("div")
    div_info_compras.className = "informacoes-compra"
    div_compra.append(div_info_compras)

    let div_imagem = document.createElement("div")
    div_imagem.className = "div-imagem"
    div_info_compras.append(div_imagem)

    let img = document.createElement("img") 
    img.id = "imagem-carrinho"                  // Adicionando elemento de imagem
    img.src = document.getElementById(`game${number}`).src
    div_imagem.append(img)

    let p_nome = document.createElement("p")  // Adicionando elemento nome do jogo
    p_nome.className = "nome-jogo"
    p_nome.innerText = document.getElementById(`titulo-id-${number}`).textContent
    div_imagem.append(p_nome)

    let div_infos = document.createElement("div")
    div_infos.className = "div-infos"
    div_info_compras.append(div_infos)

    let p_preco = document.createElement("p") // Cria dps
    p_preco.className = "preco-jogo"
    p_preco.innerText = parseFloat(Math.random() * 200 + 40).toFixed(2)
    div_infos.append(p_preco)

    let input_button = document.createElement("input")
    input_button.type = "button"
    input_button.value = "X"
    div_infos.append(input_button)

    let hr = document.createElement("hr")
    div_compra.append(hr)
    
    let preco = parseFloat(p_preco.textContent)
    document.getElementById("valor-total").innerText = total = total + preco

    let informacoes_compras = {
        imagem: img.src,
        nomeJogo: p_nome.textContent,
        valor: p_preco.textContent,
    }

    compras.push(informacoes_compras)

    let comprasJson = JSON.stringify(compras)
    localStorage.setItem('Compras', comprasJson)
}

function Adicionar_Jogos_Pesquisa(){

    let main = document.querySelector(".main")

    //Criando todos os elementos em ordem

    let div_compra = document.createElement("div")
    div_compra.className = "compra"
    main.append(div_compra)
    
    let div_info_compras = document.createElement("div")
    div_info_compras.className = "informacoes-compra"
    div_compra.append(div_info_compras)

    let div_imagem = document.createElement("div")
    div_imagem.className = "div-imagem"
    div_info_compras.append(div_imagem)

    let img = document.createElement("img") 
    img.id = "imagem-carrinho"                  // Adicionando elemento de imagem
    img.src = document.getElementById('imagem-game').src
    div_imagem.append(img)

    let p_nome = document.createElement("p")  // Adicionando elemento nome do jogo
    p_nome.className = "nome-jogo"
    p_nome.innerText = document.getElementById('titulo-game').textContent
    div_imagem.append(p_nome)

    let div_infos = document.createElement("div")
    div_infos.className = "div-infos"
    div_info_compras.append(div_infos)

    let p_preco = document.createElement("p")
    p_preco.className = "preco-jogo"
    p_preco.innerText = document.getElementById('preco').textContent
    div_infos.append(p_preco)

    let input_button = document.createElement("input")
    input_button.type = "button"
    input_button.value = "X"
    div_infos.append(input_button)

    let hr = document.createElement("hr")
    div_compra.append(hr)
    
    let preco = parseFloat(p_preco.textContent)
    document.getElementById("valor-total").innerText = total = total + preco

    let informacoes_compras = {
        imagem: img.src,
        nomeJogo: p_nome.textContent,
        valor: p_preco.textContent,
    }

    compras.push(informacoes_compras)

    let comprasJson = JSON.stringify(compras)
    localStorage.setItem('Compras', comprasJson)
}
