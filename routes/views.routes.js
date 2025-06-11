const express = require('express');
const { viewsHomePage, viewCarsPage, viewOrdersPage } = require('../controller/views.controller');
const router = express.Router();

router.get('/', viewsHomePage);
router.get('/data-mobil', viewCarsPage);
router.get('/data-orderan',viewOrdersPage)


module.exports= router;