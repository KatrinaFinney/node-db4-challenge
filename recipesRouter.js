const express = require("express")
const db = require("./recipesModel")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const recipes = await db.getRecipes()
        res.status(200).json(recipes)
    }
    catch (error){
        next(error)
    }
})

router.post('/', (req, res) => {
  const recipeData = req.body;

  db.add(recipeData)
  .then(recipes => {
    res.status(201).json(recipe);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new recipe' });
  });
});

module.exports = router