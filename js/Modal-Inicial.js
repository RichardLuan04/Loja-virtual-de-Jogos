var modal_login = document.querySelector(".modal-login")
var modal_cadastro = document.querySelector(".modal-cadastro")

function Abrir_Modal(modal){
    modal.classList.add("active")

    document.querySelector(".main").style.background = "rgba(0, 0, 0, 0.6)"
}

function Fechar_Modal(modal){
    modal.classList.remove("active")

    document.querySelector(".main").style.background = "rgba(22, 11, 88, 0.5)"
}

