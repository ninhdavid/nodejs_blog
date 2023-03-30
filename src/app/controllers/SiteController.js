const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
	//[GET] /home
	index(req, res, next) {
		Course.find({})
			// .lean()
			.then((courses) => {
				res.render('home', { courses: multipleMongooseToObject(courses) });
			})
			.catch(next);

		// res.render('home');
	}

	//[get] /search
	search(req, res) {
		res.render('search');
	}
}

module.exports = new SiteController();
