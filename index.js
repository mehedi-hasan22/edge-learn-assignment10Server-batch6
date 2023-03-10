const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/Courses.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/courses', (req, res) => {
    res.send(courses);
});



app.listen(port, () => {
    console.log('server running', port)
})