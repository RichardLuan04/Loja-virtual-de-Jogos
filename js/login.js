let infosUsuarios = {
    email: "",
    games: []
}

async function fazerLogin() {

    let email = document.getElementById("campoEmail").value
    const senha = document.getElementById("campoSenha").value

    const body = {
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
        window.location.href = "pages/games.html"
    } else {
        alert(json.mensagem)
    }
}

function salvarInfos(email) {
    infosUsuarios.email = email
    let usuario_salvo = JSON.stringify(infosUsuarios)
    localStorage.setItem("usuario", usuario_salvo)
}

