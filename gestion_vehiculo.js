let vehiculo = [];


function crearTurismo(marca, modelo, tipo_combustible, kms,estado,matricula, numero_plazas){
	let nuevoVehiculo = new Turismo(marca, modelo,tipo_combustible,kms, estado, numero_plazas,matricula);
	vehiculo.push(nuevoVehiculo);
}
function crearFurgoneta(marca, modelo, tipo_combustible, kms,estado,matricula, capacidad, puerta_lateral){
	let nuevoVehiculo = new Furgoneta(marca, modelo, tipo_combustible, kms,estado,matricula,capacidad, puerta_lateral);
	vehiculo.push(nuevoVehiculo);
}
function crearCamion(marca, modelo,tipo_combustible, kms, estado,matricula, longitud, peso_máximo_admitido, ){
  let nuevoVehiculo = new Camion(marca, modelo,tipo_combustible, kms, estado,matricula, longitud, peso_máximo_admitido);
  vehiculo.push(nuevoVehiculo);
}


document.getElementById('cambiar-kms').onclick = function(){
  for (let i = 0; i < vehiculo.length; i++) {
    if(document.getElementById('mat_vieja').value ==vehiculo[i].matricula){
      let nuevo_kms = document.getElementById('cambiarkms').value;
      vehiculo[i].modificarKms(nuevo_kms);
    }
  }
}

document.getElementById('boton_cambiar_estado').onclick = function(){
  for (let i = 0; i < vehiculo.length; i++) {
    if(document.getElementById('mat_vieja').value ==vehiculo[i].matricula){
      let nuevo_estado = document.getElementById('cambiarEstado').value;
      vehiculo[i].modificarEstado(nuevo_estado);
    }
  }
}
document.getElementById('eliminar').onclick = function(){
  for (let i = 0; i < vehiculo.length; i++) {
    if(document.getElementById('mat_vieja_del').value ==vehiculo[i].matricula){
      vehiculo.splice(i,1);
    }
  }
}



//Funciones al presionar el botón

document.getElementById('boton1').onclick = function(){

  let select_marca = document.getElementById('marca').value;
  let select_modelo = document.getElementById('modelo').value;
  let select_combustible = document.getElementById('tipo_combustible').value;
  let select_kms = document.getElementById('kms').value;
  let select_estado = document.getElementById('estado').value;
  let select_matricula1 = document.getElementById('mat1').value;
  let select_plazas = document.getElementById('numero-plazas').value;




  crearTurismo(select_marca, select_modelo, select_combustible, select_kms,select_estado, select_matricula1, select_plazas);

  alert("Turismo añadido");
  console.log(vehiculo);
}

document.getElementById('boton2').onclick = function(){

  let select_marca1 = document.getElementById('marca1').value;
  let select_modelo1 = document.getElementById('modelo1').value;
  let select_combustible1 = document.getElementById('tipo_combustible1').value;
  let select_kms1 = document.getElementById('kms1').value;
  let select_estado1 = document.getElementById('estado1').value;
  let select_matricula2 = document.getElementById('mat2').value;
  let capacidad= document.getElementById('capacidad').value;
  let select_puerta = document.getElementById('puerta_lateral').value;


  crearFurgoneta(select_marca1, select_modelo1, select_combustible1,select_kms1, select_estado1,select_matricula2, capacidad, select_puerta,);

  alert("Furgoneta añadida");
  console.log(vehiculo);
}

document.getElementById("boton3").onclick = function(){
  let select_marca2 = document.getElementById('marca2').value;
  let select_modelo2 = document.getElementById('modelo2').value;
  let select_combustible2 = document.getElementById('tipo_combustible2').value;
  let select_kms2 = document.getElementById('kms2').value;
  let select_estado2 = document.getElementById('estado2').value;
  let select_matricula3 = document.getElementById('mat3').value;
  let select_longitud = document.getElementById('longitud').value;
  let select_peso = document.getElementById('peso').value;


  crearCamion(select_marca2, select_modelo2, select_combustible2,select_kms2, select_estado2,select_matricula3, select_longitud, select_peso);
  alert("Camion añadido");
  console.log(vehiculo);
}
