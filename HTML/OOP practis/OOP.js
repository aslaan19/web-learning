const Aslan = {
	leader: true,
	name: "Abdullah",
	age: 15,

	getData : function getData() {
		return `he is ${this.name}  and he is ${this.age} years old !`	
	},
	Isleader : function Isleader(params) {
		return` He ${this.leader ? "is " : "is not "} a leader`
	}

}

const helal = Object.create(Aslan)

helal.age = 18
helal.leader = false

