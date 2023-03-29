const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
	app.use('/news', newsRouter);

	app.use('/', siteRouter);
	// app.get('/news', (req, res) => {
	// 	res.render('news');
	// });
}
module.exports = route;
