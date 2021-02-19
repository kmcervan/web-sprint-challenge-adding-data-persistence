
exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'Vera', project_description: 'snatch that bag', project_completed: 1},
        {project_name: 'Over Throw', project_description: 'the king must go', project_completed: 0},
        {project_name: 'Loca', project_description: 'you know you are', project_completed: 1}
      ]);
};
