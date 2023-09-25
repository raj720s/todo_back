const { getTask_, getAllTasks_, addTask_, updateTask_, deleteTask_ } = require("../models/task")


const getTask = async (req, res, nxt) => {
    const { id } = req.params
    console.log(id)
    try {
        const task = await getTask_(id)
        if (task) {
            res.json({ data: task, status: true, msg: ' tasks found' })
        } else {
            // res.json({ error: 'something is wrogn', status: false, msg: 'all tasks api failed' })
            throw new Error('no tak with the id found')
        }
    } catch (error) {
        nxt(error)
    }
}
const getTasks = async (req, res, nxt) => {
    try {
        const tasks = await getAllTasks_()
        if (tasks) {
            res.json({ data: tasks, status: true, msg: 'all tasks api' })
        } else {
            // res.json({ error: 'something is wrogn', status: false, msg: 'all tasks api failed' })
            throw new Error('no tasks found')
        }
    } catch (error) {
        nxt(error)
    }





}

const addTask = async (req, res, nxt) => {
    const task = req.body
    try {
        const add = await addTask_(task)
        if (add) {
            res.json({ data: add, status: true, msg: ' tasks inserted' })
        } else {
            // res.json({ error: 'something is wrogn', status: false, msg: 'all tasks api failed' })
            throw new Error('couldnt add the task')
        }
    } catch (error) {
        nxt(error)
    }
}

const updateTask = async (req, res, nxt) => {
    const { id } = req.params
    const { task } = req.body
    try {
        const update = await updateTask_(id, task)
        if (update) {
            res.json({ data: update, status: true, msg: ' tasks updated' })
        } else {
            // res.json({ error: 'something is wrogn', status: false, msg: 'all tasks api failed' })
            throw new Error('couldnt  update the task..')
        }
    } catch (error) {
        nxt(error)
    }
}
const deleteTask = async (req, res, next) => {
    const { id } = req.params
    try {
        const del = await deleteTask_(id)
        if (del) {
            res.json({ data: del, status: true, msg: ' task deld' })
        } else {
            throw new Error('no id wala task found')
        }
    } catch (error) {
        next(error)
        // console.log({ error })
        // res.json({ error: 'something is wrogn', status: false, msg: 'all tasks api failed' })
    }


}


module.exports = {
    getTasks, getTask, updateTask, deleteTask, addTask

}
