class Furgoneta extends Vehiculo{
  constructor(marca, modelo, tipo_combustible, kms,estado,matricula, capacidad, puerta_lateral){
    super(marca, modelo,tipo_combustible,kms,estado, matricula);
    this.capacidad = capacidad;
    this.puerta_lateral = puerta_lateral;

  }
}
