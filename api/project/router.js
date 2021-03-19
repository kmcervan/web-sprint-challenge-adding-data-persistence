// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        projects.map((project) => {
            if(project.project_completed === 0){
                project.project_completed = false
            }else{
                project.project_completed = true
            }
        })
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

router.post('/', (req, res) => {
    const resBody = req.body
    Projects.createProject(resBody)
    .then( projects => {
        if(projects.project_completed === 0){
            projects.project_completed = false
            res.status(201).json(projects)
        }else{
            projects.project_completed = true
            res.status(201).json(projects)
        }   
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

module.exports = router;