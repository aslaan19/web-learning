const mongoose = require('mongoose');
const {Schema} = mongoose;

const factorySchema = new Schema({
	name:{type:String, required:[true,'factory must have a name']},
	country:{
		type:String
	}



})