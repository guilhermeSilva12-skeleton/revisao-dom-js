const titulo1 = document.getElementById("titulo")
const acao1 = document.getElementById("btn1")
acao1.addEventListener("click", function(){
    titulo1.innerText = "JavaScript é Incrível"
});

let btn2 = document.getElementById("btn2");
const inputTexto = document.getElementById("inputTexto");
const mensagem = document.getElementById("mensagem");
btn2.addEventListener("click", function(){
mensagem.innerText = "olá " + inputTexto.value + "!";
});
let caixa = document.getElementById("caixa");
caixa.addEventListener("mouseover", function(){
    caixa.style.backgroundColor = "black";
});

caixa.addEventListener("mouseout", function(){
    caixa.style.backgroundColor = "blue";
})