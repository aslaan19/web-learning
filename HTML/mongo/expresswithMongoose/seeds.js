const Car = require('./models/cars');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/carApp')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const p = new Car({ name: "ford", price: 50000, category: "jeep" });

const cargroup = [
    { name: "camry", price: 20000, category: "sudan" },
    { name: "santafe", price: 30000, category: "smv" },
    { name: "bmw", price: 90000, category: "sudan" },
];

// Use insertMany directly, no need to call save() afterwards
Car.insertMany(cargroup)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
p.save()
	.then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });