import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkslateblue;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 40px;
    margin: 05px;
    background-color: aliceblue;
`
export const ProfileImage = styled.img`
    border: 0.5px darkgray solid;
    height: 300px;
    width: 300px;
    padding: 5px;
    margin: 5px;
    
`
export const ButtonsBar = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px ;
    border: 5px;
    border-radius: 50px;
    background-color: aliceblue;
    width: 480px;
`
export const ButtonStyle = styled.button`
    background-color: aliceblue;
    border-radius: 1px ;
    border: 0px ;
    :hover{
        background-color: rgba(0,0,0,0.3);
    }
`