import React from "react"

function p1DadosGerais() {
  return (
    <form>
    <div>
        <label for="nome">1 - Qual o seu nome?</label>
        <input type="text" id="nome" />
    </div>
    <div>
        <label for="idade">2 - Qual a sua idade?</label>
        <input type="number" id="idade" />
    </div>
    <div>
        <label for="email">3 - Qual seu E-mail?</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label for="escolaridade">4 - Qual sua escolaridade?</label>
        <textarea id="msg"></textarea>
    </div>
</form>
  );
}

export default p1DadosGerais;