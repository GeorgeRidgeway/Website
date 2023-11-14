

var countElStrikes = document.getElementById("count-el-strikes");

var countElBalls = document.getElementById("count-el-balls");

var countElBatter = document.getElementById("count-el-batter");

var countElResult = document.getElementById("count-el-previous");

var countStrikes = 0;

var countBalls = 0;

var count = 0;


function strikes() {
	console.log("Test")
  	if (countStrikes == 3) {
  		countElBatter.innerText = "Out";
	}
	if(countStrikes >= 4) {
    		countStrikes = 0;
    		countBalls = 0;
    		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
    		document.getElementById("count-el-balls").innerHTML = countBalls; 
    		countElBatter.innerText = "";
   	}
} 

function balls() {
	console.log("Test")
  	if (countBalls == 4) {
  		countElBatter.innerText = "Walk";
 	}
  	if(countBalls >= 5) {
  		countStrikes = 0;
		countBalls = 0;
  		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  		document.getElementById("count-el-balls").innerHTML = countBalls; 
    		countElBatter.innerText = "";
	}
}

function save(){
	console.log("Test")
	result = countElBatter.innerText;
	if ( result == "Walk" || result == "Out" ) {
    		countElResult.innerText += result + " - ";
    		countStrikes = 0;
		countBalls = 0;
  		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  		document.getElementById("count-el-balls").innerHTML = countBalls;
  		countElBatter.innerText = "";
  	}
}


function reset() {
	console.log("Test")
  	countStrikes = 0;
  	countBalls = 0;
  	countElResult.innerText = " ";
  	document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  	document.getElementById("count-el-balls").innerHTML = countBalls;
  	countElBatter.innerText = "";
}
