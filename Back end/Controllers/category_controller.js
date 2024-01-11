const CategoryModel = require("../Models/category");

let createCategory = async (req , res) => {
    let category = req.body;
    try {
      let newCategory = await CategoryModel.create(category);
      console.log(newCategory);
      res.json({ message: `new Category created`, newCategory });
    } catch (err) {
      res.json({ message: "Error creating category", err });
    }
}


let getAllCategories = async (req , res) => {
  try {
    let allCategories = await CategoryModel.find({});
    res.json(allCategories);
  } catch (err) {
    res.json({ message: `Error --> ${err}` });
  }
}


let getCategoryById = async (req , res) => {
  let id = req.params.id;
  try {
    let categoryId = await CategoryModel.findById({ _id: id });
    res.json(categoryId);
  } catch (err) {
    res.send(err);
  }

}

module.exports = { getAllCategories, createCategory, getCategoryById };