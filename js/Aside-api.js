// API = https://api.rawg.io/api/games?search=NOMEDOJOGO&key=7787766744a34328ba34b4df7a3947f0&

// Sorteando jogos populares pelas paginas do endpoint
// Quantidade de paginas = 99 (usando 31)
// Numeros de jogos por pagina = 20

// Pesquisando por jogos populares

async function Mais_Populares() {

    document.getElementById("titulo-atual").innerText = "Mais Populares"

    for (let i=1;i<=15;i++){
        let random_page = parseInt(Math.random() * 31)
        let random_game = parseInt(Math.random() * 20)

        let endpoint = `https://api.rawg.io/api/games?metacritic=80,100&key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`

        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        let img = document.getElementById(`game${i}`)
        let text = document.getElementById(`titulo-id-${i}`)

        img.src = bodyJson.results[random_game].background_image
        text.innerText = bodyJson.results[random_game].name
    }
}

// Chamando tela de jogos para ter algo para mostrar
Games()

// Pesquisando por jogos de todas as categorias

async function Games() {
    document.getElementById("titulo-atual").innerText = "Games"

    for (let i=1;i<=15;i++){
        let random_page = parseInt(Math.random() * 100)
        let random_game = parseInt(Math.random() * 20)

        let endpoint = `https://api.rawg.io/api/games?key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`
        
        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        let img = document.getElementById(`game${i}`)
        let text = document.getElementById(`titulo-id-${i}`)

        img.src = bodyJson.results[random_game].background_image
        text.innerText = bodyJson.results[random_game].name
    }
}

// Pesquisando por jogos de diversas plataformas diferentes

async function Plataformas (plataforma){
    
    document.getElementById("titulo-atual").innerText = plataforma

    for (let i=1;i<=15;){  
        let random_page = parseInt(Math.random() * 100)
        let random_game = parseInt(Math.random() * 20)

        let endpoint = `https://api.rawg.io/api/games?key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`

        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        let plataformaArray = bodyJson.results[random_game].platforms
        
        for (let cont = 0;cont<plataformaArray.length;cont++){

            if (bodyJson.results[random_game].platforms[cont].platform.name === plataforma){

                let img = document.getElementById(`game${i}`)
                let text = document.getElementById(`titulo-id-${i}`)

                img.src = bodyJson.results[random_game].background_image
                text.innerText = bodyJson.results[random_game].name

                i++
                break
            }
        }
    }
}

// Pesquisando por jogos de diferentes generos

async function Generos(genero, name) {
    document.getElementById("titulo-atual").innerText = name

    for (let i=1;i<=15;){  
        let random_page = parseInt(Math.random(1) * 100)
        let random_game = parseInt(Math.random(1) * 20)

        let endpoint = `https://api.rawg.io/api/games?key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`

        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        let generoArray = bodyJson.results[random_game].genres
        
        for (let cont = 0;cont<generoArray.length;cont++){

            if (bodyJson.results[random_game].genres[cont].name === genero){

                let img = document.getElementById(`game${i}`)
                let text = document.getElementById(`titulo-id-${i}`)

                img.src = bodyJson.results[random_game].background_image
                text.innerText = bodyJson.results[random_game].name

                i++
                break
            }
        }
    }
}