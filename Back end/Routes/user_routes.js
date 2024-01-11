const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user_controller");



router.post('/register', userController.Register);
router.post('/login', userController.Login);
router.get("/:id", userController.getUserById);


module.exports = router;