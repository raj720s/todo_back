const express = require('express')
const { getTasks, addTask, getTask, updateTask, deleteTask } = require('../controllers/task')
const taskRouter = express.Router()

taskRouter.route('/').get(getTasks).post(addTask)
taskRouter.route('/:id').get(getTask).put(updateTask).delete(deleteTask)

module.exports = taskRouter