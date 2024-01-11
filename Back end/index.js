const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const users = require('./Routes/user_routes');
const categories = require('./Routes/category_routes');
const tasks = require('./Routes/task_routes');
const usertasks = require('./Routes/usertasks_routes');

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());


// Routes
app.use('/user', users);
app.use('/category', categories);
app.use('/task', tasks);
app.use('/usertasks', usertasks);


/// test server
app.get('/', (req, res) => {
  res.send("Welcome to my server , I'm Fatma Khaled !");
});


/// Connect with Database
var connection = 'mongodb://localhost:27017/Assignment';
mongoose.connect(connection).then(() => {
  console.log('Connected to MongoDB Atlas successfully');
}).catch((error) => console.error(error));


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


