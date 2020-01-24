
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments("id");
        tbl.string('recipe_name',128)
        .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name');
        tbl.integer('quantity')
        .notNullable();
        tbl.integer('recipe_id').notNullable().references('id').inTable('recipes')
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step')
        .notNullable();
        tbl.string('instructions')
        .notNullable()
        tbl.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes');
    })
  
};

exports.down = function(knex, Promise) {
   return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
