// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model');

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(task => {
        task.map((tasks) => {
            if(tasks.task_completed === 0){
                tasks.task_completed = false
            }else{
                tasks.task_completed = true
            }
        })
        res.status(200).json(task)
    })
    .catch(err => {
        res.json(err.message)
    })
})

router.post('/', (req, res) => {
    const resBody = req.body
    Tasks.createTasks(resBody)
    .then( tasks => {
        if(tasks.task_completed === 0){
            tasks.task_completed = false
            res.status(201).json(tasks)
        }else{
            tasks.task_completed = true
            res.status(201).json(tasks)
        }  
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

module.exports = router;