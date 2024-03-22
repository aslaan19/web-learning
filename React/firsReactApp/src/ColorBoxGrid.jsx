import React from 'react';
import ColorBox from "./ColorBox"; // Ensure this import path is correct
import "./ColorBoxGrid.css"

export default function ColorBoxGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) { // Corrected loop condition to use 'i'
    boxes.push(<ColorBox key={i} colors={colors} />); // Added 'key' prop for React list
  }

  return (
    <div className="grider" >
      {boxes}
    </div>
  );
}


