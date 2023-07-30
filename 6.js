class Persona {
constructor(nombre, edad) {
this.nombre = nombre;
this._edad = edad;
}
get edad() {
return this._edad;
}
set edad(nuevaEdad) {
if (nuevaEdad > 0) {
this._edad = nuevaEdad;
}
}
}
const persona = new Persona('Juan', 30);
console.log(persona.edad); // Output: 30
persona.edad = 35;
console.log(persona.edad); // Output: 35
persona.edad = -5; // No se permiten valores negativos
console.log(persona.edad); // Output: 35