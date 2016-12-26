
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('comments', function(table){
        table.increments('id').primary();
        table.integer('item_id');
        table.string('name');
        table.string('text');
        table.timestamps();
        table.index('item_id');
      })
   ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ]);
};
