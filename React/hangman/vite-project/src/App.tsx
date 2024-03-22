import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import words from "./wordList.json"
import { HangmanDrawing } from './HangmanDrawing'
import { Word } from './Word'
function App() {
 const [theword,settheword] = useState(()=>{
  return words[Math.floor(Math.random()* words.length)]
 })
  return (
   <div style={{
    maxWidth:"800px",
    display:"flex",
    flexDirection: "column",
    gap: "2rem",
    margin:"0 auto",
    alignItems: "center"
   }}>

    <div style={{fontSize:"2rem", textAlign:"center"}}>
      lose win
    </div>
    <div>
      <HangmanDrawing/>
      <Word/>
    </div>
   </div>
  )

}

export default App
