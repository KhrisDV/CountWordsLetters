import { useState } from "react";
import Letras from "./Components/Letras/Letras.jsx";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function changeTextHandler(event) {
    setText(event.target.value);
  }

  return (
    <>
      <h1>Texto</h1>
      <textarea onChange={changeTextHandler} value={text}></textarea>
      <p>
        <Letras text={text} />
      </p>
    </>
  );
}

export default App;
