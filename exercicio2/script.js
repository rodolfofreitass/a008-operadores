const numero1 = Number (prompt("Insira um número"))
const numero2 = Number (prompt("Insira outro número"))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 == numero2)
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) == 0)
console.log("O segundo número é divisível pelo primeiro?", (numero2 % numero1) == 0)

