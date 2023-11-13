

let countElStrikes = document.getElementById("count-el-strikes")

let countElBalls = document.getElementById("count-el-balls")

let countElBatter = document.getElementById("count-el-batter")

let countElResult = document.getElementById("count-el-previous")

let countStrikes = 0

let countBalls = 0

let count = 0


function strikes() {
	if (countElBatter.innerText !== "Walk") {
  		countStrikes += 1
  		countElStrikes.innerText = countStrikes
	}
  	if (countStrikes == 3) {
  		countElBatter.innerText = "Out"
	}
	if(countStrikes >= 4) {
    		countStrikes = 0;
    		countBalls = 0;
    		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
    		document.getElementById("count-el-balls").innerHTML = countBalls; 
    		countElBatter.innerText = ""
   	}
} 

function balls() {
	if (countElBatter.innerText !== "Out") {
		countBalls += 1;
		countElBalls.innerText = countBalls
	}
  	if (countBalls == 4) {
  		countElBatter.innerText = "Walk"
 	}
  	if(countBalls >= 5) {
  		countStrikes = 0;
		countBalls = 0;
  		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  		document.getElementById("count-el-balls").innerHTML = countBalls; 
    		countElBatter.innerText = ""
	}
}

function save(){
	result = countElBatter.innerText
	if ( result == "Walk" || result == "Out" ) {
    		countElResult.innerText += result + " - "
    		countStrikes = 0;
		countBalls = 0;
  		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  		document.getElementById("count-el-balls").innerHTML = countBalls;
  		countElBatter.innerText = ""
  	}
}


function reset() {
  countStrikes = 0;
  countBalls = 0;
  countElResult.innerText = " ";
  document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  document.getElementById("count-el-balls").innerHTML = countBalls;
  countElBatter.innerText = ""
}
