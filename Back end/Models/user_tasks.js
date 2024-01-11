const mongoose = require("mongoose");

const User_TaskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "task",
    },
  },
  { timestamps: true }
);

var User_TaskModel = mongoose.model("user_tasks", User_TaskSchema);

module.exports = User_TaskModel;
