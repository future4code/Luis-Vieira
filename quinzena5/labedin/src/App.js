import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= 'https://drive.google.com/file/d/1FhWAwZEReYhlF7GbzK6M4I66fLzqi-qt/view?usp=sharing' 
          nome="Luis Alves" 
          descricao="Olá, eu sou o Luis. Sou aluno da turma Johnson de frontend da Labenu. Tenho 33 anos, três filhos: Marina (12 anos), Isabeli (9 anos) e Miguel (7 anos).
          moro atualmente em Brasília com minha namorada Amanda, gosto de correr, assistir filmes e séries e jogos de tabuleiro. Sou muito timido até tomar confiança
        , depois de ficar á vontade me comunico muito bem e gosto de ajudar as pessoas com qualque que seja a dificuldade"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
          icone= 'https://drive.google.com/file/d/1VtISnr6V9s9O1zbIa5oDfY9Zm1MBkC8H/view?usp=sharing'
          Titulo="E-mail: "
          Info="luis.alvesvieira09@gmail.com"
      />
     <CardPequeno
          icone= ''
          Titulo="Endereço: "
          Info="QMSW 04 Lt 04 - Edificio Monte Olimpo"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
