async function fazerLogin() {
    const email = document.getElementById("campoEmail")
    const senha = document.getElementById("campoSenha")

    const body = {
        email: email.value,
        senha: senha.value
    }

    var resposta = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await resposta.json()

    if (resposta.ok) {
        window.location.href = "pages/games.html"
    } else {
        alert(json.mensagem)
    }
}

