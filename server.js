const express = require('express');

const question = require('./models/questions');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the server side!', app: 'ChordTheory' });

});
app.get('/newquestion', (req, res) => {
    const newQuestion = question();
    res.status(200).json({ newQuestion });
    console.log(newQuestion);
});


const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});