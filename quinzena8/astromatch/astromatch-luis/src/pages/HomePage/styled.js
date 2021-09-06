import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkslateblue;
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 80vh;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 40px;
    margin: 05px;
    background-color: aliceblue;
`
export const ProfileImage = styled.img`
    border: 0.5px darkgray solid;
    height: 400px;
    width: 400px;
    padding: 5px;
    margin: 5px;
    
`
export const ButtonsBar = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 1px ;
    border: 5px;
    background-color: aliceblue;
    width: 480px;
`
