let infosUsuarios = [
    email = "email",
    jogosComprados = [],
    carrinho = []
]


async function fazerLogin() {

    var email = document.getElementById("campoEmail").value
    const senha = document.getElementById("campoSenha").value

    const body = {
        email: email,
        senha: senha
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
        salvarInfos(body.email)

        window.location.href = "pages/games.html"
    } else {
        alert(json.mensagem)
    }

    function salvarInfos(email) {
        infosUsuarios.email = email
        localStorage.setItem("usuario", infosUsuarios)


    }


}






