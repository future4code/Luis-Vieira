import React, {useState, useEffect} from "react"
import { HomeContainer, Profile, ProfileImage, header, ButtonsBar } from "./styled"
import axios from "axios"

export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luis-vieira-johnson/person"
   
   useEffect(() => {
       getProfile()
   },[]) 

    const getProfile = () =>{
        axios.get(url)
        .then((resposta) => {
            setProfile(resposta.data.profile)
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    }

    const choosePerson = () => {
        console.log("O Botão funfou")
    }

    return(
        <HomeContainer>
            
            
                {!profile ? <div>Acabaram os perfis! Aperte o botão de limpar</div> :
            <Profile>
             <ButtonsBar>
                <button>Lista Matches</button>
                <h3>Logo astroMatch</h3>
                <button>HomePage</button>
             </ButtonsBar>
                
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <ButtonsBar>
                    <button onClick={() => choosePerson(true)}>❌ Méhh</button>
                    <button onClick={() => choosePerson(false)}>❤ Crush</button>
                </ButtonsBar>
                
            </Profile>
            }
        </HomeContainer>
    )
}
