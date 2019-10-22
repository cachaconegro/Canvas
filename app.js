const express = require('express')
const path = require('path')
const indexRouters = require('./routes/index')
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.set ('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouters)

app.use('*', (req, res) => res.render('404'))

app.listen(port, () => console.log(`Escuchando en el puerto:${port}`))