// Create web server
// Create comment.js that will be used to handle comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
