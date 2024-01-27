const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    adress: [{
        country: String,
        city: String,
        place: String
    }]
});

const User = mongoose.model("User", userSchema);


const aslan = new User({
    first: "kareem",
    last: "mohammed",
    adress: [{ 
        country: "KSA", 
        city: "dammam", 
        place: "KFUPM" 
    }]
});


aslan.save()
.then(doc => {
    console.log('Document saved:', doc);
}).catch(err => {
    console.error('Error saving document:', err);
});
