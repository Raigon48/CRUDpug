const express = require('express');
const productControl = require('../controller/product.controller');
const router = express.Router();

router.route('/').get(productControl.home);
router.route('/create').get(productControl.create);
router.route('/create').post(productControl.addProduct);
router.route('/edit/:id').get(productControl.edit);
router.route('/update/:id').post(productControl.update);
router.route('/delete/:id').get(productControl.delete);

module.exports = router;