 const idUsuario =  [] 
 
 
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
        // window.location.href = "pages/games.html"
    } else {
        alert(json.mensagem)
    }   
    
   

}

const adicionar = idUsuario.push(email)
let idUsuarioJson = JSON.stringify(idUsuario)
localStorage.setItem('idUsuario', idUsuarioJson)
const idString = localStorage.getItem('idUsuario')


     
  