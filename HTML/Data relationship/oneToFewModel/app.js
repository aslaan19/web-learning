const express = require('express')
const router = express.Router()
const catsRouter = require('./routes/cats')
const dogRouter = require('./routes/dogs')
const app = express()
const adminRouter = require('./routes/admin')
const cokieparser = require('cookie-parser');
const session = require('express-session')

app.use(session({secret:'aslan2003'}))

app.use(cokieparser())

app.get('/viewcount',(req,res)=>{
	if(req.session.count){
		req.session.count +=1
	}
	else{
		req.session.count =1
	}

	res.send(`you have viewed this page ${req.session.count} count`)

})

app.get('/great',(req,res)=>{
	console.log(req.cookies)
	res.send("take cookie nigga !")
})

app.get('/greet',(req,res)=>{
	res.cookie('name','joe')
	res.cookie('age','30')
	res.send("take cookie nigga !")
})


app.use('/cats',catsRouter)
app.use('/dogs',dogRouter)
app.use('/',adminRouter)

app.listen(4000, ()=>{
	console.log('app is doing the shit !')
})