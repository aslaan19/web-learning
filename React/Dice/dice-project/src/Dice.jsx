import Die from "./Die"
import './Die.css'

export default function Dice({val}){
	
	return(
		<div className="diceContainer">
			{val.map(valu => (
				
				<Die val={valu}/>
			))}
		</div>
	)
}