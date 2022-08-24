const readline = require('readline-sync')
console.log("You are in the land of villainous wizards, your goal is to walk through the dark forest vanquishing enemies as they arise to get treasure and escape with your life!")


let isAlive = true;
const name = readline.question('What is your name? ')
class Hero{
    constructor(name, hp, ap, inventory){
        this.name = name
        this.hp = hp
        this.ap = ap
        this.inventory = inventory
    }
}
const player = new Hero(name, 200, 50, "Amulet of Stealth")

class Enemy {
    constructor(name, hp, ap, inventory){
        this.name = name;
        this.hp = hp;
        this.ap = ap;
        this.inventory = inventory;
    }
}
const saruman = new Enemy("Saruman", 200, 15, "Ring of Invisibility")
const lordVoldemort = new Enemy("Lord Voldemort", 200, 15, "Elder Wand")
const jafar = new Enemy("Jafar", 200, 15, "Magic Lamp")
const enemies = [saruman, lordVoldemort, jafar]
while(isAlive){
    if(enemies.length === 0){
            console.log("You have defeated every enemy and safely escaped the dark forest, CONGRATULATIONS!")
            break
    }
    const action = readline.keyIn('Would you like to [w] Walk, [p] Print Inventory, or [q] Quit?', {limit: 'wqp'})
    
    if(action === 'w'){
        walk()
    }else if (action === 'p'){
        printInventory()
    }
    else if(action === 'q'){
        isAlive = false
        console.log('You quit the game') 
    }
}
function walk(){
    const random = Math.floor(Math.random()*3)
    if(random === 0){
        enemyEncounter()
    }else{
        console.log("You haven't been discovered yet!")
    }
}
function printInventory(){
    console.log(player)
}

function enemyEncounter(){
    const randomEnemy = Math.floor(Math.random() * enemies.length)
    const enemy = enemies[randomEnemy]
    console.log(enemy.name + " has appeared!")
    const fightOrRun = readline.keyIn('Would you like to [f] Fight or [r] Run?', {limit: 'fr'})
    if (fightOrRun === "f"){
        fight(enemy)
    } else if (fightOrRun === "r"){
        run()
    }
}

function fight(enemy){
    let fightNum = Math.floor(Math.random()*2)
    if (enemy.hp > 0){
        if (player.hp > 0 && fightNum === 0){
            takeDamage(enemy)
        } else if (player.hp > 0 && fightNum === 1){
            console.log("The enemy missed you! Quick cast a spell at " + enemy.name)
            dealDamage(enemy)
        } else {
            console.log(enemy.name + " has killed you with a magical spell!")
            isAlive = false
        } 
    }
    else {
        console.log("ALAKAZAM, your spell killed " + enemy.name)
        player.hp += player.hp + 20
        player.inventory = player.inventory + ", " + enemy.inventory
        console.log("You picked up " + enemy.inventory + " from " + enemy.name + "'s body.")
        for (let i = 0; i < enemies.length; i++){
            if (enemies[i].name === enemy.name){
                enemies.splice(i, 1)
            }
        }
    }
}

function takeDamage(enemy){
    player.hp = player.hp - enemy.ap
    console.log(`You Have Been Hit! Your HP is now ${player.hp}`)
    readline.keyInPause();
    fight(enemy)
}
function dealDamage(enemy){
    if (enemy.hp > 0){
        enemy.hp = enemy.hp - player.ap
        console.log("ABRA KADABRA! Your spell hit " + enemy.name + "! " + enemy.name + " now has " + enemy.hp + " HP") 
        readline.keyInPause();
        fight(enemy)
    }
}

function run(){
    let runNum = Math.floor(Math.random()*2)
    if(runNum === 0){
        console.log("You were caught, and killed")
        isAlive = false
    } else if (runNum === 1){
        console.log('You Escaped!')
    }
}
