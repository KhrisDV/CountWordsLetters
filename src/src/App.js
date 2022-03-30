import { useState } from "react";
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
    </>
  );
}

export default App;
