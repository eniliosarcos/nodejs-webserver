
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'))
 
app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Enilio Sarcos',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {

    res.render('generic',{
        nombre: 'Enilio Sarcos',
        titulo: 'Generic'
    })
    // res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', function (req, res) {

    res.render('elements',{
        nombre: 'Enilio Sarcos',
        titulo: 'Elements'
    })
    // res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
  });
 
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});