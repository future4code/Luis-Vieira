console.log("Boa Noite, Johnson!")
//Funções

/*
//Declaração
function somar(a, b) {// A função somar recebe os parâmetros a e b
    const soma = a + b
    return soma //retorna a soma de a + b
}


//Expressão de Função => Arrow function
const somar2 = (a, b) =>{
    const soma = a + b
    return soma
}

// Chamando a função
const resultado = somar(1, 2) //Chamando a função com argumentos 1 e 2
console.log(resultado) // resultado 3

const resultado2 = somar(12, 13) //Chamando a função com argumentos 12 e 13
console.log(resultado2) // resultado 25


//CallBack é uma função que recebe outra função como parâmetro

const verificaPar = (numero, imprimir) => {
    if(numero % 2 ===0){
        const resultado = numero / 2
        imprimir(resultado)
        //Chamar a função imprimir
    }
}

const imprimirMensagem = (valor) => {
    console.log("O resultado da sua conta é:", valor)
}

//o callback 
verificaPar(20, imprimirMensagem)

// Usar input antes dos parametros diminui a chance de bagunçar

//Exercicio 1
const verificaImpar = (inputNumero, inputImprimir) => { //Declarando uma função, verificar impar que recebe dois parametros: inputNumero (que é number) e inputImprimir (Que é um callback)
    if(inputNumero % 2 !== 0) { // verifica se o resto da divisão por 2 é diferente (!==) de 0
        inputImprimir()
        //Chamar a função imprimir
    } //se não for impar não faz nada
}
const numeroTeste = 21

verificaImpar(numeroTeste, () => { //parenteses abrindo a função
    console.log("Sim, "+ numeroTeste + " é impar!")
})//fecha a função

// Funções de Array

//Map - Significa Mapear, utilizamos pra criar um Novo Array baseado em informações do arrayOriginal

const numeros = [1,2,3,4,5,6,7,8,9]
//Quero Multiplicar todos os numeros por 5
console.log(numeros)

const numeros5x = (inputNumero) =>{
    return inputNumero * 5
}

const resultado = numeros.map(numeros5x)
console.log(resultado)
const comidas = ["Pastel", "Churrasco", "Sushi", "Pizza"]

const imprimirDados = (param1, param2, param3) => {
    console.log("param1", param1) // elemento que está sendo lido, sempre 1 de cada vez
    console.log("param2", param2) // indice do elemento que está sendo lido
    console.log("param3", param3) // array original
    
    return param1 * 2
}

const resultado = comidas.map(imprimirDados)

const resultadoCorrida = ["João", "André", "Marcos"]

const imprimirColocacoes = (inputNome, inputIndice) =>{
    const colocacao = inputIndice
    return `${colocacao + 1} - ${inputNome}`
}

const resultadoComColocacoes = resultadoCorrida.map(imprimirColocacoes)
console.log(resultadoComColocacoes)

//Exercício 2

const numeros = [10,11,12,13,14,15]

const resultadoTexto = numeros.map((numero, indice) => {
    return `O Elemento ${indice} é ${numero}`
    
})

console.log(resultadoTexto)

//Filter - Significa filtrar, é utilizado para criar um novo array retirando
//ou não alguns elementos do array

const numeros = [7,8,9,10,11,12,13]

const verificaMaiorDez = (inputNumero) => {
    if (inputNumero >= 10) {
        return true
    }else {
        return false
    }
}

const resultado = numeros.filter(verificaMaiorDez) // só vai apresentar o que for True
console.log(resultado)
*/
