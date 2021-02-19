
exports.seed = function(knex) {
      return knex('project').insert([
        {project_id: 1, project_name: 'Vera', project_description: 'snatch that bag', project_completed: 1},
        {project_id: 2, project_name: 'Over Throw', project_description: 'the king must go', project_completed: 0},
        {project_id: 3, project_name: 'Loca', project_description: 'you know you are', project_completed: 1}
      ]);
};
