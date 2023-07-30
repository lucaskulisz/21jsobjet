class Circulo {
  constructor(radio) {
    this._radio = radio;
  }

  // Getter y Setter del radio
  get radio() {
    return this._radio;
  }

  set radio(nuevoRadio) {
    if (nuevoRadio > 0) {
      this._radio = nuevoRadio;
    } else {
      console.error("Error: El radio debe ser un valor positivo.");
    }
  }

  // Getter del área
  get area() {
    return Math.PI * this._radio ** 2;
  }

  // Getter de la circunferencia
  get circunferencia() {
    return 2 * Math.PI * this._radio;
  }
}

// Crear una instancia de la clase Circulo
const miCirculo = new Circulo(5);

// Mostrar el radio, área y circunferencia inicial del círculo
console.log("Radio inicial:", miCirculo.radio);
console.log("Área inicial:", miCirculo.area);
console.log("Circunferencia inicial:", miCirculo.circunferencia);

// Cambiar el radio utilizando el setter
miCirculo.radio = 8;

// Mostrar el radio, área y circunferencia con el nuevo valor del radio
console.log("Radio con nuevo valor:", miCirculo.radio);
console.log("Área con nuevo valor:", miCirculo.area);
console.log("Circunferencia con nuevo valor:", miCirculo.circunferencia);

miCirculo.radio = -3;

// Mostrar el radio, área y circunferencia con el nuevo valor del radio

