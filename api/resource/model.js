// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = { 
    addResource,
    getResource
}

function addResource(resource_id){
    return db('resources').insert(resource_id)
    .then(([id])=>{
        return db('resources').where('resource_id', id).first()
    })
}

function getResource(){
    return db('resources')
}