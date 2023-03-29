const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
	app.use('/', siteRouter);

	app.use('/news', newsRouter);

	// app.get('/news', (req, res) => {
	// 	res.render('news');
	// });

	app.get('/search', (req, res) => {
		res.render('search');
	});
}
module.exports = route;
