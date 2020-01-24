const express = require("express")
const db = require("./ingredientsModel")

const router = express.Router()

router.get("/api/recipes/:recipe_id/shoppingList", async (req, res, next) =>{
    try{
        const groceries = await db.getShoppingList(req.params.id)
        res.json(200).json(groceries)
    }
    catch(error){
        next(error)
    }
})
router.post('/api/:id/shoppingList', (req, res) => {
  const ingredientData = req.body;

  db.add(ingredientData)
  .then(ingredients => {
    res.status(201).json(ingredient);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to add new ingredient' });
  });
});









module.exports = router 