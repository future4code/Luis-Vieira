// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
let altura = prompt("Qual a altura do retângulo?")
let largura = prompt("Qual a largura do retângulo")

area = altura * largura
console.log(area)
} 

// Exercício 2
function imprimeIdade() {
let anoAtual = prompt("Em que ano estamos?")
let anoNascimento = prompt("Em que ano você nasceu?")

idade = anoAtual - anoNascimento
console.log(idade)
}

// Exercício 3
function calculaIMC() {
let pesoKg = prompt("Quantos Kg você pesa?")
let alturaMetros = prompt("Qual a sua altura? Em metros")

imc = ( pesoKg / (alturaMetros * alturaMetros ))
console.log(imc) 
}

// Exercício 4
function imprimeInformacoesUsuario() {
const nome = prompt("Qual seu nome?")
const idade = prompt("Qual a sua idade?")
const email = prompt("Qual seu email?")

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Qual a sua cor favorita?")
  let cor2 = prompt("Agora a segunda?")
  let cor3 = prompt("e a terceira?")

  cores = [cor1,cor2,cor3]
console.log(cores)

}

// Exercício 6
function retornaStringEmMaiuscula() {
let grito = prompt('Como você "grita" enquanto digita?')
console.log(grito)

const fraseMaiuscula = grito.toUpperCase()
console.log(fraseMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custo = prompt("Qual o custo total do espetáculo?")
  let valorIngresso = prompt("Por quanto os ingressos serão vendidos?")

  pontoDeEquilibio = custo/valorIngresso
  console.log(pontoDeEquilibio)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt("Fale alguma coisa...")
  let string2 = prompt("Diga outra coisa com a mesma quantidade de caracteres")

  console.log((string1.length) === (string2.length))
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let primeiraString = prompt("Diga algo")
  let segundaString  = prompt("Diga outra coisa")

  console.log(primeiraString.toLowerCase() === segundaString.toLowerCase())

}

// Exercício 10
function checaRenovacaoRG() {
let anoAtual = prompt("Em que ano estamos?")
let anoNascimento = prompt("Qual o ano do seu nascimento?")
let anoEmissaoRg = prompt("Em que ano sua RG foi emitida?")

const idade = anoAtual - anoNascimento
const checaRenovacaoRg = idade - anoEmissaoRg
 
console.log((idade <= 20 && checaRenovacaoRg >= 5)||(idade > 20 && idade <= 50 && checaRenovacaoRg >= 10)||(idade > 50 && checaRenovacaoRg >= 15))

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}