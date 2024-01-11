const mongoose = require("mongoose");
// const TaskModel = require("../Models/task");

//Create the DB Schema
const categorySchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    totalPoints:{
        type: Number,
        required: true,
    },
    img:{
        type: String,
    },
},{timestamps:true }
);

//Create a Model/Collection to populate the data with the same name for the schema in the DB
const CategoryModel = mongoose.model("category", categorySchema);

//Export the Model/Collection
module.exports = CategoryModel;