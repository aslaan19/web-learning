const express = require('express');
const app = express();
const {v4:uuid} = require('uuid')
const path = require('path');
const port = 3000;
const methodOver = require('method-override')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOver('_method'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Add unique IDs to comments
const comments = [
  { id: uuid(), username: "Aslan", comment: "I love this!"},
  { id: uuid(), username: "Hala", comment: "I love my brother" },
  { id: uuid(), username: "kafer", comment: "not my issue" }
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
	res.render('comments/new');
  });

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  
  if (comment) {
    res.render('comments/show',{comment})
  } else {
    res.status(404).send("Comment not found");
  }
});

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);

  if (comment) {
    res.render('comments/edit', {  comment });
  } else {
    res.status(404).send("Comment not found");
  }
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newcomment = req.body.comment; // Use req.body.comment
  const foundcom = comments.find(c => c.id === id);
  foundcom.comment = newcomment;
  res.redirect('/comments');
});



app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ id:uuid(), username, comment });
  res.redirect('/comments');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
