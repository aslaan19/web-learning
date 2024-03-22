import { useState } from "react";
import "./ColorBoxGrid.css";

export default function ColorBox({ colors }) {
  const [currentColor, setCurrentColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  const changeColor = () => {
    // This function changes the color to a new random color from the array
    const newIdx = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[newIdx]);
  };

  return (
    <div className="color-box" onClick={changeColor}
         style={{ backgroundColor: currentColor, padding: "20px" }}>
    </div>
  );
}
