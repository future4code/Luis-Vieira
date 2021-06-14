/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 * */
 
console.log("Bem vindo ao jogo de Blackjack!")

const carta1 = comprarCarta()
const carta2 = comprarCarta()
const dealer1 = comprarCarta()
const dealer2 = comprarCarta()
let usuario = carta1.valor + carta2.valor
let computador = dealer1.valor + dealer2.valor
let maoUsuario = (`Usuário - cartas ${carta1.texto} ${carta2.texto} - Pontuação ${usuario}`)
let maoComputador = (`Computador - cartas ${dealer1.texto} ${dealer2.texto} - Pontuação ${computador}`)

if (confirm("Quer iniciar uma nova rodada?")) {
   novaRodada()
   console.log(resultadoRodada)

} else {
   console.log("O Jogo Acabou! :(")
}
// testando Função Rodada
function novaRodada(){
   console.log(maoUsuario)
   console.log(maoComputador)
}

function resultadoRodada(){
  if (maoUsuario == maoComputador){
      return("Empate")
   } else if (maoUsuario > maoComputador){
      return("O Usuário ganhou!")
   } else (maoUsuario < maoComputador)
      return("O computador ganhou!")

}