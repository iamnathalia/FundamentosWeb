//em contato, buscar elemento (imput) - nome, email  || em querySelector para chamar por id usar #, para classe usar .nomedaclasse etc.
// querySelector precisa do uso de simbolos atribuidos aos elementos, como ".", "#" etc. no getElementBy basta indicar o nome do elemento 
//o package JS é SEMPRE colocado no final da body! JS é orientado a Funções q são blocos de codigo

//IMPORTANTISSIMO INCLUIR AS DECLARAÇÕES DE VARIAVEIS (usadas em funções)!!!

let nome = window.document.getElementById("nome")    
let email = document.querySelector("#email") 
let assunto = document.querySelector("imput#assunto") //pode-se usar o imput + indicação do elemento a ser requerido
let nomeOK = false //a presença do False indica situação booleana
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")


nome.style.width ="100%" // nome.estilo.tamanho > usado para modificar o tamanho do campo de informação incluido na pagina.
email.style.width ="100%"
assunto.style.width = "100%"


// FUNCOES CONTATO 

//criação da function (nome criado) ||| A função só funciona se for chamada na pagina (por eventos)! Caso contrario pode ocorrer erros na pag.
function validaNome() {
    let txtNome = document.querySelector("#txtNome") // id criada para o campo nome em contato -- let dentro do escopo!
    if (nome.value.length <=2) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red" // aviso em vermelho para alertar
    } else {
        txtNome.innerHTML = "Ok"  //Deixei o aviso em branco sem estilização
        txtNome.style.color = "green"
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Invalido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Ok"
        txtEmail.style.color = "green" 
        emailOK = true
    }
}

function validaAssunto() {
let txtAssunto = document.querySelector("txtAssunto")

    if (assunto.value.length >= 100) { 
        txtAssunto.innerHTML = "Texto limitado a no máximo 100 caracteres"
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Ok"
        txtAssunto.style.color = "green"
        assuntoOK = true
    }
}

function enviar() { 
    if (nomeOK = true && emailOK == true && assuntoOK == true) {
        alert ("Formulario Enviado!")
    } else {
        alert ("Preencha o formulário corretamente, verifique novamente.")
    }
}

function mapaZoom() { // função para aumentar o mapa dentro da aba contatos
    mapa.style.width = "600px"
    mapa.style.height = "500px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}