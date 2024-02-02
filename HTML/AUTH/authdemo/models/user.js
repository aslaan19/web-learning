const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	username:{
		type:String,
		required: [true,'user name is required !']
	}
	,
	password:{
		type:String,
		required: [true,'where is your Password!']
	}
}) 

userSchema.statics.findAndValidate = async function(username,password){
	const founduser = await this.findOne({username})
	const isvalid = await bcrypt.compare(password,founduser.password)
	return isvalid ? founduser:false
}

module.exports = mongoose.model('User',userSchema)