const peso = document.getElementById("peso");
const barralateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const modoescuro = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");


modoescuro.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("dark-mode")
});

peso.addEventListener("click",() => {
    barralateral.classList.toggle("mini-barra-lateral");
    
    
    spans.forEach((span) =>{
        span.classList.toggle("oculto");
    });
});