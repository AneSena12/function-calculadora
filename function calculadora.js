function calculadora (numero1, numero2, operacao) {

if(operacao === "soma") {
    return numero1 + numero2
} else if(operacao === "subtracao") {
    return numero1 - numero2
} else if(operacao === "multiplicacao") {
    return numero1 * numero2
} else if(operacao === "divisao") {
    return numero1 / numero2
} else {
    return 0
}

}

let numero1 = Number(prompt("Digite o primeiro número"))
let numero2 = Number(prompt("Digite o segundo número"))
let operacao = prompt("Digite a operação")
const resultado = calculadora(numero1, numero2, operacao)

console.log (resultado)