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
})

let caixa = document.getElementById("caixa");
caixa.addEventListener("mouseover", function(){
    caixa.style.backgroundColor = "black"
});

caixa.addEventListener("mouseout", function(){
    caixa.style.backgroundColor = "blue"
})
let btn3 = document.getElementById("btn3")
const lista = document.getElementById("lista")
btn3.addEventListener("click", function(){
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo Item"
    lista.appendChild(novoItem)
})

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
    if(caixa.style.display === "none"){
        caixa.style.display = "block";
    } else {
        caixa.style.display = "none";
    }
})

contadorClick = 0
let imagem = document.getElementById("imagem");
imagem.addEventListener("click", function(){
    imagem.src = "imagem.jpg";
})
const NightMode = document.createElement("button");
NightMode.textContent = "Modo Noturno";
NightMode.style.width = "8rem"; 
NightMode.style.height = "5rem";
NightMode.style.borderRadius = "5px"; 
NightMode.style.backgroundColor = "gray";
NightMode.style.color = "white";
NightMode.style.cursor = "pointer";
NightMode.style.marginTop = "20px"; 
NightMode.addEventListener('click', () => { 
  document.body.style.backgroundColor = '#474747'; 
  Container.style.backgroundColor = '#787878';
  document.body.style.color = 'white' 
});
document.body.appendChild(NightMode);