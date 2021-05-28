/*Exerciocio de Interpretação de Código
1- a- undefined
   b- null
   c- 10
   d- 3
   e- [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   f- 9

2- O comando inicial cria uma ação do usuário: "Digite uma frase"
o comando console.log toUpperCase troca todas as letras para maiúscula
e o replace all vai trocar as letras A por I e depois retornar o tamanho da string
A Frase ficará "Subi num ônibus em Mirrocos" e tera 27 caracteres
*/
/* Exercício de Escrita de Código
//1
const nome = prompt("Qual o seu nome?")
const email = prompt("Digite um email válido")

const boasVindas = `O email ${email} foi cadastrado com sucesso
Seja bem-vinda(o) ${nome}!`
console.log(boasVindas)*/

//2
/*const comidasFavoritas = ["Sanduíche", "Chocolate", "Queijo", "Bolo", "Bacon"]
console.log(comidasFavoritas)

let comidasFavoritas2 = comidasFavoritas.toString
console.log(comidasFavoritas2)

(comidasFavoritas2.replaceall("," , "/n"))
console.log(comidasFavoritas2)*/

//3
const listaDeTarefas =[]
const tarefa1 = prompt("Qual a primeira tarefa do seu dia?")
console.log(tarefa1)

listaDeTarefas.push(tarefa1)
console.log(listaDeTarefas)

const tarefa2 = prompt("Qual a Segunda tarefa do seu dia?")
console.log(tarefa2)

listaDeTarefas.push(tarefa2)
console.log(listaDeTarefas)

const tarefa3 = prompt("Qual a Terceira tarefa do seu dia?")
console.log(tarefa3)

listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

const tarefaRealizada = prompt ('Insira o número da tarefa que realizou:  1,2 ou 3')
listaDeTarefas.pop(tarefaRealizada)
console.log(listaDeTarefas)