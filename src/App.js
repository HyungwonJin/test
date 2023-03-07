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
        style={{ backgroundColor: isDisable ? "gray" : buttonColor }}
      >
        {text}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={isDisable}
        onChange={(e) => handleChecked(e)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
