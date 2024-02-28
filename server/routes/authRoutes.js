const express = require("express");
const router = express.Router();
const cors = require("cors")

const { test, registerUser, loginUser, getProfile, logoutUser } = require('../controllers/authController')


router.get('/', test)
router.post('/Signup', registerUser)
router.post('/Login', loginUser)
router.get('/profile', getProfile)
router.get('/logout', logoutUser); // Add logout route


module.exports = router