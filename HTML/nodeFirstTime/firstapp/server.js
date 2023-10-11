const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HOME');
});

app.get('/Aslan', (req, res) => {
  res.send('leader !!');
});

app.get('/cat', (req, res) => {
  res.send('meow');
});

app.get('/r/:egypt', (req, res) => {
  const { egypt } = req.params;
  res.send(`welcome in ${egypt}`);
});

app.get('/r/:egypt/:tanta', (req, res) => {
	const { egypt, tanta } = req.params;
	res.send(`welcome in ${tanta} , in ${egypt}`);
  });

  app.get('/search', (req, res) => {
	const {q} = req.query;
	res.send(`<h1> search of ${q} ! </h1>`);
  });


// The catch-all route should come last
app.get('*', (req, res) => {
  res.send('Not Aslan or a cat');
});

app.listen(3000, () => {
  console.log('wassup guys!');
});

