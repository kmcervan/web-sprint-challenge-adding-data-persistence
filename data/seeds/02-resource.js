
exports.seed = function(knex) {
      return knex('resource').insert([
        {resource_id: 1, resource_name: 'Revenge', resource_description: 'Throw the gold'},
        {resource_id: 2, resource_name: 'The Queen', resource_description: 'Dump the Tea'},
        {resource_id: 3, resource_name: 'The King', resource_description: 'You cannot prove it'},
        {resource_id: 4, resource_name: 'The Joker', resource_description: 'Hit the post'},
        {resource_id: 5, resource_name: 'Sally', resource_description: 'Smile Wide!'}
      ]);
};
