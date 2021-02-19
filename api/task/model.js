// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = { 
    addTask,
    getTask
}

function addTask(task_id){
    return db('tasks').insert(task_id)
    .then(([id])=>{
        return db('tasks').where('task_id', id).first()
    })
}

function getTask(){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_completed', 'p.project_name', 'p.project_description')
}