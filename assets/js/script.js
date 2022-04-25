//em contato, buscar elemento (imput) - nome, email  || em querySelector para chamar por id usar #, para classe usar .nomedaclasse etc.
// queryselector precisa do uso de simbolos atribuidos aos elementos, como ".", "#" etc. no getElementBy basta indicar o nome do elemento 


let nome = window.document.getElementById("nome")    
let email = document.querySelector("#email")
let assunto = document.querySelector("imput#assunto") //pode-se usar o imput + indicação do elemento a ser requerido

nome.style.width ="98%"
email.style.width ="98%"
assunto.style.width = "100%"