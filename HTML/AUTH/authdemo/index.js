const express = require('express')
const User = require('./models/user')
const { render } = require('ejs')
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const session = require('express-session')

app.use(express.urlencoded({extended:true}))
app.use(session({secret:"4 GPA this term"}))


mongoose.connect('mongodb://127.0.0.1:27017/authdemo')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.set('view engine', 'ejs')
app.set('views','views')

const requireLogin = (req,res,next)=>{
	if(!req.session.user_id){
		res.redirect('/login')
	}
	next()
}

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});


app.post('/login', async(req, res) => {
    const { username, password } = req.body; // Use lowercase 'password'
	const founduser = await User.findAndValidate(username, password);
if (founduser) {
    req.session.user_id = founduser._id;
    res.redirect("/secret");
} else {
    res.redirect('/login');
}

});


app.post('/logout', (req, res) => {
	req.session.destroy()
	res.redirect('/login')
})


app.post('/register', async (req, res) => {
        const { username, password } = req.body;
        const hashed = await bcrypt.hash(password, 12);
        const user = new User({
            username,
            password: hashed
        });
        await user.save();
		req.session.user_id = user._id
        res.redirect('/');
});

app.get('/secret',requireLogin,(req,res)=>{
	res.render('secret')
})


app.listen(3000,()=>{
	console.log("serving the lab!")
})