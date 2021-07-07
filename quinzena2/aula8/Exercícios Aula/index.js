/*const palavra1 = "abobrinha"
const palavra2 = "Mação"


//if / else

const condicao1 = true

if (condicao1) {
    console.log("Condição 1 é verdadeira")
}
const condicao2 = false

if (condicao2) {
    console.log("Condição 2 é Verdadeira")
}

function copararNumeros1(palavra1, palavra2)
*/

//Exercicio 3

/*const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira outro número"))

function compararNumeros3(num1, num2){
    if (num1 === num2) {
    return "Acertô mIZERAVI"
}   else if (num1 > num2) {
    return "O num1 é Maior que o num2"
}   else {
    return("O num1 é menor que o num2")
    }
}

console.log((compararNumeros3)(numero1, numero2))*/

// Switch Case

/*const paisDeOrigem = prompt("Onde você nasceu?")
switch (paisDeOrigem) {
    case "Brasil":
        console.log("Brasileiro")
        break
    case "EUA":
        console.log("Norte Americano")
        break
    case "Inglaterra":
        console.log("Inglês")
        break
    default:
        console.log("Nacionalidade Não encontrada")
        break    
    }
    */

    //Exercício 4 

    /*const pokemon = prompt("Escolha se pokemon inicial (Bulbassauro, Charmander, Squirtle):")

    switch (pokemon) {
    case "Bulbassauro":
        console.log("Tipo Planta e Veneno")
        break
    case "Charmander":
        console.log("Tipo Fogo")
        break
    case "Squirtle":
        console.log("Tipo Àgua")
        break
        default:
        console.log("Escolha entre Bulbassauro, Squirtle ou Charmander")
        break
    
    }
    */

    //Exercício 5

    const ensinoMedio = prompt("Concluiu o ensino médio?").toLocaleLowerCase === "sim"
    const maiorDeIdade = prompt("Tem 18 anos ou mais").toLocaleLowerCase === "sim"
    const cursandoOutraFaculdade = prompt("Está Cursando outra Faculdade?").toLocaleLowerCase === "sim"

    function podeEntrarFaculdade(passouEnsinoMedio, ehMaiorIdade, estaCursandoOutraFaculdade) {
        if (passouEnsinoMedio && ehMaiorIdade && !estaCursandoOutraFaculdade) {
            return "Pode se Matricular"
        }   else {
            return "Não pode se matricular"
        }
    }

    console.log(podeEntrarFaculdade(ensinoMedio, maiorDeIdade, cursandoOutraFaculdade))