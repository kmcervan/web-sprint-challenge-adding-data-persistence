// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = { 
    addTask,
    getTask
}

function addTask(task_id){
    return db('task').insert(task_id)
    .then(([id])=>{
        return db('task').where('task_id', id).first()
    })
}

function getTask(){
    return db('task as t')
    .join('project as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_completed', 'p.project_name', 'p.project_description')
}