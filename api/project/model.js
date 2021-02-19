// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    addProjects,
    getProjects
}

function addProjects(projects_id){
    return db('projects').insert(projects_id)
    .then(([id])=>{
        return db('projects').where('project_id', id).first()
    })
}

function getProjects(){
    return db('projects')
}