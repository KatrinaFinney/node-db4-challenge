
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('steps').insert([
        { step: 1, instructions: "Crack the Eggs", recipe_id:1 },
        { step: 2, instructions: "Pour in Milk", recipe_id:1 },
        { step: 3, instructions: "Dip Bread and Fry", recipe_id:1 } 
      ]);
    };
