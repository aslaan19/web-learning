const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
	res.send('german')
})

router.get('/:id',(req,res)=>{
	res.send('you are viewing a dog')
})

router.get('/:id/fatwa',(req,res)=>{
	res.send("It is haram !")
})


module.exports = router;