var express = require('express');
var router = express.Router();
const website = require('./website');
const addProducts = require('./add_products');
const depot = require('./depot');
const customer = require('./customer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('panel/index', { 
    title: 'Express' ,
    icon: 'activity'
  });
});

router.get('/facebook', (req, res) => {
  res.render('panel/facebook', {
    title: "Facebook",
    icon: "facebook"
  });
})

router.use('/website', website);
router.use('/add-products', addProducts);
router.use('/depot', depot);
router.use('/customer', customer);

module.exports = router;
