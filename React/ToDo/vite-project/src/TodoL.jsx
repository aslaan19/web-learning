// TodoL.js
import React, { useState } from 'react';
import Thelist from './Thelist';
import Formlist from './Formlist';
import { json } from 'express';

const getinitialData = () =>{
  const data = JSON.parse(localStorage.getItem("todos"))
  if(!data) return[]
  return data
}


export default function TodoL() {
  const [todos, setTodos] = useState(getinitialData);

  const removeitem = (id) => {
    setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
  };

  const toggleitem = (id) => {
    setTodos(prevTodos => prevTodos.map(el => {
      if (el.id === id) {
        return { ...el, completed: !el.completed };
      } else {
        return el;
      }
    }));
  };

  const additem = (text) => {
    // Assuming you want to automatically generate IDs, find the max current id and add 1
    const maxId = todos.reduce((max, item) => Math.max(max, item.id), 0);
    const newItem = { id: maxId + 1, text: text, completed: false };
    setTodos(prevTodos => [...prevTodos, newItem]);
  }

  return (
    <div>
      <Thelist todos={todos} removeitem={removeitem} toggleitem={toggleitem} />
      <Formlist additem={additem} /> {/* Corrected prop name here */}
    </div>
  );
}
