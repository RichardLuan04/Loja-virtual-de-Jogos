async function fazerLogin() {
    const email = document.getElementById("campoEmail")
    const senha = document.getElementById("campoSenha")

    const body = {
        email: email.value,
        senha: senha.value
    }

    const resposta = await fetch(" https://codifica-demo-api.herokuapp.com/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        Headers: {
            "const-type": "aplication/json"
        }
    })

    const json = await resposta.json()
    alert(json.mensagem)
}
