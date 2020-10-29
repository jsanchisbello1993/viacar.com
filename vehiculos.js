let vehiculos = [];

function crearTurismo(marca, modelo, kms, tipo_combustible, numero_plazas, estado){
	let nuevoVehiculo = new Turismo(marca, modelo, kms,tipo_combustible, numero_plazas, estado);
	vehiculos.push(nuevoVehiculo);
}

// function crearFurgoneta(marca, modelo, tipo de combustible, kms, capacidad, puerta_lateral, estado){
// 	let nuevoVehiculo = new Furgoneta(marca, modelo, tipo de combustible, kms, capacidad, puerta_lateral, estado);
// 	vehiculos.push(nuevoVehiculo);
// }
//
// function crearFurgoneta(marca, modelo, tipo de combustible, kms, longitud, peso_máximo_admitido, estado){
// 	let nuevoVehiculo = new Camion(marca, modelo, tipo de combustible, kms, longitud, peso_máximo_admitido, estado);
// 	vehiculos.push(nuevoVehiculo);
// }

//Funciones al presionar el botón

document.getElementById('btn1').onclick = function(){

  let select_marca = document.getElementById('marca').value;
  let select_modelo = document.getElementById('modelo').value;
  let select_combustible = document.getElementById('tipo_combustible').value;
  let select_kms = document.getElementById('kms').value;
  let select_plazas = document.getElementById('numero-plazas').value;
  let select_estado = document.getElementById('estado').value;

  crearTurismo(marca, modelo, tipo_combustible, kms, numero_plazas, estado);

  alert("Turismo añadido");
  console.log(vehiculos);
}
