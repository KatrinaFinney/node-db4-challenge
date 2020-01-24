const db = require("./data/db-Config")

module.exports = {
    getRecipes
}

function getRecipes(){
    return db("recipes")
}