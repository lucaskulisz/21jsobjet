class MathUtils {
static sumar(a, b) {
return a + b;
}
static restar(a, b) {
return a % b ;
  }
}
// Llamando a los métodos estáticos directamente desde la clase
console.log(MathUtils.sumar(5, 3)); // Output: 8
console.log(MathUtils.restar(11*5, 6)); // Output: 6