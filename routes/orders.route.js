const express = require('express');
const { getOrdersWithCars } = require("../controller/orders.controller")
const router = express.Router();

router.get('/orders', getOrdersWithCars);

module.exports = router;