// build your server here and require it from index.js
const express = require('express');

// api file routers will go here, looking for 3 
const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router');

const server = express();

server.use(express.json());
// server.use along with created router variables will be here
server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res)=>{
    res.status(200).json({ api: 'is up and ALIVEEEEE!'})
})

module.exports = server;