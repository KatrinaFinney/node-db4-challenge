const db = require("./data/db-Config")

module.exports = {
    getShoppingList
}

function getShoppingList(recipe_id){
    return db("ingredients").where("recipe_id", recipe_id).first()
}