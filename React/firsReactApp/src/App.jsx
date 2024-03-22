import React from 'react';
import './App.css';
import Playing from './Playing';


function App() {
  return (
    <div>
      <Playing playersNum={5} target={5}/> 
    </div>
  );
}

export default App;
