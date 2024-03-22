import { useState } from "react";
import { sum,getRolls } from "./funcs";
import Dice from "./Dice.jsx";

export default function LuckyN({numDice =2, goal=7}){
	
	const[dice,setDice] =useState(getRolls(numDice))
	const isWinner = sum(dice)===goal
	const useit = ()=>(setDice(getRolls(numDice)))
	return(
		<div>
			<h1>the {goal} dice winner {isWinner && "you Win !"} </h1>
			<Dice val={dice}/>
			<button onClick={useit}>Click here</button>
		</div>
	)
}