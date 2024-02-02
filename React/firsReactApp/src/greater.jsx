function Greater({probs = "Aslan"}){
	const randomnum = Math.floor(Math.random()*10)+1;
		
		return(<>Welcome king {probs}for ${randomnum} time</>)
	
}

export default Greater;