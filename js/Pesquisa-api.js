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
    
    const key = '190508eb6b3047539fa72bf5f3b765b6'

    let endpoint = `https://api.rawg.io/api/games?search=${jogo_nome}&key=${key}`
    let response = await fetch(endpoint)
    let bodyJson = await response.json()

    document.getElementById("titulo-game").innerText = bodyJson.results[0].name
    document.getElementById("imagem-game").src = bodyJson.results[0].background_image
    document.getElementById("data-game").innerText = "Lançamento: " + bodyJson.results[0].released

    var plataformas = document.getElementById("plataformas")

    for (var i=0;i<bodyJson.results[0].platforms.length; i++){
        var li = document.createElement("li")
        li.innerText = bodyJson.results[0].platforms[i].platform.name
        plataformas.append(li)
    }
}

Mostrar_Dados()