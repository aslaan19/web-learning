const mongoose = require('mongoose');

const carshema = new mongoose.Schema({
	name:{
		type:String,
		required:true
		
	},
	price:{
		type:Number,
		required:true
		
	},
	category:{
		type:String,
		enum:['jeep','sudan','smv']
	}
})

const Car =  mongoose.model("Car",carshema)
module.exports = Car;