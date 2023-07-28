function calculadora (numero1, numero2, operacao) {

if(operacao === 1) {
    return numero1 + numero2
} else if(operacao === 2) {
    return numero1 - numero2
} else if(operacao === 3) {
    return numero1 * numero2
} else if(operacao === 4) {
    return numero1 / numero2
} else {
    return 0
}

}

let numero1 = Number(prompt("Digite o primeiro número"))
let numero2 = Number(prompt("Digite o segundo número"))
let operacao = prompt("Digite o número referente a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. Divisão:")
const resultado = calculadora(numero1, numero2, operacao)

console.log (resultado)
