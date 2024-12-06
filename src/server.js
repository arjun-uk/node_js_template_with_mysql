const express = require('express');
const connection = require('../config/database.js');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
