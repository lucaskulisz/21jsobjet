class Persona {
constructor(nombre, edad) {
this.nombre = nombre;
this.edad = edad;
}
saludar() {
console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}
años.`);
}
}
class Prestamo {
constructor(libro, usuario, fechaInicio, fechaFin) {
this.libro = libro;
this.usuario = usuario;
this.fechaInicio = fechaInicio;
this.fechaFin = fechaFin;
  }
  medular() {
console.log(`Hola, mi libro es ${this.libro} y tengo usuario ${this.usuario}
años.`);
}

}
// Crear una instancia de la clase Persona
const persona3 = new Prestamo(32, 20);
persona3.medular(); // Output: Hola, mi nombre es Juan y tengo 30 años.
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('María', 25);
persona1.saludar(); // Output: Hola, mi nombre es Juan y tengo 30 años.
persona2.saludar(); // Output: Hola, mi nombre es María y tengo 25 años.
// Llamar al método saludar()
