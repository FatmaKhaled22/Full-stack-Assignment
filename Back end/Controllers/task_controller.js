const TaskModel = require("../Models/task");
var ObjectId = require('mongodb').ObjectId;

let createTask = async (req, res) => {
  let task = req.body;
  task.category = new ObjectId(task.category);
  try {
    let newTask = await TaskModel.create(task);
    res.status(201).json({ message: `new Task created`, newTask });
  } catch (err) {
    console.log(err)
    res.status(422).json(err);
  }
};



let getAllTasks = async (req, res) => {
  try {
    let allTasks = await TaskModel.find({});
    res.json(allTasks);
  } catch (err) {
    res.send(err);
  }
};

let getTaskById = async (req, res) => {
  let id = req.params.id;
  try {
    let foundtask = await TaskModel.findById({ _id: id });
    res.json(foundtask);
  } catch (err) {
    res.send(err);
  }
};

let getTasksByCat = async (req, res) => {
  let id = req.params.id;
  try {
    let TasksByCat = await TaskModel.find({ category: id });
    res.status(201).json(TasksByCat);
  } catch (err) {
    res.status(422).json(err);
  }
};

module.exports = { getAllTasks, createTask, getTaskById , getTasksByCat};
