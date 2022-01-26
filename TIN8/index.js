const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/formdata', (req, res) => {
    res.render('formdata', {name: req.body.name, surname: req.body.surname, dob: req.body.dob});
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
});
