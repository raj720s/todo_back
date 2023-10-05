// require('./globals')
// const knex = require('knex')

const knexconf = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'todo',
    }
}

const knex = require('knex')(knexconf)

// const sql = knex(knexconf)
// Perform a simple query to check the connection
// sql.raw('SELECT 1 as result')
//     .then((results) => {
//         console.log('Database connected:', knexconf.connection.database);
//         // You can now start using the `sql` instance for your queries.
//     })
//     .catch((error) => {
//         console.error('Error connecting to the database:', error);
//     })
//     .finally(() => {
//         // Don't forget to destroy the connection when done
//         sql.destroy();
//     });
//


module.exports = knex