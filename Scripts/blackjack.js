
/*
let cardElFirstPlayer = document.getElementById("card-el-first-player")

let cardElSecondPlayer = document.getElementById("card-el-second-player");

let cardElFirstDealer = document.getElementById("card-el-first-dealer");

let cardElSecondDealer = document.getElementById("card-el-second-dealer");

*/

let winnerHand = document.getElementById("el-winner");

let loser = document.getElementById("el-loser");

let masterWager = document.getElementById("el-wager");

let masterBankRoll = document.getElementById("el-bankroll");

let currentBankRoll = 1000;

masterBankRoll.innerText = 1000;

let firstCardPlayer;
let secondCardPlayer;
    
let firstCardDealer;
let secondCardDealer;

let totalWager = 0;

function wager() {
	var inputElement = document.getElementById("el-wager-input");
  inputWager = parseFloat(inputElement.value);
      if (currentBankRoll <= 0) {
        alert("Refresh page to reset bankroll");
        inputElement.value = "";
        return;
      }
      if (inputWager > currentBankRoll){
      	alert("Cannot wager more than is in the bank!");
        return;
      }
      if (firstCardPlayer >= 1) {
        alert("Additional wagers are not allowed.");
        inputElement.value = "";
        return;
      }
      if (!isNaN(inputWager)) {
        totalWager += inputWager;
        currentBankRoll -= inputWager;
        inputElement.placeholder = "You entered: $" + totalWager;
      }
      if (totalWager == 0){
      	alert("place wager");
      }
      	else {
      	inputElement.value = "";
      }
	masterWager.innerText = totalWager;
  masterBankRoll.innerText = currentBankRoll;
}

function checkEnter(event) {
      if (event.key === "Enter") {
        wager();
      }
}

/* https://commons.wikimedia.org/wiki/Category:Playing_cards_set_by_Byron_Knoll */

function replacePlayer (cardNumber, imageUrl){
      var imageElement = document.getElementById("playing-card-" + cardNumber);
      if (imageElement){
      	if (imageUrl){
          imageElement.src = imageUrl;
          imageElement.style.display= "flex";
        }
        else {
        	imageElement.style.display = "none";
        }
      }
}

function replaceDealer (cardNumber, imageUrl){
      var imageElement = document.getElementById("dealers-card-" + cardNumber);
      if (imageElement){
      	if (imageUrl){
          imageElement.src = imageUrl;
          imageElement.style.display= "flex";
        }
        else {
        	imageElement.style.display = "none";
        }
      }
}

let sumDealer = 0;
let sumPlayer = 0;

function deal() {  

	if (totalWager == 0){
  	alert("place wager");
    
  }
  else {

	firstCardPlayer = Math.floor(Math.random() * 10) + 2;
  
  switch (firstCardPlayer){
    case 2: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replacePlayer(2, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }

  secondCardPlayer = Math.floor(Math.random() * 10) + 2; 
  
  switch (secondCardPlayer){
    case 2: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replacePlayer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
  }  
    
  
  firstCardDealer = Math.floor(Math.random() * 10) + 2;
  
  switch (firstCardDealer){
   case 2: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(2, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
    
/*   switch (firstCardDealer){
		case 2: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(4, "https://upload.wikimedia.org/wikipedia/commons/7/7b/Jack_of_clubs2.svg");
    } */
  
  secondCardDealer = Math.floor(Math.random() * 10) + 2;
  /*
  cardElFirstPlayer.innerText = firstCardPlayer
  cardElSecondPlayer.innerText = secondCardPlayer Math.floor(Math.random() * 10) + 2;
  
  cardElFirstDealer.innerText = firstCardDealer
  cardElSecondDealer.innerText = secondCardDealer
  */
  console.log(firstCardPlayer)
  console.log(secondCardPlayer)
  
  sumDealer = firstCardDealer + secondCardDealer
  console.log("Dealer",sumDealer)
  
  sumPlayer = firstCardPlayer + secondCardPlayer
	console.log("Player", sumPlayer)
  
  if (sumDealer === 21 && sumPlayer == 21){
    winnerHand.innerText = "Push";
    loser.innerText = "";
    masterBankRoll.innerText = currentBankRoll + (totalWager);
    currentBankRoll = currentBankRoll + (totalWager);
  	console.log('Push');
    switch (secondCardDealer){
		case 2: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
  }
  
  else if (sumDealer === 21){
  	winnerHand.innerText = "Dealer";
    loser.innerText = "Player";
    switch (secondCardDealer){
		case 2: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
  } 
  else if (sumPlayer == 21){
  	winnerHand.innerText = "Player";
    loser.innerText = "Dealer";
    masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    currentBankRoll = currentBankRoll + (2*totalWager);
    switch (secondCardDealer){
		case 2: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
  }
 
}
}

let totalValuePlayer = 0;
let newSumPlayer = 0;

let hitCountPlayer = 4;

function hit() {

	if (sumDealer != 21 && sumPlayer != 21){
  
  playerHit = Math.floor(Math.random() * 10) + 2;
  console.log("playerHit", playerHit);
  
  switch (playerHit){
		case 2: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replacePlayer(hitCountPlayer, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
  hitCountPlayer++;
  
  totalValuePlayer += playerHit;
  
  newSumPlayer = sumPlayer + totalValuePlayer;
  console.log("newSumPlayer", newSumPlayer);
  
  
  if (newSumPlayer > 21){
  	winnerHand.innerText = "Dealer";
    loser.innerText = "Player";
    console.log('Player Bust');
    switch (secondCardDealer){
		case 2: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
  }
  /*
  else if (newSumPlayer === 21){
    if (newSumDealer === 21){
    	winnerHand.innerText = "Push";
      masterBankRoll.innerText = currentBankRoll + totalWager;
    	console.log('Push');
    }
    else if (newSumDealer > newSumPlayer){
    	winnerHand.innerText = "Player";
      masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    	currentBankRoll = currentBankRoll + (2*totalWager);
    	console.log('Player');
    }
    else if (newSumPlayer > newSumDealer){
    	winnerHand.innerText = "Player";
      masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    	currentBankRoll = currentBankRoll + (2*totalWager);
    	console.log('Player');
    }
  }
  else if (newSumPlayer < 21){
    if (newSumDealer === 21){
    	winnerHand.innerText = "Dealer";
      console.log('Dealer');
    }
    else if (newSumDealer > newSumPlayer && newSumDealer < 21){
    	winnerHand.innerText = "Dealer";
    	console.log('Dealer');
    }
    else if (newSumPlayer > newSumDealer && newSumDealer < 21){
    	winnerHand.innerText = "Player";
      masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    	currentBankRoll = currentBankRoll + (2*totalWager);
    	console.log('Player');
    }
  }
  */
}
}

function stand() {
	hitDealer();
  switch (secondCardDealer){
		case 2: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
  if (newSumDealer === 21){
  	winnerHand.innerText = "Dealer";
    loser.innerText = "Player";
    console.log('Dealer');
  }
  else if (newSumDealer == newSumPlayer || newSumDealer == sumPlayer){
  	winnerHand.innerText = "Push";
    loser.innerText = "";
    masterBankRoll.innerText = currentBankRoll + (totalWager);
    currentBankRoll = currentBankRoll + (totalWager);
  	console.log('Push');
  }
  else if (newSumDealer > 21){
  	winnerHand.innerText = "Player"
    loser.innerText = "Dealer";
    masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    currentBankRoll = currentBankRoll + (2*totalWager);
  	console.log('Player');
  }
  else if (newSumPlayer > newSumDealer || sumPlayer > newSumDealer){
  	winnerHand.innerText = "Player";
    loser.innerText = "Dealer";
    masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    currentBankRoll = currentBankRoll + (2*totalWager);
  	console.log('Player');
  } 
  else if (newSumDealer > newSumPlayer || newSumDealer > sumPlayer){
  	winnerHand.innerText = "Dealer"; 
    loser.innerText = "Player";
  	console.log('Dealer');
  }
}

let dealerCards = [];

let hitCountDealer = 4;

function hitDealer() {
	while (sumDealer < 17) {
  	switch (secondCardDealer){
		case 2: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(3, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
		let newCardDealer = Math.floor(Math.random() * 10) + 2;
    console.log('newCardDealer',newCardDealer);
    switch (newCardDealer){
		case 2: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/4/42/2_of_clubs.svg");
      break;  
    case 3: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/4/4d/3_of_clubs.svg");
      break;  
    case 4: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/b/b8/4_of_diamonds.svg");
      break;  
    case 5: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/8/8a/5_of_spades.svg");
      break;  
    case 6: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/7/7e/6_of_hearts.svg");
      break;  
    case 7: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/d/db/7_of_clubs.svg");
      break;  
    case 8: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/5/54/8_of_clubs.svg");
      break;  
    case 9: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/9/9d/9_of_hearts.svg");
      break;  
    case 10: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/6/68/10_of_spades.svg");
			break;  
    case 11: replaceDealer(hitCountDealer, "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg");
    }
    hitCountDealer++;
    dealerCards.push(newCardDealer);
    newSumDealer = sumDealer + dealerCards.reduce((sum, card) => sum + card, 0);
    console.log("dealerSum",newSumDealer);
    if (newSumDealer >= 17) {
      break;
    }
 	}
  if (sumDealer >= 17){
  	newSumDealer = sumDealer;
  }
  /*
  if (newSumDealer > 21) {
  	winnerHand.innerText = "Player";
    masterBankRoll.innerText = currentBankRoll + (2*totalWager);
    currentBankRoll = currentBankRoll + (2*totalWager);
  }
  */
}

function reset_blackjack() {  
	firstCardPlayer = 0;
  secondCardPlayer = 0;
  firstCardDealer = 0;
  secondCardDealer = 0;
  masterWager.innerText = 0;
  totalWager = 0;
  inputWager = 0;
  sumDealer = 0;
  newSumPlayer = 0;
  sumDealer = 0;
	sumPlayer = 0;
  newCard = 0;
  totalValuePlayer = 0;
  winnerHand.innerText = "";
  loser.innerText = "";
  inputWager = [];
  dealerCards = [];
  cardNumber = ''; 
	imageUrl = '';

	/*
	firstCardPlayer = 0;
	secondCardPlayer = 0;
	firstCardDealer = 0;
	secondCardDealer = 0;
	totalWager = 0;
	sumDealer = 0;
	sumPlayer = 0;
	totalValuePlayer = 0;
	newSumPlayer = 0;
  */
  hitCountPlayer = 4;
	hitCountDealer = 4;
  playerHit = "";
  var originalImageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg";
  replacePlayer(2, originalImageUrl);
  replacePlayer(3, originalImageUrl);
  replacePlayer(4,"");
  replacePlayer(5,"");
  replacePlayer(6,"");
  replaceDealer(2, originalImageUrl);
  replaceDealer(3, originalImageUrl);
  replaceDealer(4,"");
  replaceDealer(5,"");
  replaceDealer(6,"");

}
