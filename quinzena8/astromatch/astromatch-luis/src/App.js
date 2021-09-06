import React, {useState} from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"

const App = () => {
  //Renderização condicional
  // Estado que diz a tela atual 
  // função para mudar de tela (pode ser ternário)
  const [currentPage, setCurrentPage] = useState("home")

  const changePage = () => {
    if (currentPage === "home"){
      setCurrentPage("matches")
    } else {
      setCurrentPage("home")
    }
  }

    return(
      <div>
        {currentPage === "home" ? <HomePage /> : <MatchesPage />}{/* 
        <button onClick={changePage}>{currentPage === "home" ? "Ir para Matches" /button>
         */}</div>
    )
  }
export default App;

