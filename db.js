const { createPool } = require('mysql2/promise')

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.DATABASE
})

module.exports = pool