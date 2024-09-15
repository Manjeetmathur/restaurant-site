const express = require('express')
const router = express.Router()

const userSignUpController = require("../Controller/UsersignUp")
const userSignInController = require("../Controller/UserSignIn")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)

module.exports = router