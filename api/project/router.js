// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.post('', (req, res)=>{
    const projects = req.body;

    Project.addProjects(projects)
    .then(project =>{
        res.status(201).json(project);
    })
    .catch(error => {
       res.status(500).json({ message: 'Failed to create new project' });
    })
})

router.get('', (req, res)=>{
    Project.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get Projects'})
    })
})

module.exports = router;