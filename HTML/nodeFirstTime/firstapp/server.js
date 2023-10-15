const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route to render an EJS template
app.get('/', (req, res) => {
  res.render('server');
});

// Define specific routes for different responses
app.get('/Aslan', (req, res) => {
  res.send('leader !!');
});

app.get('/cat', (req, res) => {
  res.send('meow');
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
