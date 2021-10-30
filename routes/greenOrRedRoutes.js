const greenOrRed = require('../model/greenOrRed')
const express = require('express')
const router = express.Router()

let foundFruit
let foundPrey


router.get('/intro', function (req, res) {
    let instructions = `Welcome to Green or Red!
    You'r hungry and you'r looking for something to eat.
    To a new game visit /startGame endpoint.
    To choose your diet visit /ChooseDiet endpoint.
    Based on the diet you chose you will find food.\n For Vegetarian visit /findFruit for Carnivore visit /findPrey endpoint.
    Based on the fruit or animal you found to pick or hunt visit /pickFruit or /startHunt endpoint.
    In order to see if you managed to pick the fruit or if your hunt was a success visit /success endpoint.
    Good Luck On Your Journey.`
    res.send(instructions)
})

router.get('/startGame', function (req, res){
    res.send('Choose your diet type, Vegetarian or Carnivore?\n')
})

router.get('/chooseDiet', function (req, res){
    console.log('vegetarian')
    let diet = req.query.diet
    console.log(diet)
    let message = greenOrRed.chooseDiet(diet)
    res.send(message)
})

router.get('/look', function (req, res){
    let playerLocation = greenOrRed.look()
    console.log('player Location',playerLocation)
    res.send('you are at the player location ' + playerLocation.name)
})

router.get('/move', function (req, res){
    let direction = req.query.direction
    console.log('Getting direction from the player')
    greenOrRed.move(direction)
    res.send(`You moved ${direction}`)
    
})



router.get('/findFruit', function (req, res){
    let fruits = ['Strawberry\n','Pineapple\n', 'No fruits to be found!!\n']
    let randomIndex = Math.floor(Math.random() * fruits.length);
    foundFruit = fruits[randomIndex]
    res.send(fruits[randomIndex])
})


router.get('/pickingFruits', function(req, res){
    res.send(greenOrRed.pickingFruits(foundFruit))
    
})

router.get('/success', function(req, res){
    res.send(greenOrRed.successWithFruits())
    
})

//carni endpoints

router.get('/findPrey', function(req, res){
    let prey = ['Elk\n','Dear\n', 'fish\n', 'No fruits to be found!!\n']
    let randomIndex = Math.floor(Math.random() * prey.length);
    foundPrey = prey[randomIndex]
    res.send(prey[randomIndex])

})

router.get('/startHunt', function(req, res){
    res.send(greenOrRed.startHunt(foundPrey))
    
})

router.get('/successfulHunt', function(req, res){
    res.send(greenOrRed.successWithHunt())
    
})

module.exports = router
