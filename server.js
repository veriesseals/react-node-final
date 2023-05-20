const express = require('express');
const PORT = process.env.PORT || 3002;


const helmet = require('helmet');
const cors = require('cors');

const server = express().use(helmet()).use(cors()).use(express.json());

const router = require('./app/routes/router'); // Server will go down
server.use('/', router);


server.listen(PORT, ()=> {
    console.log(`Port ${PORT} is live mane!`);
});