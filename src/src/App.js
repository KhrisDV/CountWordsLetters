import { useState } from "react";
import "./App.css";
import Letras from "./Components/Letras/Letras.jsx";
import Palabras from "./Components/Palabras/Palabras.jsx";

function App() {
  const [text, setText] = useState("");

  function changeTextHandler(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div id="maincontainer">
        <h1>Contador de letras y palabras</h1>
        <textarea id="areatext" onChange={changeTextHandler} value={text} />
        <div id="contadores">
          <div id="contletras">
            <Letras text={text} />
          </div>
          <div id="contpalabras">
            <Palabras text={text} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
