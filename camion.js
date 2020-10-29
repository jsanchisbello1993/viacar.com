class Camion extends Vehiculo {
  constructor(marca, modelo,tipo_combustible, kms, estado,matricula, longitud, peso_máximo_admitido) {
    super(marca, modelo,tipo_combustible,kms,estado, matricula);
    this.longitud = longitud;
    this.peso_máximo_admitido = peso_máximo_admitido;
  }
}
