// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    getProjects,
    createProject,
 }

 // PROJECTS
function getProjects(){
    return db('projects')
}
function createProject(project){
    return db('projects').insert(project)
    .then(([id]) => {
        return db('projects').where('project_id', id).first()
    })
}