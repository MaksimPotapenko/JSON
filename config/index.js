const config = require("../config/database.js")
const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password
// })

// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database")
// })

const connection = mysql.createPool(config)

module.exports = connection