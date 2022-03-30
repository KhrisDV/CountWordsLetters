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
      <h1>Texto</h1>
      <textarea onChange={changeTextHandler} value={text}></textarea>

      <Letras text={text} />

      <Palabras text={text} />
    </>
  );
}

export default App;
