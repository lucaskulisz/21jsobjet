/* // Crear el objeto "persona"
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar"
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}. Tengo ${this.edad} años, vivo en ${this.ciudad} y soy ${this.profesion}.`);
  console.log(`Hola, soy ${persona.nombre}. Tengo ${persona.edad} años, vivo en ${persona.ciudad} y soy ${persona.profesion}.`);

  },
};

// Llamar al método "saludar"
persona.saludar();
 */
// Crear el objeto "persona"
/* const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar" usando función de flecha
  saludar: () => {
    console.log(`Hola, soy ${persona.nombre}. Tengo ${persona.edad} años, vivo en ${persona.ciudad} y soy ${persona.profesion}.`);
  console.log(`Hola, soy ${this.nombre}. Tengo ${this.edad} años, vivo en ${this.ciudad} y soy ${this.profesion}.`);
  },
};

// Llamar al método "saludar"
persona.saludar();
............. */
// Crear el objeto "persona"
/* const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar" usando función de flecha
  
}
function saludar() {
    console.log(`Hola, soy ${persona.nombre}. Tengo ${persona.edad} años, vivo en ${persona.ciudad} y soy ${persona.profesion}.`);
  }
// Llamar al método "saludar"
saludar(); */

// Crear el objeto "persona"
/* const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar" usando desestructuración de objetos
  saludar() {
    const { nombre, edad, ciudad, profesion } = this;
    console.log(`Hola, soy ${nombre}. Tengo ${edad} años, vivo en ${ciudad} y soy ${profesion}.`);
  },
};

// Llamar al método "saludar"
persona.saludar();
.......... */
// Crear el objeto "persona"
/* const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar" usando template literals
  saludar() {
    console.log(`Hola, soy ${this.nombre}. Tengo ${this.edad} años, vivo en ${this.ciudad} y soy ${this.profesion}.`);
    console.log(`Hola, soy ${persona.nombre}. Tengo ${persona.edad} años, vivo en ${this.ciudad} y soy ${this.profesion}.`);
  },
};
///para el this tiene que estar adentro del objeto
// Llamar al método "saludar"
persona.saludar();
//////////// */
// Crear el objeto "persona"
/* const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar" usando concat()
  saludar() {
    const saludo = "Hola, soy ".concat(this.nombre, ". Tengo ", this.edad, " años, vivo en ", this.ciudad, " y soy ", this.profesion, ".");
    console.log(saludo);
  },
};

// Llamar al método "saludar"
persona.saludar();
,,,,,,,,,, */
// Crear el objeto "persona"
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
  // Método "saludar" usando el operador de suma
  saludar() {
    const saludo = "Hola, soy " + persona.nombre + ". Tengo " + this.edad + " años, vivo en " + this.ciudad + " y soy " + this.profesion + ".";
    console.log(saludo);
  },
};

// Llamar al método "saludar"
persona.saludar();
