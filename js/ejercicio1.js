let num1 = 5;
let num2 = 10;

function sumar(a, b) {
    return a + b;
}

console.log("La suma es: " + sumar(num1, num2));

function restar(a, b) {
    return a - b;
}  

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

console.log("La resta es: " + restar(num1, num2));
console.log("La multiplicación es: " + multiplicar(num1, num2));
console.log("La división es: " + dividir(num1, num2));