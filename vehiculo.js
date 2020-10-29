class Vehiculo{
  constructor(marca, modelo,tipo_combustible,kms,estado,matricula){
    this.marca = marca;
    this.modelo = modelo;
    this.tipo_combustible = tipo_combustible;
    this.kms = kms;
    this.estado = estado;
    this.matricula = matricula;
  }
  modificarKms(nuevo_kms){
    this.kms = nuevo_kms;
}
  modificarEstado(nuevo_estado){
    this.estado = nuevo_estado;
  }

}
