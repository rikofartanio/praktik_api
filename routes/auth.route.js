const express = require('express');
const { createUser, processLogin } = require('../controller/auth.controller');
const router = express.Router();
const jwtMiddleware = require ("../middleware/verify-jwt")

router.post('/auth/create-user', jwtMiddleware, createUser);
router.post('/auth/login',processLogin); //login gak perlu jwt middleware karena login tidak perlu token

module.exports = router;