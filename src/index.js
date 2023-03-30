const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();
const methodOverride = require('method-override');

const route = require('./routes/index');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public\\')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
	'hbs',
	handlebars.engine({
		extname: '.hbs',
		helpers: {
			sum: (a, b) => a + b,
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

//connect to DB
db.connect();

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
