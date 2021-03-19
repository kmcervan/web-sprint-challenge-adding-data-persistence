// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');

//Router connections will go here

const server = express();

server.use(helmet());
server.use(express.json());

//Router breakpoints go here

server.get('/', (req, res)=>{
    res.send('API is aliveeeee!')
});

module.exports = server;