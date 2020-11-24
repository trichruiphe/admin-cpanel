
let express = require('express');
let router = express.Router();
const _Folder = 'panel/depot';

router.get('/', (req, res) => {
    res.render(`${_Folder}/index`, {
        title: "Kho sản phảm",
        icon: "globe"
    });
});

router.get('/:id', (req, res) => {
    res.render(`${_Folder}/info_product`, {
        title: "Áo trắng - Admin panel",
        icon: "globe"
    })
})

module.exports = router;
