let usuario = {
    email: ""
} 

async function fazerLogin() {
   
    let email = document.getElementById("campoEmail").value
    const senha = document.getElementById("campoSenha").value

    var body = {
        email: email,         
        senha: senha
    }

    let resposta = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await resposta.json()

    if (resposta.ok) {
        salvarInfos(body.email)
        Salvando_Produtos(body.email)
        window.location.href = "pages/games.html"
    } else {
        alert(json.mensagem)
    }   
}

function salvarInfos(email){
    usuario.email = email
    var usuario_salvo = JSON.stringify(usuario)
    localStorage.setItem("usuario", usuario_salvo)
}

function Salvando_Produtos(user){
    let comprasJson = JSON.stringify(compras)
    localStorage.setItem(`${user}`, comprasJson)
}

function Encontra_Item(email_user) {
    return body.email
}