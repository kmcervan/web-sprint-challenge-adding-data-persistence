// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

function booleanS(req, res){
    if('task_completed'=== 1){
        return true
    }else{
        return false
    }
}

router.post('', (req, res)=>{
    const tasks = req.body;

    Task.addTask(tasks)
    .then(task =>{
        res.status(201).json(task);
    })
    .catch(error => {
       res.status(500).json({ message: 'Failed to create new Task' });
    })
})

router.get('', booleanS, (req, res)=>{
    Task.getTask()
    .then(tasks => {
           res.json(tasks); 
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get Tasks'})
    })
})

module.exports = router;