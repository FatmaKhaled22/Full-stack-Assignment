const express = require("express");
const router = express.Router();
const taskController = require("../Controllers/task_controller");


router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.get("/category/:id", taskController.getTasksByCat);

module.exports = router;