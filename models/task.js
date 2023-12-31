const knex = require("../db_connect")

const getOnerow = async (id, table, resp) => {
    knex.select('*').from(table).where({ id: id }).first().then(data => {
        // console.log({ data })
        resp(null, data)
    }).catch(err => console.log(err) && resp(err, null))
}

const getAllTasks_ = () => {
    return new Promise((resolve, reject) => {
        knex.select().table('tasks').then(tasks => {
            // console.log({ tasks })
            if (tasks) resolve(tasks)
        }).catch(e => reject(e))
    })
}
const addTask_ = (task) => {
    return new Promise((resolve, reject) => {
        knex('tasks').insert(task).returning('*').then(tasks => {
            if (tasks) {
                const task = getOnerow(tasks[0], 'tasks', (err, res) => {
                    if (err) console.log({ err })
                    resolve(res)
                    // console.log({ res })
                })
                // console.log({ tsk: tasks, task: task })
            }
        }).catch(e => reject(e))
    })
}
const updateTask_ = (id, task) => {
    return new Promise((resolve, reject) => {
        knex('tasks').where('id', '=', id).update({
            status: task.status, task: task.task
        }).then(tasks => {
            // console.log({ tasks })
            if (tasks) resolve(tasks)
            else reject(new Error('id update not found'))
        }).catch(e => reject(e))
    })
}
const deleteTask_ = (id) => {
    return new Promise((resolve, reject) => {
        knex('tasks').where({ id: id }).del().then(tasks => {
            // console.log({ tasks })
            if (tasks) resolve(tasks)
            else {
                reject(new Error('no task with id'))
            }
        }).catch(e => reject(e))
    })
}
const getTask_ = (id) => {
    return new Promise((resolve, reject) => {
        knex('tasks').select('*').where({ id: id }).first().then(tasks => {
            // console.log({ tasks })
            if (tasks) {
                resolve(tasks)
            } else reject(new Error('no task found'))
        }).catch(e => reject(e))
    })
}

module.exports = {
    getAllTasks_, addTask_, updateTask_, getTask_, deleteTask_
}