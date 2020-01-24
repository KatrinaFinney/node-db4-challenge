
exports.seed = function(knex) {
  
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: "French Toast" },
        { recipe_name: "Red Rice"},
        { recipe_name: "Banana Bread"}
      ]);
    };

