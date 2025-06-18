const express = require('express');
const { getOrdersWithCars } = require("../controller/orders.controller")
const router = express.Router();
const jwtMiddleware = require ("../middleware/verify-jwt")


router.get('/orders',jwtMiddleware, getOrdersWithCars);

module.exports = router;