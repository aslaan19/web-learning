import { useState } from "react";

export default function Playing({ playersNum, target }) {
  const [scores, setScores] = useState(Array(playersNum).fill(0));
  const [isWinner, setWinner] = useState(null); // Corrected variable name for consistency

  const incrementScore = (index) => {
    if (scores[index] < target) {
      const newScores = [...scores];
      const newScore = newScores[index] + 1;
      newScores[index] = newScore;
      setScores(newScores);
      
      // Check if the new score reaches the target
      if (newScore === target) {
        setWinner(index); // Set the winner
      }
    }
  };

  const reset = () => {
    setScores(Array(playersNum).fill(0));
    setWinner(null); // Reset the winner
  };

  // Function to determine score color
  const scoreColor = (index) => {
    if (isWinner === null) return "black"; // No winner yet
    return isWinner === index ? "green" : "red"; // Highlight winner in green, others in red
  };

  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index} style={{ color: scoreColor(index) }}>
            Player number {index + 1}: {score}
            <button onClick={() => incrementScore(index)}>+1</button>
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
