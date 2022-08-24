const readline = require('readline-sync')
console.log("Welcome to javascript Mario World!")

let gameActive = true

class Player {
    constructor (name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }
    
    theStatus = ["powerUp", "big", "small", "dead"]

    setName (namePicked) {
        this.namePicked = namePicked;
    }

    gotHit () {
        this.status--
        // for(let i = 0; i > this.theStatus.length; i++){
        //     status[2] = status[3];
         if(this.status === "dead"){
            let gameActive = false;
        }
    }
    
    getPowerup() {
        this.status++
        // for(let i = 0; i > this.theStatus.length; i++){
        //     status = status[i] +1;
        // }
    }
    
    addCoin() {
        this.totalCoins = this.totalCoins++;
    }
     print() {
        const name = this.name;
        const coins = this.totalCoins;
        const currentStatus = this.status;
        const hasStar = this.hasStar;

        console.log({
            name,
            coins,
            status: currentStatus[this.status],
            hasStar
        })
    }
}
const player = new Player ("Mario", 0, 2, false, true)

const intervalID = setInterval(function(){
    const random = Math.floor(Math.random()*3)
        if(random === 0){
            player.gotHit()
        } if(random === 1){
            player.getPowerup()
        } if(random === 2){
            player.addCoin()
        }
    player.print()
 }, 1000)

 
    
 clearInterval(intervalID)

