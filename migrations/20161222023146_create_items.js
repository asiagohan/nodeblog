
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('items', function(table){
        table.increments('id').primary();
        table.string('title');
        table.text('text');
        table.integer('blog_id');
        table.index('blog_id');
        table.timestamps();
      })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('items')
  ]);
};
