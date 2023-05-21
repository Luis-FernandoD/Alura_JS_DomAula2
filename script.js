/*
const evento = document.querySelector("#calcular")

evento.addEventListener("click", function(){
    console.log('Fui clicado')
});
*/
//ou

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
 
   resultado.innerHTML = "Fui clicado" //Escreve no html!! 
})