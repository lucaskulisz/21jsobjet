// Definición de la superclase Animal
class Animal {
constructor(nombre) {
this.nombre = nombre;
}
hacerSonido() {
return "Haciendo sonidos genéricos";
}
}
// Definición de la subclase Perro que extiende Animal
class Perro extends Animal {
constructor(nombre, raza) {
    super(nombre); // Llamamos al constructor de la superclase usando

this.raza = raza;
}
hacerSonido() {
return "Guau, guau!";
}
moverCola() {
return "Moviendo la cola felizmente";
}
}
// Creación de una instancia de la subclase Perro
const miPerro = new Perro("Firulais", "Labrador");
const miGato = new Animal("Javi");
// Llamando a los métodos de la subclase y superclase
console.log(miGato.nombre); // Salida: "Firulais"
// Llamando a los métodos de la subclase y superclase
console.log(miPerro.nombre); // Salida: "Firulais"
console.log(miPerro.raza); // Salida: "Labrador"
console.log(miPerro.hacerSonido()); // Salida: "Guau, guau!"
console.log(miPerro.moverCola()); // Salida: "Moviendo la cola felizmente"