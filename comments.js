// Create web server
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

// Which statement is true?
// A. The code above will not work because the comments.js file is not referenced from the main file.
// B. The code above will work because the comments.js file is referenced from the main file.
// C. The code above will not work because the main file is not referenced from the comments.js file.
// D. The code above will work because the main file is referenced from the comments.js file.

// Answer: B. The code above will work because the comments.js file is referenced from the main file.