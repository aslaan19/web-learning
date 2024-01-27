const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Campground = require('./models/campground');
const ejsMate = require('ejs-mate')
const Review = require('./models/review')

mongoose.connect('mongodb://127.0.0.1:27017/yelpcamp')
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const app = express();

app.engine('ejs',ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Index route
app.get('/campgrounds', async (req, res) => {
    try {
        const campgrounds = await Campground.find({});
        res.render('campgrounds/index', { campgrounds });
    } catch (err) {
        console.error(err);
        res.redirect('/'); // Redirect to the home page on error
    }
});

// New route
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

// Create route
app.post('/campgrounds', async (req, res) => {
    try {
        const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campgrounds/${campground._id}`);
    } catch (err) {
        console.error(err);
        res.redirect('/campgrounds/new'); // Redirect to the new campground form on error
    }
});

// Show route
app.get('/campgrounds/:id', async (req, res) => {
    try {
        const campground = await Campground.findById(req.params.id);
        res.render('campgrounds/show', { campground });
    } catch (err) {
        console.error(err);
        res.redirect('/campgrounds'); // Redirect to the index page on error
    }
});

// Edit route
app.get('/campgrounds/:id/edit', async (req, res) => {
    try {
        const campground = await Campground.findById(req.params.id);
        res.render('campgrounds/edit', { campground });
    } catch (err) {
        console.error(err);
        res.redirect('/campgrounds'); // Redirect to the index page on error
    }
});

app.post('/campgrounds/:id/review', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review); // Ensure this matches the structure of your Review model
    campground.reviews.push(review);
    await campground.save();
    await review.save();
    res.redirect(`/campgrounds/${campground._id}`); // Corrected the typo here
});

// Update route
app.put('/campgrounds/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground }, { new: true });
        res.redirect(`/campgrounds/${campground._id}`);
    } catch (err) {
        console.error(err);
        res.redirect(`/campgrounds/${req.params.id}/edit`); // Redirect to the edit form on error
    }
});

// Delete route
app.delete('/campgrounds/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Campground.findByIdAndDelete(id);
        res.redirect('/campgrounds');
    } catch (err) {
        console.error(err);
        res.redirect('/campgrounds');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
