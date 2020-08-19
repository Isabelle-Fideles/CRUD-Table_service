exports.up = function (knex) {
  knex.schema.createTable('services', function (table) {
    table
      .integer('service_id')
      .unsigned()
      .notNullable()
      .increments('sevice_id')
      .primary();
    table.string('service_name', 255).notNullable();
    table.string('service_description').notNullable();
    table.string('service_responsibles', 255).notNullable();
    table
      .string('username', 50)
      .references('username')
      .inTable('user_account')
      .notNullable();
  });
};

exports.down = function (knex) {};
