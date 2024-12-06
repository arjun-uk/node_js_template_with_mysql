const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3307,
    database: 'node_db',
});

module.exports = pool;
