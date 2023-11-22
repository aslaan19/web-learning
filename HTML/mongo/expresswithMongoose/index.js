const express = require('express');
const app = express();
const path = require('path');
const Car = require('./models/cars');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));



const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/carApp')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/cars', async (req, res) => {
    const cars = await Car.find({});
    res.render('cars/allcars.ejs', { cars });
});

app.get('/cars/new', (req, res) => {
    res.render('cars/new.ejs');
});

app.get('/cars/:id', async (req, res) => {
    const { id } = req.params;
    const car = await Car.findById(id);
    res.render('cars/show.ejs', { car });
});

app.get('/cars/:id/edit',async (req,res)=>{
	const { id } = req.params;
    const car = await Car.findById(id);
	res.render('cars/edit.ejs', { car });
})

app.post('/cars', async (req, res) => {
    try {
        const { name, price, category } = req.body;

        // Validate required fields
        if (!name || !price || !category) {
            return res.status(400).send("Name, price, and category are required");
        }

        const newCar = new Car({ name, price, category });
        await newCar.save();
        res.redirect(`/cars/${newCar._id}`);
    } catch (error) {
        console.error("Error creating new car:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.put('/cars/:id', (req,res) => {
	console.log(req.body)
	res.send('put!!')
})

app.delete('/cars/:id', async(req,res) => {
	const { id } = req.params;
    await Car.findByIdAndDelete(id)
	res.redirect('/cars')
})


app.listen(3010, () => {
    console.log("app is listening on port 3010!");
});
