import React, {useState, useEffect} from "react"
import { HomeContainer, Profile, ProfileImage, header, ButtonsBar, ButtonStyle } from "./styled"
import axios from "axios"

export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luis-vieira-johnson"
   
   useEffect(() => {
       getProfile()
   },[]) 

    const getProfile = () =>{
        axios.get(url + "/person")
        .then((response) => {
            setProfile(response.data.profile)
        })
        .catch((error) => {
            console.log(error.response)

        })
    }

    const choosePerson = (escolha) => {
      
        const body = {
            "id": profile.id ,
            "choice": escolha
        }
      
        axios.post(url + "/choose-person", body)
        .then((response) => {
            getProfile(response.data.profile)
    
        })

    }

    return(
        <HomeContainer>
 
            
            
                {!profile ? <div>Acabaram os perfis! Aperte o botão de limpar</div> :
            <Profile>
             <ButtonsBar>
                <button>Lista Matches</button>
                <h3>Logo astroMatch</h3>
                <ButtonStyle>HomePage</ButtonStyle>
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
