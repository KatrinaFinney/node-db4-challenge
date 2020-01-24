const express = require("express")
const db = require("./stepsModel")

const router = express.Router()

router.get("/api/recipes/:recipeId/steps", async (req, res, next) => {
    try {
        const steps = db.getSteps(req.params.recipe_id)
        res.status(200).json(steps)
    }
    catch(err){
        next(err)
    }
})
router.post('/', (req, res) => {
  const stepsData = req.body;

  db.add(stepsData)
  .then(steps => {
    res.status(201).json(step);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});


module.exports = router