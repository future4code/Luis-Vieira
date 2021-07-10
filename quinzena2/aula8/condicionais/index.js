//Exercícios de Interpretação de Códigos

/*
#Questão 1
a-) O Código pede ao usuário para escolher um número,
cria uma const com o nome de numero para guardar a resposta
e informa que se trata de um número. O Teste realizado é
para saber se o número é divisível por 2.

b-) Irá imprimir "Passou no teste" para qualquer número que seja par . 

c-) irá imprimir "Não passou no teste" para qualquer numero Impar .

#Questão 2

a-) O Código serve para informar o preço de alguns itens do mercado.

b-) O preço da fruta, Maçã é R$ 2.25.

c-) O preço da fruta, Pêra é R$ 5.5
    5

#Questão 3

a-) Criando uma pergunta para o usuário, criando uma const chamada numero
com essa resposta e informando que ela é do tipo Number.

b-) para o Número 10 a mensagem será "Esse número passou no teste".
Para -10 nada irá acontecer pois não tem uma resposta para números que não
sejam maiores que 0.

c-)Sim. O console.log(mensagem) está no escopo geral e a variável mensagem 
só existe dentro do bloco if ou seja, a informação está com o acesso limitado
a quem está dentro desse escopo.

*/

// Exercício de Escrita de Código

//#Questão 1 

//a-)
/*const idadeDoUsuario = prompt("Qual a sua idade?")
const idade = Number(idadeDoUsuario)

console.log(idade)
const maiorDeIdade = 18

function podeDirigir(idade, maiorDeIdade){
    if (idade >= maiorDeIdade) {
    return "Você pode dirigir"
}   else {
    return("Você não pode dirigir")
    }
}

console.log((podeDirigir)(idade, maiorDeIdade))


//b-)
const selecionaTurno = prompt("Selecione seu turno: M para matutino, V para Vespertino) ou N para Noturno").toLocaleUpperCase()


function ola(resposta1){
    if (resposta1 === "M") {
    return "Bom Dia!"
    }else if (resposta1 === "V") {
    return "Boa Tarde!"
    }else {
    return("Boa Noite!")
    }
}

console.log(ola(selecionaTurno))

//c-)
const turnoAluno = prompt("Selecione seu turno: M para matutino,  V para Vespertino) ou N para Noturno")

switch (turnoAluno.toUpperCase()){
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Utilize as iniciais indicadas!")
        break
}

*/
//d-)
const generoFilme = prompt("Qual gênero de filme você prefere: fantasia, ação ou comédia")
const valorIngresso = prompt("Quanto custa o ingresso?")

    if(generoFilme == "fantasia" && valorIngresso<=15) {
        console.log("Bom Filme!")
    }else {
        console.log("Escolha outro filme!")
    }