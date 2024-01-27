const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

	const productSchema = new Schema({
		name:String,
		price:Number,
		season: {
			type: String,
			enum :['spring','winter','summer','fall']
		}
	})

const Product = mongoose.model('Product',productSchema)
/* 
const product1 = new Product({ name: "Winter Jacket", price: 100, season: "winter" });
const product2 = new Product({ name: "Beach Towel", price: 20, season: "summer" });
const product3 = new Product({ name: "Gardening Shovel", price: 30, season: "spring" });
const product4 = new Product({ name: "Autumn Scarf", price: 50, season: "fall" });
const product5 = new Product({ name: "Sunscreen", price: 15, season: "summer" });

async function insertProducts() {
    try {
        await product1.save();
        await product2.save();
        await product3.save();
        await product4.save();
        await product5.save();
        console.log("Products inserted successfully");
    } catch (error) {
        console.error("Error inserting products:", error);
    }
}

insertProducts();
 */

const farmSchema = new Schema({
	name:String,
	city:String,
	Products:[{
		type : Schema.Types.ObjectId, ref: 'Product'
	}]
})

const Farm = mongoose.model('Farm',farmSchema)
const makefarm = async () => {
    const farm = new Farm({ name: 'mahala farm', city: 'Tanta' });
    
    // Find products with season 'summer'
    const products = await Product.find({ season: 'summer' });

    // Extract just the _id from each product and add it to the farm
    products.forEach(product => farm.Products.push(product._id));

    // Save the farm
    try {
        await farm.save();
        console.log('Farm saved:', farm);
    } catch (error) {
        console.error('Error saving farm:', error);
    }
}

makefarm();


Farm.findOne({name: 'mahala farm'})
	.populate('Products')
	.then(farm => console.log(farm))