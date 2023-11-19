const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/storeApp')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const storeschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    instock: {
        type: Boolean
    }
});

// Define a method on the schema
storeschema.methods.toggleOnsale =  function () {
    this.instock = !this.instock;
     this.save();
};

// Create a model using mongoose.model
const Store = mongoose.model("store", storeschema);

const productfound = async () => {
    try {
        // Use the Store model to find a document
        const foundProduct = await Store.findOne({ name: "jampo" });
        console.log(foundProduct);
        // Call the method on the document
        await foundProduct.toggleOnsale();
        console.log(foundProduct);
    } catch (error) {
        console.error("Error:", error);
    }
};

productfound();
