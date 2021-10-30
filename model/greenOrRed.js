let allLocations = [
    {name: 'garden', s:'field', contents: ['strawberry','peas'] },
    {name: 'field', n:'garden',  contents: ['pineapple','Elk'] },
]



let fruitFound
let preyFound

let playerLocation = allLocations[0]

function move(direction){
    console.log(direction, playerLocation)
    let nextRoom = playerLocation[direction]
    console.log(nextRoom)
    let lookUpRoom = allLocations.find((location) => location.name === nextRoom)
    if (lookUpRoom) {playerLocation = lookUpRoom}
}



function look(){
    return playerLocation
}

function chooseDiet(diet){
    if(diet.toLowerCase() === 'carnivore'){
        return 'You have chosen Carnivore\n'
    }else if(diet.toLowerCase() === 'vegetarian'){
        return 'You have chosen vegetarian\n'
    }else{
        return 'Not a valid response\n'
    }
}


function pickingFruits(fruits){
    if(fruits === 'Pineapple\n'){
        fruitFound = true
        return "I'm climbing a tree to find a Pineapple.\n"

        }else if(fruits === 'Strawberry\n'){
            fruitFound = true
            return 'Look at that strawberry field yum :)\n'
        }else{
            return 'Damn, nothing to eat :/\n'
    }
}

function successWithFruits(){
    if(fruitFound){
        return 'You found your fruits and they were yum!\n'
    }else{ return 'You have nothing to eat, good luck next time.\n'

    }
}

// Carni side functions

function startHunt(prey){
    if(prey === 'Elk\n'){
        preyFound = true
        return 'Are these Elk tracks?!\n'
    }else if(prey === 'Dear\n'){
        preyFound = true
        return 'Is that a Dear behind the bushes?!\n'
    }else if(prey === 'Fish\n'){
        preyFound = true
        return 'This river looks like a good place for fishing\n'
    }else{ return "Can't find anything to hunt, I'm gonna starve tonight :\\n"}
}

function successWithHunt(){
    if(preyFound){
        return "You had a successful hunt and won't be starving tonight!\n"
    }else{ return "you're gonna starve tonight >_<\n"

    }

}
module.exports = {chooseDiet, pickingFruits, successWithFruits, startHunt, successWithHunt, look, move}

