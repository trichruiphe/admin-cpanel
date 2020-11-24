let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
	res.render('webpage/index');
});

router.get('/:url_product', (req, res) => {
	res.render('webpage/orderPageProduct',{
		point: req.params.url_product
	});
});


module.exports = router;