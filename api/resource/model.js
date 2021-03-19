// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
    getResource,
    createResource,
 }

// RESOURCES 
function getResource(){
    return db('resources')
    .select('resource_id', 'resource_name', 'resource_description')
}
function createResource(resource){
    return db('resources').insert(resource)
    .then(([id]) => {
        return db('resources')
        .where('resource_id', id)
        .select('resource_id', 'resource_name', 'resource_description').first()
    })
}

