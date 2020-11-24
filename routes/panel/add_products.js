let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('panel/add_products', {
        title: "Thêm sản phẩm mới",
        icon: "globe"
    });
})

module.exports = router;
