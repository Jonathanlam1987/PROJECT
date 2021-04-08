require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');


// M/I FROM MODELS
const { Restaurants } = require('./models/products.js')

// M/I FROM CONTROLLERS
const { renderSignupForm, renderLoginForm, processSignupSubmission,
        processLoginSubmission } = require('./controllers/userControllers.js')
const { renderProductsList, renderVancouver } = require('./controllers/productControllers.js')
const {cityVancouver} = require('./services/productService.js')

const app = express();
const PORT = 8888;


// CONFIG EXPRESS TO USE HANDLEBARS
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
        helpers: {
            getShortComment(description){
                if (description.legth < 65) {
                    return description
                }
                return description.substring(0,61) + '...';
                }
            }
        }));

// IMPORT ROUTES
const postCity = require('./routes/city')

// MIDDLEWARE 
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/city', postCity)


// ROUTING
app.get('/', renderProductsList);
// app.get('/logout', renderOut);

app.get('/signup', renderSignupForm);
app.post('signup', processSignupSubmission);

app.get('/login', renderLoginForm);
app.post('/login', processLoginSubmission);



app.get('/blog', (req, res) => {
    res.render('blog')
});




// app.get('/product', (req, res) => {
//     Restautant.find()
//     .then((results) => {
//         res.render('home', { Restautants : Restautant });
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })


app.get('/sam', (req, res) => {
    Restaurants.find()
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/vancouver', (req, res) => {
    Restaurants.find({ 'city': 'Vancouver'})
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        console.log(err);
    })
})







// LISTEN TO PORT
app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})