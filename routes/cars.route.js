const express= require('express')
const router = express.Router()
const {getCars, getOneCars, createCars, updateCars, deleteCars}= require('../controller/cars.controller')
const jwtMiddleware = require ("../middleware/verify-jwt")

// mendefinisikan URL/path dari API kita 
router.get('/cars', jwtMiddleware ,getCars)
router.get('/cars/:id',jwtMiddleware, getOneCars)
router.post('/cars', jwtMiddleware, createCars)
router.put('/cars/:id', jwtMiddleware, updateCars)
router.delete('/cars/:id', jwtMiddleware, deleteCars)

module.exports= router;
