
exports.up = function(knex) {
   return knex.schema.createTable('test_table', function(t) {
      t.increments('id').unsigned().primary();
      t.string('data').notNull();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('test_table');
};
