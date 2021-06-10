console.log("Boa noite, família!")

// Revisão de Comparadores

// const num1 = 10
// const num2 = 30
// const num3 = 40
// const num4 = "10"

// console.log(num1 === num2) // 10 igual 30 -> false
// console.log(num2 > num3) // 30 é maior que 40 -> false
// console.log(num3 <= num1) // 40 menor ou igual a 10 -> false
// console.log(num1 !== num4) // 10 é diferente de "10" -> true, pois diferentes em tipo


// const palavra1 = "abobrinha"
// const palavra2 = "maçã"

// console.log(palavra1 === palavra2) // abobrinha é igual a maçã -> false
// console.log(palavra1 !== palavra2) // abobrinha é diferente de maçã -> true
// console.log(palavra2.length > palavra1.length) // maçã tem mais letras que abobrinha -> false
// console.log(palavra1.length <= palavra2.length) // abobrinha tem menos ou mesmo número de letras que maçã -> false


// if / else

// const condicao1 = true
// const condicao2 = false

// if (condicao1) { // true, então entra e lê o console.log
// const variavelDentroCondicao = "oi" // escopo local
//   console.log("Condição 1 é verdadeira")
// }
// console.log(variavelDentroCondicao)

// if (condicao2) {// false, então passa batido
//   console.log("Condição 2 é verdadeira")
// }


// if (palavra1 === palavra2) { // false, então passa batido
//   console.log(`${palavra1} é igual a ${palavra2}`)
// }

// if (palavra1 !== palavra2) { // true, então entra e lê o console.log
//   console.log(`${palavra1} é diferente de ${palavra2}`)
// }


// Exercício 1

// function compararNumeros1(num1, num2) {
//   if (num1 === num2) {
//     return "Sucesso! São iguais"
//   }
// }

// const numero1 = Number(prompt("Insira o primeiro número:"))
// const numero2 = Number(prompt("Insira o segundo número:"))

// console.log(compararNumeros1(numero1, numero2))


// // Exercício 2

// function compararNumeros2(num1, num2) {
//   if (num1 === num2) {
//     return "Sucesso! São iguais"
//   } else {
//     return "Vish, são diferentes"
//   }
// }

const numero1 = Number(prompt("Insira o primeiro número:"))
const numero2 = Number(prompt("Insira o segundo número:"))

// console.log(compararNumeros2(numero1, numero2))


// // Árvore de condições

// const idadeMae = 57
// const idadePai = 54

// if (idadePai === idadeMae) {
//   console.log("Ambos têm a mesma idade")
// } else if (idadePai > idadeMae) {
//   console.log("O pai é mais velho")
// } else {
//   console.log("A mãe é mais velha")
// }

// Exercício 3

// function compararNumeros3(num1, num2) {
//   if (num1 === num2) {
//     return `num1:${num1} é igual a num2:${num2}`
//   } else if (num1 > num2) {
//     return `num1:${num1} é maior que num2:${num2}`
//   } else {
//     return `num1:${num1} é menor que num2:${num2}`
//   }
// }

// const numero1 = Number(prompt("Insira o primeiro número:"))
// const numero2 = Number(prompt("Insira o segundo número:"))

// console.log(compararNumeros3(numero1, numero2))

// Switch Case

// const paisDeOrigem = prompt("Onde você nasceu?")

// switch (paisDeOrigem.toLowerCase()) {
//   case "brasil":
//     console.log("brasileiro")
//     break
//   case "eua":
//     console.log("norte americano")
//     break
//   case "inglaterra":
//   case "reino unido": // OU
//     console.log("inglês")
//     break
//   default:
//     console.log("Cidadania não identificada")
//     break
// }

// Exercício 4

// const pokemon = prompt("Escolha seu pokemon inicial (Bulbassauro, Charmander, Squirtle):")

// switch (pokemon) {
//   case "Bulbassauro":
//     console.log("Tipo Planta e Veneno")
//     break
//   case "Charmander":
//     console.log("Tipo Fogo")
//     break
//   case "Squirtle":
//     console.log("Tipo Água")
//     break
//   default:
//     console.log("Por favor, escolha um pokemon entre Bulbassauro, Charmander, Squirtle")
//     break
// }

// Exercício 5

const ensinoMedio = prompt("Concluiu o ensino médio?").toLowerCase() === "sim" // quando o usuário inserir sim, eu salvo true na variável
const maiorIdade = prompt("Tem 18 anos ou mais?").toLowerCase() === "sim"
const cursandoOutraFaculdade = prompt("Está cursando outra faculdade?").toLowerCase() === "sim"

function podeEntrarFaculdade(passouEnsinoMedio, ehMaiorIdade, estaCursandoOutraFaculdade) {
  if (passouEnsinoMedio && ehMaiorIdade && !estaCursandoOutraFaculdade) {
    return "Pode se matricular" // sim, sim, não
  } else {
    return "Não pode se matricular"
  }
}

console.log(podeEntrarFaculdade(ensinoMedio, maiorIdade, cursandoOutraFaculdade))

