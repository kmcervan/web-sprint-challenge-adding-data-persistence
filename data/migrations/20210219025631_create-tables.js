
exports.up = function(knex) {
  return knex.schema
  .createTable('project', tbl => {
      tbl.increments('project_id');
      tbl.text('project_name',128).notNullable();
      tbl.text('project_description',128);
      tbl.integer('project_completed');
  })
  .createTable('resource', tbl => {
      tbl.increments('resource_id');
      tbl.text('resource_name',128).notNullable().unique();
      tbl.text('resource_description',128);
  })
  .createTable('task', tbl => {
      tbl.increments('task_id');
      tbl.text('task_description',128).notNullable();
      tbl.text('task_notes');
      tbl.integer('task_completed');
      tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('project');
  })
  .createTable('project_resource', tbl => {
      tbl.increments('project_resource_id');
      tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('project');
      tbl.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resource');
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project_resource')
};
