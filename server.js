const express = require('express');

const path = require('path');
const app = express();

const router = require('./app/router/router.js');


app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.json({
    limit: '50mb'
}));



app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use('/', router );


app.listen(4000, function(){
    console.log("Server has started Succesflly")
})



