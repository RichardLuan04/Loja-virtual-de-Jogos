// API = https://api.rawg.io/api/games?search=NOMEDOJOGO&key=7787766744a34328ba34b4df7a3947f0&

// Sorteando jogos populares pelas paginas do endpoint
// Quantidade de paginas = 99 (usando 31)
// Numeros de jogos por pagina = 20


async function Mais_Populares() {

    document.getElementById("titulo-atual").innerText = "Mais Populares"

    for (let i=1;i<=15;i++){
        let random_page = parseInt(Math.random() * 31)
        let random_game = parseInt(Math.random() * 20)

        let endpoint = `https://api.rawg.io/api/games?metacritic=80,100&key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`

        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        document.getElementById(`game${i}`).src = bodyJson.results[random_game].background_image
        document.getElementById(`titulo-id-${i}`).innerText = bodyJson.results[random_game].name
    }
}

Games() // Chamando tela de jogos para ter algo para mostrar

async function Games() {
    document.getElementById("titulo-atual").innerText = "Games"

    for (let i=1;i<=15;i++){
        let random_page = parseInt(Math.random() * 250)
        let random_game = parseInt(Math.random() * 20)

        let endpoint = `https://api.rawg.io/api/games?key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`
        
        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        document.getElementById(`game${i}`).src = bodyJson.results[random_game].background_image
        document.getElementById(`titulo-id-${i}`).innerText = bodyJson.results[random_game].name
    }
}

async function Plataformas (plataforma){

    debugger
    document.getElementById("titulo-atual").innerText = plataforma

    for (let i=1;i<=15;i++){
        let random_page = parseInt(Math.random() * 250)
        let random_game = parseInt(Math.random() * 20)

        let endpoint = `https://api.rawg.io/api/games?key=7787766744a34328ba34b4df7a3947f0&page=${random_page}`

        let response = await fetch(endpoint)
        let bodyJson = await response.json()

        for (let cont = 0;cont<bodyJson.results[random_game].parent_platforms.lenght();){

            if (bodyJson.results[random_game].parent_platforms[cont].name == plataforma){

                document.getElementById(`game${i}`).src = bodyJson.results[random_game].background_image
                document.getElementById(`titulo-id-${i}`).innerText = bodyJson.results[random_game].name

                cont++
            }
        }
    }
}