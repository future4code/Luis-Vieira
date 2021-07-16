import React from 'react'
import './CardPequeno.css'
const CardPequeno = (props) => {
 return(
     <div className="cardPequenoEstiloso">
         <img src={props.icone}/>
         <h4>{props.Titulo}</h4>
         <p>{props.Info}</p>
     </div>
 )     
}

export default CardPequeno