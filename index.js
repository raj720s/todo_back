require('./globals')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const taskRouter = require('./routes/tasks')
const knex = require('./db_connect')
const errorHandler = require('./middleware/errorHandler')
// const sql = require('./db_connect')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('tiny'))

app.use('/api/task', taskRouter)
app.use(errorHandler)

app.listen(port, async () => {
    console.log('app running on', port)
    knex.raw('SELECT 1 as result')
        .then((results) => {
            console.log('Database connected!');
            // You can now start using the `knex` instance for your queries.
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        })
        .finally(() => {
            // Don't forget to destroy the connection when done
            // knex.destroy();
        });
})