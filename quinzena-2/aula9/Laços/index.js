// Aula Sobre Laços
/*
// WHILE

let contador = 0 //estado ou condição inicial
while (contador < 10) { //contador menor que 10
    console.log(contador)//imprimir o valor do contador
    contador = contador + 1
}
console.log("Contador é maior que 10")
//Jeito 1 -> declara o numeroUsuario com o primeiro valor
let numeroUsuario = Number(prompt("Insira um numero"))
let resultado = 0

while(numeroUsuario !== 0) {//condição de continuação
    resultado = resultado + numeroUsuario// ação a ser repetida
    numeroUsuario = Number(prompt("Insira um numero:"))// incremento
}
console.log("resultado", resultado)

//Jeito 2 -> declara o numeroUsuario sem valor e pede só dentro do Loop (NÃO FUNCIONA)
let numeroUsuario = Number(prompt("Insira um numero"))
let resultado = 0

while(numeroUsuario !== 100) {//condição de continuação
    numeroUsuario = Number(prompt("Insira um numero:"))// incremento -> ação de alterar o valor de numero
    resultado = resultado + numeroUsuario// ação a ser repetida
}
console.log("resultado", resultado)

//FOR
// Vai ser mais sucinto, vai fazer o laço em menos linhas)

let resultado = 0

for(let coxinhas = 0 ; coxinhas < 100; coxinhas += 10) {
    console.log("Quero comer mais coxinhas")
    resultado = coxinhas
}

console.log(`Comi ${resultado} coxinhas`)

// O Comando i++ soma o número com ele mesmo

const numeros = [1,2,3,4,5]

for (let i = 0; i < numeros.length; i++/) {
    console.log(numeros[i])
}

// Exercício 2 (ACHAR O ERRO NO QUE ESCREVI)

const numeros = [10, 354, 567, 238, 1239, 234, 2456]

function pegaMaior(arrayNumeros){
    let maiorNumero = 0
    
    for(let i = 0; i < arrayNumeros.lenght; i++){
        if(arrayNumeros[i] > maiorNumero) {
            maiorNumero = arrayNumeros[i]
        }
    }
    return maiorNumero
}

console.log(pegaMaior(numeros))

// FOR OF

const numeros = [10, 354, 567, 238, 1239, 234, 2456]

let maiorNumero = 0

for(let numero of numeros) {
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}

console.log(maiorNumero)
*/
