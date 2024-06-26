const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use compression middleware
app.use(compression());

app.use('/public/CSS', express.static(path.join(__dirname, '/public/CSS')));

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Landing Page
app.get('/', (req, res) => {
    res.render('landing-page');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})