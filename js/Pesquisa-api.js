// função pra ler querystring
function ConsultaTexto(parametro) {  
    let loc = location.search.substring(1, location.search.length);   
    let parametro_valor = false;   
    let parametros = loc.split("&");   
    for (i=0; i<parametros.length;i++) {   
        parametro_name = parametros[i].substring(0,parametros[i].indexOf('='));   
        if (parametro_name == parametro) {                                          
            parametro_valor = parametros[i].substring(parametros[i].indexOf('=')+1)   
        }   
    }   
    if (parametro_valor) {   
        return parametro_valor;   
    }   
    else {   
        return undefined;   
    }   
}

let jogo_nome = ConsultaTexto("CampoPesquisa");

async function Mostrar_Dados() {
    
    const key = '4e727642df2b47278a55ff978b4642be'

    let endpoint = `https://api.rawg.io/api/games?search=${jogo_nome}&key=${key}`
    let response = await fetch(endpoint)
    let bodyJson = await response.json()

    document.getElementById("titulo-game").innerText = bodyJson.results[0].name
    document.getElementById("imagem-secundaria").src = bodyJson.results[0].short_screenshots[parseInt(Math.random() * 6)].image //Obtendo var do screenshots do jogo
    document.getElementById("imagem-game").src = bodyJson.results[0].background_image
    document.getElementById("data-lancamento").innerText = 'Lançamento: ' + bodyJson.results[0].released

    let plataformas = document.getElementById("plataformas")

    for (let i=0;i<bodyJson.results[0].platforms.length; i++){
        let p_plataforma = document.createElement("p")
        p_plataforma.id = "text-plataforma"
        p_plataforma.innerText = bodyJson.results[0].platforms[i].platform.name + ", "
        plataformas.append(p_plataforma)
    }

    let generos = document.getElementById("generos")

    for (let i=0;i<bodyJson.results[0].genres.length; i++){
        let p_genero = document.createElement("p")
        p_genero.id = "text-genero"
        p_genero.innerText = bodyJson.results[0].genres[i].name + ", "
        generos.append(p_genero)
    }

    document.getElementById("preco").innerText = parseFloat(Math.random() * 200 + 40).toFixed(2)

    // Classificação por estrela através do metacritc

    // 5 Estrelas/Metacritc de >= 90 = Excelente
    // 4 estrelas/Metacritic >= 80 = Muito bom
    // 3 estrelas/Metacritic >= 70 = Bom
    // 2 estrelas/Metacritc >= 50 = Ruim
    // 1 estrelas/Metacritic <50 = Pessima Avaliação 

    let metacritc = bodyJson.results[0].metacritic

    if (metacritc >= 90){
        document.getElementById("star-1").style.color = '#FFE600'
        document.getElementById("star-2").style.color = '#FFE600'
        document.getElementById("star-3").style.color = '#FFE600'
        document.getElementById("star-4").style.color = '#FFE600'
        document.getElementById("star-5").style.color = '#FFE600'

        document.getElementById("avaliacao-text").innerText = 'EXCELENTE'
    } else if (metacritc >= 80){
        document.getElementById("star-1").style.color = '#FFE600'
        document.getElementById("star-2").style.color = '#FFE600'
        document.getElementById("star-3").style.color = '#FFE600'
        document.getElementById("star-4").style.color = '#FFE600'

        document.getElementById("avaliacao-text").innerText = 'MUITO BOM'
    } else if (metacritc >= 70){
        document.getElementById("star-1").style.color = '#FFE600'
        document.getElementById("star-2").style.color = '#FFE600'
        document.getElementById("star-3").style.color = '#FFE600'

        document.getElementById("avaliacao-text").innerText = 'BOM'
    } else if (metacritc >= 50){
        document.getElementById("star-1").style.color = '#FFE600'
        document.getElementById("star-2").style.color = '#FFE600'

        document.getElementById("avaliacao-text").innerText = 'RUIM'
    } else {
        document.getElementById("star-1").style.color = '#FFE600'

        document.getElementById("avaliacao-text").innerText = 'PESSIMO'
    }
}

Mostrar_Dados()