// Interpretação de Código
/*
1-
    a)Vai imprimir todas as informações dos usuários.
2-
    a)Vai imprimir somente os nomes dos usuários.
3-
    a)Vai imprimir os nomes excluindo "Chijo".7


//Escrita de Códigos

//1 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
 //const nomeDoguinhos = pets.map((item, index, array) => {
 //   return item.nome
 //})
 //console.log(nomeDoguinhos)
 
 //b)
 //const soSalsicha = pets.filter((salsicha) => {
 //    return salsicha.raca === "Salsicha"
 //   })
 //   console.log(soSalsicha)

 //c
 /*
 const soPoodle = pets.filter((poodle) => {
    return poodle.raca === "Poodle"
   })
   console.log(soPoodle)
  const promoPoodle = (inputNome , mensagem) => {
      if(inputNome === "Poodle"){
         
      }

      const mensagem = (nome) => {
          console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " ${nome} !")
      }
*/
//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
 const nomeProdutos = produtos.map((item, index, array) => {
       return item.nome
    })
    console.log(nomeProdutos)

//b)

//c)
const bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })
 console.log(bebidas)

 //d)
 const temYpe = produtos.filter((item, index, array) => {
    return (item.nome.includes("Ypê"))
 })
 console.log(temYpe)
 
 //e)
