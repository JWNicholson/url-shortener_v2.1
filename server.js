const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');




const app = express();

//bodyparser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//database key
const db = require('./config/keys').dbURI;

//connect to database
mongoose.connect(db)
    .then(()=> console.log('Database connected'))
    .catch(err => console.log(err));


 //routes
const shorten = require('./routes/api/shorten');
//if user make url request to website/api/shorten/* look in shorten.js for the router.get (/test) action
app.use('./api/shorten', shorten);

//path
app.get('/', (req,res) => {
    res.send('wazzup?');
});

//port
const port = 5500;

app.listen(port, () => console.log(`Server running on port ${port}`));