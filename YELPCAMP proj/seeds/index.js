const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./SeedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelpcamp')
   .then(() => {
       console.log("Connected to MongoDB!");
   })
   .catch((error) => {
       console.error("Error connecting to MongoDB:", error);
   });

   
const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image:"https://source.unsplash.com/collection/483251/1600x1900",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam consequatur repellendus impedit eaque dolores reiciendis perferendis officia unde veritatis, illo eos optio. Aliquam, voluptas aperiam aut unde veniam modi.",
            price:100
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})