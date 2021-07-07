//Revisão do Material de JS Aula 05
/*
Temos 3 maneiras para declarar uma string
const olaMundoAspasDuplas = "Ola Mundo"
const olaMundoAspasSimples = 'Olá mundo'
const olaMundoTemplateString = `Ola Mundo`

//todas elas vão imprimir ola mundo no console
*/
/*Concatenação de strings -> È como nós juntamos as strings para formar uma nova
como uma soma de strings, assim podemos realizar por exemplo frases personalizadas.
*/
/*
const nome = "Luis"
const idade = 33
const dadosUsuario = "Meu nome é " + nome + " e tenho " + idade + " anos" 
//È necessário colocar os espaços dentro das aspas para que as palavras fiquem separadas
//dentro do console.

console.log(dadosUsuario) //Imprimir dadosUsuario no console.
*/

/*Template Strings -> A template é a única que nos permite colocar variaveis no meio da string.

const nome = "Amanda"
const idade = 27
const dadosUsuarioTs = `Meu nome é ${nome} e tenho ${idade} anos`

console.log(dadosUsuarioTs) // Imprime no console -> Meu nome é Amanda e tenho 27 anos
*/
/*Exercício 01 ->Crie um programa que peça para o usuário inserir o seu
nome e sua cor favorita e imprima a mensagem: "A cor
favorita de FULANO é COR"
Faça o exercício duas vezes, utilizando template strings e
concatenação
*/
/*Resposta

let nomeUsuario = prompt("Qual seu nome?")
let corFavorita = prompt("Qual sua cor favorita?")
const frase = "A cor favorita do " + nomeUsuario + " é " + corFavorita

console.log(frase)
console.log(`A cor favorita de ${nomeUsuario} é ${corFavorita}!`)
*/
/*Protótipo de Strings -> O Js fornece algumas informações (propriedades) e ações (métodos)
//que podemos aplicar em uma string
*/
//Propriedade Length -> vai nos retornar qual o tamanho da string em questão incluindo os espaços
//Exemplo 1:
//const nome = "Amanda Pinho"

//console.log(nome.length) // Irá imprimir 12 (6 do nome amanda, 5 do nome pinho e 1 do espaço)

//Método toLowerCase() transforma todas as letras da string em minuscula e toUpperCase() em maiúscula.
//Exemplo 2:
/* const frase = "MuAHhaahahhahahahHAHAHAHAHA"
const fraseMinuscula = frase.toLocaleLowerCase()
const fraseMaiuscula = frase.toLocaleUpperCase()
 */
//console.log(fraseMaiuscula, fraseMinuscula)

//Método trim() -> vai retirar todos os espaços que existem antes e depois da string.

// Exemplo 3:
/* const email = " luiscesaralves@gmail.com "
console.log(email.length) // vai somar 27 caracteres por conta do espaço antes e depois

const emailTrim = email.trim()
console.log(emailTrim.length) //vai somar 24 pois o metodo trim cortou os espaços */

//Método includes -> determina se um conjunto de caracteres esta incluído dentro da string, 
//sempre retorna um boleano (true or false)

/* const frase = "Hoje comi cenoura"

frase.includes("cenoura") // true
frase.includes("batata") // false

console.log(frase) */

//Método replaceAll -> troca todas as ocorrências de um conjunto de caracteres (coisa1)  por
//alguma outra coisa (coisa2)

/* const frase = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura", "batata")

console.log(novaFrase) // irá imprimir "hoje comi batata, adoro batata" */

/* Exercício 2 -> Peça para o usuário escrever uma frase e imprima no console
a frase alterada, com:
● Todas as letras maiúsculas
● Na língua do i (substituindo todas as vogais por i)
Retorne também o tamanho da frase. */

//Resposta
/* const frase = prompt("Digite qualquer frase")

//console.log(frase.toUpperCase())
const fraseSemA = frase.replaceAll("a", "i")
const fraseSemAe = fraseSemA.replaceAll("e", "i")
const fraseSemAeo = fraseSemAe.replaceAll("o", "i")
const fraseSemAeou = fraseSemAeo.replaceAll("u", "i")

//Frase testada -> ma me mi mo mu
console.log(fraseSemAeou) //Retornou mi mi mi mi mi
console.log(fraseSemAeou.length) //14 caracteres */

/* //Arrays -> São listas de elementos, usamos colchetes para agrupar os elementos.
//esses elementos podem ser do mesmo tipo 1 e 2 ou de tipos diferentes.

const arrayDeStrings = ["batata", "alface", "queijo"]
const arrayDeNumbers = [6, 13, 26, 35, 41, 60]
const arrayMisto = ["Bananinha", 15, true]

//Acessamos um item dentro do Array pela posição dele, ATENÇÂO nos arrays o indice 
//começa no zero.

const segundoItem = arrayDeStrings[1] //Alface
console.log(segundoItem) //para imprimir a resposta
 */
/* //Exercício 3
● Crie um array com pelo menos 5 raças de cachorro
● Peça para o usuário inserir um número de 1 a 5
● Imprima no console a raça correspondente à posição
escolhida pelo usuário */

//Resposta
/* let arrayCachorros = ["Poodle", "Labrador", "PitBull", "Rotweiler", "Pincher"]
const escolhaUmNumero = prompt("Escolha um numero de 1 a 5")
const racaSorteada = arrayCachorros[escolhaUmNumero-1]

console.log(racaSorteada) */

//Protótipo de Array-> O Js fornece algumas informações (propriedades) e ações (métodos)
//que podemos aplicar em uma array

//Propriedade Length -> assim como na string realiza uma contagem, mas aqui ele contabiliza
//a quantidade de itens do array.

/* const filhos = ["Marina", "Isabeli", "Miguel"]
const quantidadeFilhos = filhos.length //3

console.log(`Parabens Luis você tem ${quantidadeFilhos} filhos`)

//Método Push -> adiciona um ou mais elementos em uma array

const tamanhoFamilia = filhos.push("Amanda","Luis")
console.log(`Sua familia tem ${tamanhoFamilia} membros`)

//Método pop -> retira o último elemento de uma array

filhos.pop() //Retirou Luis que era o ultimo, Amanda virou o ultimo elemento
filhos.pop() //Retitou Amanda que era o ultimo
console.log(filhos)

//Método Includes -> determina se um array tem um determinado conteúdo com um boleano.

console.log(filhos.includes("Marina"))
console.log(filhos.includes("Luis")) */

//Método Splice -> remove um elemento n a partir da posição i 
// Sintaxe: splice(i,n)
/* 
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
console.log(letras.splice(2,1))//Retira o elemento a partir do indice 2 ("C")
// logo se é 1 a partir dele será removido a letra "C" */

//Exercìcio 4
/* Para este exercício, comece criando um array com os
valores: 1, 2, 3, 4, 5 e 6.
1. Determine o tamanho do array
2. Adicione o número 7
3. Remova os números 4 e 5
4. Determine o novo tamanho do array */

/* const arrayNumeros = [1,2,3,4,5,6]
console.log(arrayNumeros.length)

arrayNumeros.push(7)
console.log(arrayNumeros.length)

arrayNumeros.splice(3,1)
console.log(arrayNumeros)
arrayNumeros.splice(3,1)
console.log(arrayNumeros)

console.log(arrayNumeros)
console.log(arrayNumeros.length) */


// Exercícios de Interpretação de Código

/*
1-

a. Undefined 
b. null
c. 11
d. 3
e. não entendi ainda. (Perguntar para Bruno)
f. 9

2- Qual será o valor impresso no console se a entrada do usuário for:
"Subi num ônibus em Marrocos"?

R- "SUBI NUM ONIBUS EM MIRROCOS" 27

*/

console.log("Exercícío de Escrita de Código")

/*
1-Faça um programa que pergunte ao usuário seu nome e seu e-mail.
Em seguida, imprima na tela a seguinte mensagem:

const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja 
bem-vinda(o), ${nome}`)
*/

/*
2-
*/
//a-)
const comidas = ["Pudim", "Chocolate", "Sorvete", "Sushi", "Hamburguer"]
console.log(comidas)

//b-)
console.log("Essas são as minhas comidas preferidas:")
console.log(`1º ${comidas[0]}`)
console.log(`2º ${comidas[1]}`)
console.log(`3º ${comidas[2]}`)
console.log(`4º ${comidas[3]}`)
console.log(`5º ${comidas[4]}`)

//c-)
let comidaUsuario = prompt("Qual a sua comida favorita?")

comidas.splice(1,1)
console.log(comidas)
comidas.push(comidaUsuario)
console.log(comidas)

/*
3-
//a-)
let listaDeTarefas = []

//b-)
const tarefa1 = prompt("Qual sua primeira tarefa do dia?")
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt("Qual sua Segunda tarefa do dia?")
listaDeTarefas.push(tarefa2)
const tarefa3 = prompt("Qual sua Terceira tarefa do dia?")
listaDeTarefas.push(tarefa3)

//c-)
console.log(listaDeTarefas)

//d-)
const tarefaRealizada = prompt("Digite o idice de uma tarefa que você já realizou:1,2 ou 3")

//e-)
retiraTarefa = tarefaRealizada-1
listaDeTarefas.splice(retiraTarefa,1)

//f-)
console.log(`Você ainda precisa: ${listaDeTarefas[0]} e ${listaDeTarefas[1]}, Agiliza ;)`)

*/
/*
Desafio

//1-)
let frase = [prompt("digite 5 alimentos")]
console.log(frase)
*/

