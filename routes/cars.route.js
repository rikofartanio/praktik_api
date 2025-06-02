const express= require('express')
const router = express.Router()
const {getCars, getOneCars, createCars, updateCars, deleteCars}= require('../controller/cars.controller')

// mendefinisikan URL/path dari API kita 
router.get('/cars', getCars)
router.get('/cars/:id', getOneCars)
router.post('/cars',createCars)
router.put('/cars/:id',updateCars)
router.delete('/cars/:id',deleteCars)

module.exports= router;
