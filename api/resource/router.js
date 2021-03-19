// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model');

router.get('/', (req, res) => {
    Resource.getResource()
    .then(ress => {
        res.status(200).json(ress)
    })
    .catch(err => {
        res.json(err.message)
    })
})

router.post('/', (req, res) => {
    const resBody = req.body
    Resource.createResource(resBody)
    .then( resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

module.exports = router;