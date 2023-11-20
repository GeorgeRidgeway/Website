let cardElFirstPlayer = document.getElementById("card-el-first-player")

let cardElSecondPlayer = document.getElementById("card-el-second-player");

let cardElFirstDealer = document.getElementById("card-el-first-dealer");

let cardElSecondDealer = document.getElementById("card-el-second-dealer");

let winnerHand = document.getElementById("el-winner");

let masterWager = document.getElementById("el-wager");

let masterBankRoll = document.getElementById("el-bankroll");

let currentBankRoll = 100;

masterBankRoll.innerText = 100;

let firstCardPlayer;
let secondCardPlayer;
    
let firstCardDealer;
let secondCardDealer;

let totalWager = 0;

function wager() {
	
	var inputElement = document.getElementById("el-wager-input");
  var inputWager = parseFloat(inputElement.value);
  
			if (!isNaN(inputWager)) {
        inputElement.placeholder = "You entered: " + inputWager;
        totalWager += inputWager;
        currentBankRoll -= inputWager
      } 
      if (totalWager == 0){
      	alert("place wager")
      }
      	else {
      	inputElement.value = "";
        inputElement.placeholder = "Invalid number.";
      }
	masterWager.innerText = totalWager;
  masterBankRoll.innerText = currentBankRoll;
}



function checkEnter(event) {
      if (event.key === "Enter") {
        wager();
      }
}

  
function deal() {  

	if (totalWager == 0){
  	alert("place wager")
  }

	firstCardPlayer = Math.floor(Math.random() * 10) + 2;
  secondCardPlayer = Math.floor(Math.random() * 10) + 2;

  firstCardDealer = Math.floor(Math.random() * 10) + 2;
  secondCardDealer = Math.floor(Math.random() * 10) + 2;
  
  cardElFirstPlayer.innerText = firstCardPlayer
  cardElSecondPlayer.innerText = secondCardPlayer
  
  cardElFirstDealer.innerText = firstCardDealer
  cardElSecondDealer.innerText = secondCardDealer
  
  console.log(firstCardPlayer)
  console.log(secondCardPlayer)
  
  sumDealer = firstCardDealer + secondCardDealer
  console.log("Dealer",sumDealer)
  
  sumPlayer = firstCardPlayer + secondCardPlayer
	console.log("Player", sumPlayer)
  
  if (sumDealer === 21){
  	winnerHand.innerText = "Dealer"
  } 
  else if (sumPlayer == 21){
  	winnerHand.innerText = "Player"
    winBankRoll = currentBankRoll + (2*wager)
  	masterBankRoll.innerText = winBankRoll
  }
}

totalValuePlayer = 0;

function hit() {

	sumDealer = firstCardDealer + secondCardDealer
  sumPlayer = firstCardPlayer + secondCardPlayer
  
  randomNumber = Math.floor(Math.random() * 10) + 2;
  console.log("randomNumber", randomNumber);
  
  totalValuePlayer += randomNumber;
   
  newSumPlayer = sumPlayer + totalValuePlayer
  console.log("newSumPlayer", newSumPlayer);
  
  if (newSumPlayer > 21){
  	winnerHand.innerText = "Dealer"
    console.log('bust')
  }
  else if (newSumPlayer == 21){
  	hitDealer();
    console.log(sumDealer)
    if (sumDealer === 21){
    	winnerHand.innerText = "Dealer"
      console.log('TestDealer')
    }
    else if (sumDealer > newSumPlayer){
    	winnerHand.innerText = "Dealer"
    	console.log('TestDealer')
    }
    else if (newSumPlayer > sumDealer){
    	winnerHand.innerText = "Player"
      masterBankRoll += totalWager
    	console.log('TestPlayer')
    }
  }
  else if (newSumPlayer < 21){
  	hitDealer();
    console.log(sumDealer)
    if (sumDealer === 21){
    	winnerHand.innerText = "Dealer"
      console.log('Dealer')
    }
    else if (sumDealer > newSumPlayer){
    	winnerHand.innerText = "Dealer"
    	console.log('Dealer')
    }
    else if (newSumPlayer > sumDealer){
    	winnerHand.innerText = "Player"
      masterBankRoll.innerText = currentBankRoll + (2*totalWager)
    	console.log('Player')
    }
  }
}

function stand() {
	hitDealer();
  console.log(sumDealer)
  if (sumDealer === 21){
  	winnerHand.innerText = "Dealer"
    console.log('Dealer')
  }
  else if (sumDealer > newSumPlayer){
  	winnerHand.innerText = "Dealer"
  	console.log('Dealer')
  }
  else if (newSumPlayer > sumDealer){
  	winnerHand.innerText = "Player"
    masterBankRoll.innerText = currentBankRoll + totalWager
  	console.log('Player')
  }
}

dealerCards = [];

function hitDealer() {

	while (sumDealer < 17) {
		let newCard = Math.floor(Math.random() * 10) + 2;
    dealerCards.push(newCard);
    dealerSum = dealerCards.reduce((sum, card) => sum + card, 0);
 	}
  if (sumDealer === 21) {
  	winnerHand.innerText = "Dealer";
  } else if (sumDealer > 21) {
  	winnerHand.innerText = "Player";
  } else {
  	winnerHand.innerText = "None";
  }
}

function reset() {  
	firstCardPlayer = 0
  secondCardPlayer = 0
  firstCardDealer = 0
  secondCardDealer = 0
  masterWager.innerText = 0;
  totalWager = 0
  winnerHand.innerText = "";
  
  cardElFirstPlayer.innerText = 0
  cardElSecondPlayer.innerText = 0
  
  cardElFirstDealer.innerText = 0
  cardElSecondDealer.innerText = 0
  
  console.log(firstCardPlayer)
  console.log(secondCardPlayer)
}



let countElStrikes = document.getElementById("count-el-strikes")

let countElBalls = document.getElementById("count-el-balls")

let countElBatter = document.getElementById("count-el-batter")

let countElResult = document.getElementById("count-el-previous")

let countStrikes = 0

let countBalls = 0

let count = 0


function strikes() {
  countStrikes += 1
  countElStrikes.innerText = countStrikes
  console.log(countElStrikes.innerText)
  if (countStrikes == 3) {
  	countElBatter.innerText = "Out"
 	console.log("Out") 
  }
  if(countStrikes >= 4) {
    	countStrikes = 0;
    	countBalls = 0;
    	document.getElementById("count-el-strikes").innerHTML = countStrikes; 
    	document.getElementById("count-el-balls").innerHTML = countBalls; 
    	countElBatter.innerText = ""
    	console.log("Out")
  }
} 

function balls() {
  countBalls += 1;
  countElBalls.innerText = countBalls
  console.log(countElBalls.innerText)
  if (countBalls == 4) {
  	countElBatter.innerText = "Walk"
 	console.log("Walk")
  }
  if(countBalls >= 5) {
  	countStrikes = 0;
	countBalls = 0;
  	document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  	document.getElementById("count-el-balls").innerHTML = countBalls; 
    	countElBatter.innerText = ""
 	console.log("Out")
  }
}

function save() {
  result = countElBatter.innerText
  if ( result == "Walk" || result == "Out" ) {
	countElResult.textContent += result + " - "
	countStrikes = 0;
	countBalls = 0;
  	document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  	document.getElementById("count-el-balls").innerHTML = countBalls;
  	countElBatter.innerText = ""
	console.log("Out")
  }
}


function reset() {
  countStrikes = 0;
  countBalls = 0;
  countElResult.innerText = " ";
  document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  document.getElementById("count-el-balls").innerHTML = countBalls;
  countElBatter.innerText = ""
  console.log("Out")
}
