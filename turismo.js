class Turismo extends Vehiculo{
  constructor(marca, modelo,tipo_combustible,kms,estado,numero_plazas,matricula) {
    super(marca, modelo,tipo_combustible,kms,estado,matricula);
    this.numero_plazas = numero_plazas;

  }

  modificarKms(nuevo_kms){
    this.kms = nuevo_kms;

  }

  agregarMarca(nueva_marca){
    this.marca = nueva_marca;
  }
  agregarModelo(nuevo_modelo){
    this.modelo = nuevo_modelo;
  }
  agregarCombustible(nuevo_combustible){
    this.tipo_combustible = nuevo_combustible;
  }
  agregarKms(nuevo_kms){
    this.kms = nuevo_kms;
  }
  agregarPlazas(nuevo_numero_plazas){
    this.numero_plazas = nuevo_numero_plazas;
  }
  agregarEstado(nuevo_estado){
    this.estado = nuevo_estado;
  }
}
