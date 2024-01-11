const express = require("express");
const router = express.Router();
const categoryController = require("../Controllers/category_controller.js");


router.post("/", categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);

module.exports = router;