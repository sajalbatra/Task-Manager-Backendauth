require('dotenv').config(); // Load environment variables from .env file

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  });
  
  const Task = mongoose.model('Task', taskSchema);
  
  module.exports = Task;