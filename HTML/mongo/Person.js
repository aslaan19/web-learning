const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testapp')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    mujahid: Boolean
});

const Person = mongoose.model("Person", personSchema);

//const aslan = new Person({ name: "Abdullah", age: 20, mujahid: true });

Person.insertMany([
    { name: "saleg", age: 20, mujahid: true },
    { name: "Kareem", age: 16, mujahid: false },
    { name: "hamza", age: 99, mujahid: true },
    { name: "koko", age: 15, mujahid: false }
])
    .then(docs => {
        console.log("it worked")
        console.log(docs);
    })
    .catch(error => {
        console.error("Error inserting documents:", error);
    });
    