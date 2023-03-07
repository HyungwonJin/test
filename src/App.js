import { useState } from "react";
import "./App.css";

function App() {
  const [isDisable, setIsDisable] = useState(false);
  const handleChecked = (e) => {
    setIsDisable(e.target.checked);
  };
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
      <button
        onClick={handleClick}
        disabled={isDisable}
        style={{ backgroundColor: buttonColor }}
      >
        {text}
      </button>
      <input
        type="checkbox"
        checked={isDisable}
        onChange={(e) => handleChecked(e)}
      />
    </div>
  );
}

export default App;
