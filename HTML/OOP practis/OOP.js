const Aslan = {
	leader: true,
	name: "Abdullah",
	age: 15,

	/* etData : function getData() {
		return `he is ${this.name}  and he is ${this.age} years old !`	
	},
	Isleader : function Isleader(params) {
		return` He ${this.leader ? "is " : "is not "} a leader`
	} */

}

//const helal = Object.create(Aslan)
//const omar = Object.assign({},Aslan)
let data = ""
let count = 0
const H= document.querySelector('H1')
for(let info in Aslan){
	data += ` the ${info} is ${Aslan[info]}`
	count ++
	if(count ==2){
		H.innerHTML = `The leader is ${Aslan[info]}`
	}
	
	
}


console.log(data)
const div = document.querySelector('div')
div.innerHTML = data


