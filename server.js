const express = require("express")

const recipesRouter = require("./recipesRouter")
const shoppingListRouter = require("./ingredientsRouter")
const stepsRouter = require("./stepsRouter")

const server = express()

server.use(express.json())
server.use(express.Router())

server.get('/', (req, res)=> {
    res.send(`<h1>Let's Go Girl</h3>`)
})

server.use("/api/recipes", recipesRouter )
server.use("/api/recipes/:recipe_id/shoppingList", shoppingListRouter)
server.use("/api/recipes/:recipeId/steps", stepsRouter)

module.exports = server