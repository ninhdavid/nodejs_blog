class SiteController {
	//[GET] /
	index(req, res) {
		res.render('news');
	}

	//[get] /search
	search(req, res) {
		res.send('news detail');
	}
}

module.exports = new SiteController();
