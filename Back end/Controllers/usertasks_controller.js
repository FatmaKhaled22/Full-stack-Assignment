const User_TaskModel = require("../Models/user_tasks");
var ObjectId = require("mongodb").ObjectId;

let CompletedTask = async (req, res) => {
  let task = req.body;
  task.userId = new ObjectId(task.userId);
  task.taskId = new ObjectId(task.taskId);
  try {
    let completedTask = await User_TaskModel.create(task);
    res.status(201).json({ message: `This task is completed`, completedTask });
  } catch (err) {
    console.log(err);
    res.status(422).json(err);
  }
};

let getUserTasks = async (req, res) => {
  let id = req.params.id;
  try {
    let UserTasks = await User_TaskModel.find({ userId: id }).populate("taskId");
    res.status(201).json(UserTasks);
  } catch (err) {
    res.status(422).json(err);
  }
};

module.exports = { CompletedTask, getUserTasks };
