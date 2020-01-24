const db = require("./data/db-Config")

module.exports = {
    getSteps
}

function getSteps(recipe_id){
    return db("steps").where("recipe_id", recipe_id).first()
}