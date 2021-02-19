// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.post('', (req, res)=>{
    const resources = req.body;

    Resource.addResource(resources)
    .then(resource =>{
        res.status(201).json(resource);
    })
    .catch(error => {
       res.status(500).json({ message: error.message });
    })
})

router.get('', (req, res)=>{
    Resource.getResource()
    .then(resources => {
        res.json(resources);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get Resources'})
    })
})

module.exports = router;