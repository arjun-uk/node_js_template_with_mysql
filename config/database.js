const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',      
    user: 'root',        
    password: '', 
    port: 3307,
    database: 'node_db'  
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
