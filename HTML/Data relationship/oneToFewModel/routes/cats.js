const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
	res.send('scotish')
})

router.get('/:id',(req,res)=>{
	res.send('you are viewing a cat')
})

router.get('/:id/edit',(req,res)=>{
	res.send("how the hell are you editting a cat !!")
})


module.exports = router;