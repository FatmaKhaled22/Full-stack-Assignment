const mongoose = require("mongoose");

//Create the DB Schema
const taskSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    points:{
        type: Number,
        required: true,
        min: 0,
    },
    img:{
        type: String,
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "category" 
    },
},{timestamps:true }
);

//Create a Model/Collection to populate the data with the same name for the schema in the DB
const TaskModel = mongoose.model("task", taskSchema);

//Export the Model/Collection
module.exports = TaskModel;