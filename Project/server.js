require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const PORT = 8888;


// CONFIG EXPRESS TO USE HANDLEBARS
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
}));

// IMPORT ROUTES
const postCity = require('./routes/city')

// MIDDLEWARE 
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use('/city', postCity)


// ROUTING
app.get('/', (req, res) => {
    res.render('home');
})



// CONNECTING TO DB
mongoose.connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true , useUnifiedTopology: true},
    () => console.log('connected to Database!')
)





app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})