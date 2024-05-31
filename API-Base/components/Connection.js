'use strict'
let mysql = require ('mysql2');

let str_connection = mysql.createPool({
    user        :'root',
    password    :'',
    database    :'appbancabd',
    host        :'localhost',
    port        : 3306,
    charset     : 'utf8mb4',
    connectionLimit : 10000,
    waitForConnections: true,
    queueLimit: 0
})

module.exports = {
    str_connection
}
