exports.up = function(knex) {
    return (
        knex.schema
          .createTable('projects', tbl => {
              tbl.increments('project_id').primary();
              tbl.string('project_name', 255).notNullable();
              tbl.string('project_description', 255);
              tbl.boolean('project_completed').notNullable().defaultTo(false);
          })
          .createTable('resources', tbl => {
              tbl.increments('resource_id').primary();
              tbl.string('resource_name', 255).notNullable().unique();
              tbl.string('resource_description', 255);
          })
          .createTable('tasks', tbl => {
              tbl.increments('task_id').primary();
              tbl.string('task_description', 255).notNullable();
              tbl.string('task_notes', 255);
              tbl.boolean('task_completed').notNullable().defaultTo(false);
              tbl.integer('project_id').unsigned().notNullable()
                  .references('projects.project_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })
          .createTable('project_resources', tbl => {
              tbl.integer('project_id').unsigned().notNullable();
              tbl.foreign('project_id').references('projects.project_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              tbl.integer('resource_id').unsigned().notNullable();
              tbl.foreign('resource_id').references('resources.resource_id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              tbl.primary(['project_id', 'resource_id']);
          })
    )
  };
  
  exports.down = function(knex) {
      return(
          knex.schema
              .dropTableIfExists('projects')
              .dropTableIfExists('resources')
              .dropTableIfExists('tasks')
              .dropTableIfExists('project_resources')
      );
  };
  