	let express = require('express');
    let router = express.Router();
    
    const _Folder = 'panel/website';

	router.get('/', (req, res) => {
		res.render(`${_Folder}/index`, {
            title: "Webiste",
            icon: "globe"
        });
    })
    
    router.get('/:id', (req, res) => {
        res.render(`${_Folder}/DetailOrder`, {
            title: "Khách hàng: Ngô Thanh Tùng",
            icon: 'website'
        })
    })


	module.exports = router;
