// build your server here and require it from index.js
const express = require('express');


//Router connections will go here
const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router');
const TaskRouter = require('./task/router');

const server = express();

server.use(express.json());

//Router breakpoints go here
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', TaskRouter);


server.get('/', (req, res)=>{
    res.send('API is aliveeeee!')
});

module.exports = server;