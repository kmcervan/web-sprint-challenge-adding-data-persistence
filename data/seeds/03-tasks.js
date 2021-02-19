
exports.seed = function(knex) {
      return knex('tasks').insert([
        {task_description: 'Hit the Car', task_notes:'', task_completed: 1, project_id: 1},
        {task_description: 'lie about the Car', task_notes:'', task_completed: 1, project_id: 1},
        {task_description: 'Tell the joker about the King', task_notes:'', task_completed: 1, project_id: 2},
        {task_description: 'Say goodnight', task_notes:'', task_completed: 0, project_id: 2},
        {task_description: 'Stop being serious', task_notes:'', task_completed: 1, project_id: 3}
      ]);
};
