const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
	app.use('/', siteRouter);

	app.use('/news', newsRouter);

	// app.get('/news', (req, res) => {
	// 	res.render('news');
	// });
}
module.exports = route;
