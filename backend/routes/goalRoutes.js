const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

// Basic Routes
//router.get('/', (req, res) => {res.json({ message: 'Get Goals' })})
//router.post('/', (req, res) => {res.json({message: 'Set Goals'})})
//router.put('/:id', (req, res) => {res.json({message: `Update Goals ${req.params.id}`})})
//router.delete('/:id', (req, res) => {res.json({message: `Delete Goals ${req.params.id}`})})

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router
