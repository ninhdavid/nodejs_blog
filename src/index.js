const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();
const methodOverride = require('method-override');

const route = require('./routes/index');
const db = require('./config/db');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

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
			sortable:(field, sort) =>{
				const sortType = field === sort.column? sort.type : 'default'
				const icons= {
					default: 'ti  ti-selector',
					asc:'ti ti-sort-ascending-letters',
					desc:'ti ti-sort-descending-letters',
				}
				const types = {
					default:'desc',
					asc:'desc',
					desc:'asc',
				}
				const icon = icons[sortType]
				const type = types[sortType]

				return( `<a 
				href="?_sort&column=${field}&type=${type}" 
				style="text-decoration: none;">
					<i class="${icon}"></i>
				</a>`)
			}
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


//Customs Middleware 

app.use(SortMiddleware)


//Routes init
route(app);

//connect to DB
db.connect();

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
