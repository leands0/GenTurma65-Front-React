import { useState } from "react";
import "./App.css";
import HomeComponents from "./paginas/homeComponents/homeComponents";
import HomeHooks from "./paginas/homeHooks/homeHooks";
import HomeRenders from "./paginas/homeRenders/homeRenders";


function App() {

  const[valor, setValor] = useState(0);
  function handleClick(){
    setValor(valor+1)
  }
  return (
    <>
    <HomeComponents title="Esse é o titulo" description="Essa é a descrição"/>
    <p>O valor é: {valor}</p>
    <button onClick={handleClick}>Clique em mim!</button>
    <HomeHooks/>
    <HomeRenders/>
    </>
  );
}

export default App;
