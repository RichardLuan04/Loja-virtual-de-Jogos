// API = https://api.rawg.io/api/games?search=NOMEDOJOGO&key=7787766744a34328ba34b4df7a3947f0&
const key = '190508eb6b3047539fa72bf5f3b765b6'
// Sorteando jogos populares pelas paginas do endpoint
// Quantidade de paginas = 99 (usando 31)
// Numeros de jogos por pagina = 20

// Chamando tela de jogos para ter algo para mostrar
Games()

// Pesquisando por jogos populares

async function Mais_Populares() {

    let random_page = parseInt(Math.random() * 31)
    let endpoint = `https://api.rawg.io/api/games?metacritic=80,100&key=${key}&page=${random_page}`
    let response = await fetch(endpoint)
    let bodyJson = await response.json()

    document.getElementById("titulo-atual").innerText = "Mais Populares"

    for (let i = 1; i <= 15; i++) {

        let img = document.getElementById(`game${i}`)
        let text = document.getElementById(`titulo-id-${i}`)

        img.src = bodyJson.results[i].background_image
        text.innerText = bodyJson.results[i].name
    }
}

// Pesquisando por jogos de todas as categorias

async function Games() {

    let random_page = parseInt(Math.random() * 100 + 1)
    let endpoint = `https://api.rawg.io/api/games?key=${key}&page=${random_page}`
    let response = await fetch(endpoint)
    let bodyJson = await response.json()

    document.getElementById("titulo-atual").innerText = "Games"

    for (let i = 1; i <= 15; i++) {

        let img = document.getElementById(`game${i}`)
        let text = document.getElementById(`titulo-id-${i}`)

        img.src = bodyJson.results[i].background_image
        text.innerText = bodyJson.results[i].name
    }
}

// Pesquisando por jogos de diversas plataformas diferentes

let imagens_contagem = 0

async function Plataformas(plataforma) {
    
    document.getElementById("titulo-atual").innerText = plataforma
    let random_page = parseInt(Math.random() * 100 + 1)
    let endpoint = `https://api.rawg.io/api/games?key=${key}&page=${random_page}`

    let response = await fetch(endpoint)
    let bodyJson = await response.json()

    for (let i = 0; i < 20;i++) {
        let plataformaArray = bodyJson.results[i].platforms

        for (let cont = 0; cont < plataformaArray.length; cont++) {

            if (bodyJson.results[i].platforms[cont].platform.name === plataforma) {
                
                imagens_contagem = imagens_contagem + 1

                let img = document.getElementById(`game${imagens_contagem}`)
                let text = document.getElementById(`titulo-id-${imagens_contagem}`)

                img.src = bodyJson.results[i].background_image
                text.innerText = bodyJson.results[i].name

                break
            } 
        }
    }
    if (imagens_contagem < 15){
        Plataformas(plataforma)
    } else {
        imagens_contagem = 0
    }
}

// Pesquisando por jogos de diferentes generos

async function Generos(genero, name) {
    
    document.getElementById("titulo-atual").innerText = name
    let random_page = parseInt(Math.random() * 100 + 1)
    let endpoint = `https://api.rawg.io/api/games?key=${key}&page=${random_page}`

    let response = await fetch(endpoint)
    let bodyJson = await response.json()

    for (let i = 0; i < 20;i++) {
        let generoArray = bodyJson.results[i].genres

        for (let cont = 0; cont < generoArray.length; cont++) {

            if (bodyJson.results[i].genres[cont].name === genero) {

                imagens_contagem = imagens_contagem + 1

                let img = document.getElementById(`game${imagens_contagem}`)
                let text = document.getElementById(`titulo-id-${imagens_contagem}`)

                img.src = bodyJson.results[i].background_image
                text.innerText = bodyJson.results[i].name

                break
            }
        }
    }
    if (imagens_contagem < 15){
        Generos(genero, name)
    } else {
        imagens_contagem = 0
    }
}

// Função para ir para a tela de pesquisa
function passaValor(valor) {
    if (valor != ""){
        window.location.href = "pesquisa.html?CampoPesquisa="+valor
    } else {
        alert ("Preencha o campo para poder pesquisar!")
    }
}

function Tela_Pesquisa(){
    let game = document.getElementById("CampoPesquisa").value
    passaValor(game);
}