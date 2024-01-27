const express = require('express')
const router = express.Router()


router.use((req,res,next)=>{
	if(req.query.isAslan){
		next();
	}
	else{
		res.send('not adming')
	}
})

router.get('/topsecret',(req,res)=>{
	res.send('Aslan will get 4 GPA !')
})

router.get('/deleteAll',(req,res) =>{
	res.send('IT IS DELETED BOSS !!')
})

module.exports = router