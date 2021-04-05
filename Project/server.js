require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');

const { Restautant } = require('./models/products.js')

const { renderSignupForm, renderLoginForm } = require('./controllers/userControllers.js')
// const { renderProductsList } = require('./controllers/productControllers.js')

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
app.use(express.urlencoded({ extended: true }));
app.use('/city', postCity)


// ROUTING
// app.get("/", renderProductsList);
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/signup', renderSignupForm )
app.get('/login', renderLoginForm )

app.get('/blog', (req, res) => {
    res.render('blog')
});

app.get('/product', (req, res) => {
    Restautant.find()
    .then((results) => {
        res.render('home', { Restautants : Restautant });
    })
    .catch((err) => {
        console.log(err);
    })
})


app.get('/sam', (req, res) => {
    Restautant.find()
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        console.log(err);
    })
})

//ERROR HANLDING MIDDLEWARE
// app.use((req, res, next) => {
//     res.status(404).render("error", { message: "Page not found" });
//   });
  
//   app.use((err, req, res, next) => {
//     console.log(err);
//     res.status(500).render("error", { message: err.message });
//   });








// LISTEN TO PORT
app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})