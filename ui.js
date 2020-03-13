let form = document.getElementById("form");
let Name = "yadira";
let Password = "yadira123";
let buttom = document.getElementById("event");

let validarNombre = function(e) {
  if (form.name.value === Name && form.nombre.value === Password) {
    alert("Welcome!!!!");
    e.preventDefault();
  } else {
    alert("you don't welcome");
  }
};

let validar = function(e) {
  validarNombre(e);
};
form.addEventListener("submit", validar);
