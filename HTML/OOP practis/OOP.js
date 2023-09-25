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

 function Obj(name,num,boom){
	this.name = name
	this.num = num -10
	this.boom = boom + "@#"
}

let omar = new Obj("omar",19,"hh")
let Ali = new Obj("or",15,"hhh")
let AHmaed = new Obj("oar",20,"hfdas")
Obj.prototype.hamd = function nigga() {
	console.log("wassup nigga !")
}
