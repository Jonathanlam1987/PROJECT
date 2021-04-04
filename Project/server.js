require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const PORT = 8888;


// MIDDLEWARE 




// ROUTING




// CONNECTING TO DB
mongoose.connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true , useUnifiedTopology: true},
    () => console.log('connected to Database!')
)





app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})