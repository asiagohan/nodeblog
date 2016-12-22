
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('blogs', function(table){
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id');
      table.index('user_id');
      table.timestamps();
     })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('blogs')
  ]);
};
