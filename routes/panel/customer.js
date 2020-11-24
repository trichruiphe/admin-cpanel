	let express = require('express');
    let router = express.Router();
    
    const _Folder = 'panel/customer';

	router.get('/', (req, res) => {
		res.render(`${_Folder}/index`, {
            title: "Customer",
            icon: "users"
        });
    });

    router.get('/:id', (req, res) => {
        res.render(`${_Folder}/detail`, {
            title: "Khách hàng",
            icon: ""
        });
    });
    
	module.exports = router;
