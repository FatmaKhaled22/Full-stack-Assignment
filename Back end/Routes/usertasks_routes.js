const express = require("express");
const router = express.Router();
const UserTasks = require("../Controllers/usertasks_controller");


router.post("/", UserTasks.CompletedTask);
router.get("/user/:id", UserTasks.getUserTasks);

module.exports = router;