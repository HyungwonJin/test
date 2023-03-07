import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [text, setText] = useState("Change to blue");
  const newText =
    text === "Change to blue" ? "Change to red" : "Change to blue";
  const handleClick = () => {
    setButtonColor(newButtonColor);
    setText(newText);
  };
  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
        {text}
      </button>
    </div>
  );
}

export default App;
