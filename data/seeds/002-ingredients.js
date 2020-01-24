
exports.seed = function(knex) {
 
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "Bread", quantity: 3, recipe_id:1 },
        {ingredient_name: "Milk", quantity: 1, recipe_id:1 },
        {ingredient_name: "Eggs", quantity: 2, recipe_id:1 }
      ]);
    };

