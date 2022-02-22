const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/ourdate');
mongoose.Promise = global.Promise;

app.use(express.json());

//app.get('/api', (req, res) => res.send('API Working !!'));
app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message});
})

app.listen(process.env.port || 4000, function() {
    console.log('Now Listening for Request');
})