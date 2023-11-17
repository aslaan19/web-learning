const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static('public'))
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route to render an EJS template
app.get('/', (req, res) => {
  res.render('home');
});

// Define specific routes for different responses
app.get('/Aslan', (req, res) => {
  res.send('leader !!');
});
app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random()*10 +1 ); 
  res.render('home',{ rand:num});

});
app.get('/cat', (req, res) => {
  res.send('meow');
});

app.get('/some', (req, res) => {
  const mas = "wassup"; 
  res.render('some',{ mas});

});
// Define a route with a named parameter
app.get('/r/:location', (req, res) => {
  const { location } = req.params;
  res.send(`Welcome to ${location}`);
});

// Define a route that uses query parameters
app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search for ${q}!</h1>`);
});

// Define a catch-all route to handle unspecified routes
app.get('*', (req, res) => {
  res.send('Not Aslan or a cat');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
