
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: 'Revenge', resource_description: 'Throw the gold'},
        {resource_name: 'The Queen', resource_description: 'Dump the Tea'},
        {resource_name: 'The King', resource_description: 'You cannot prove it'},
        {resource_name: 'The Joker', resource_description: 'Hit the post'},
        {resource_name: 'Sally', resource_description: 'Smile Wide!'}
      ]);
};
