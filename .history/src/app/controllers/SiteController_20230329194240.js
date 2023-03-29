class SiteController {
	//[GET] /
	index(req, res) {
		res.render('home');
	}

	//[get] /search
	search(req, res) {
		res.send('news detail');
	}
}

module.exports = new SiteController();
