import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue'); // Blue for even and red for odd

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1); // This will decrement by 2
  }

  // Use useEffect to update the theme whenever the count changes
  useEffect(() => {
    if (count % 2 === 0) {
      setTheme('blue');
    } else {
      setTheme('red');
    }
  }, []); // Depend on count

  return (
    <>
      <button onClick={increment} >+</button>
      {count}
      {theme}

      <button onClick={decrement} >-</button>
    </>
  );
}

export default App;
