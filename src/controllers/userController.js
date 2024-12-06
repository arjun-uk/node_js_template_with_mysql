const pool = require('../config/database');
const userModel = require('../models/userModel');


const getAllUsers = async (req, res) => {
    try {
        const [rows] = await userModel.getAll();

        res.json({
            message: 'Users fetched successfully',
            users: rows,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Database query failed' });
    }
};

const createUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const [result] = await userModel.create(username, password);
        res.json({ 
            message: 'User created successfully',
            user_id: result.insertId,
        });
    } catch (err) {
        console.error('Database insert failed:', err.message);
        res.status(500).json({ error: 'Database insert failed: ' + err.message });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username ||!password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const [rows] = await userModel.login(username, password);

        if (rows.length > 0) {
            res.json({ 
                message: 'User authenticated successfully',
                user_id: rows[0].id,
            });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (err) {
        console.error('Database query failed:', err.message);
        res.status(500).json({ error: 'Database query failed' });
    }
}


module.exports = { getAllUsers, createUser ,loginUser};
