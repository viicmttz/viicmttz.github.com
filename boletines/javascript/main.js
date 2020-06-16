
/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {

console.log(link);

});
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click', function(){
    console.log(this);
  })
});*/

//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link) {
//agregar un evento clic a cada uno de ellos
  link.addEventListener("click", function(event){
    event.preventDefault();
    return false;
  })
});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
  icono.classList.remove("fa-star");
});
