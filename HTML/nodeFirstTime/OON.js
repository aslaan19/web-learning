/* A

//const helal = Object.create(Aslan)
//const omar = Object.assign({},Aslan)
/* let data = ""
let count = 0
const H= document.querySelector('H1')
for(let info in Aslan){
	data += ` the ${info} is ${Aslan[info]}`
	count ++
	if(count ==2){
		H.innerHTML = `The leader is ${Aslan[info]}`
	}
	
	
} */



/* console.log(data)
const div = document.querySelector('div')
div.innerHTML = data */

class Stud{
	static counter = 0;
	constructor(name,dof){
		this.name = name
		this.dof = dof
		Stud.counter ++;
	}
	getname(){
		return`student : ${this.name} is from ${this.dof} `
	}
	static getmany(){
		return`number of students is ${this.counter}`
	}
}

class leader extends Stud{
	constructor(name,dof,nationality){
		super(name,dof)
		this.nationality = nationality
	}
	getnationality(){
		return` bro is ${this.nationality}`
	}

}

let Asln= "leader"
const omar = new Stud("omar",2022)
const abod = new Stud("abod",2023)
const hassan = new Stud("hassa",2002)
const karm = new Stud("kemo",2028)
const abdo = new leader("aslan",2021,"egayptianooo")
abdo.getnationality()

const getnigga= (name) =>name==="Aslan"?console.log("nigaa!") :console.log("who the hell are you")

module.exports.Asln = Asln;
exports.Stud = Stud;
module.exports.getnigga = getnigga;


/* let omar = new Obj("omar",19,"hh")
let Ali = new Obj("or",15,"hhh")
let AHmaed = new Obj("oar",20,"hfdas")
Obj.prototype.hamd = function nigga() {
	console.log("wassup nigga +!")
}
 */