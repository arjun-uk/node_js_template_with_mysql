const pool = require('../config/database');

const UserModel = {
    getAll: () => pool.query('SELECT * FROM users'),
    create: (username, password) => {
        return pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    },
    login: (username, password) => {
        return pool.query('SELECT id FROM users WHERE username =? AND password =?', [username, password]);
    },
    
};

module.exports = UserModel;
