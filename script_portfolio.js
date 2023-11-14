

var countElStrikes = document.getElementById("count-el-strikes");

var countElBalls = document.getElementById("count-el-balls");

var countElBatter = document.getElementById("count-el-batter");

var countElResult = document.getElementById("count-el-previous");

var countStrikes = 0;

var countBalls = 0;

var count = 0;


function strikes() {
	
  	if (countStrikes == 3) {
  		countElBatter.textContent = "Out";
	}
	if(countStrikes >= 4) {
    		countStrikes = 0;
    		countBalls = 0;
    		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
    		document.getElementById("count-el-balls").innerHTML = countBalls; 
    		countElBatter.textContent = "";
   	}
	console.log("countStrikes")
} 

function balls() {
	
  	if (countBalls == 4) {
  		countElBatter.textContent = "Walk";
 	}
  	if(countBalls >= 5) {
  		countStrikes = 0;
		countBalls = 0;
  		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  		document.getElementById("count-el-balls").innerHTML = countBalls; 
    		countElBatter.innerText = "";
	}
	console.log("countBalls")
}

function save(){
	
	result = countElBatter.innerText;
	if ( result == "Walk" || result == "Out" ) {
    		countElResult.textContent += result + " - ";
    		countStrikes = 0;
		countBalls = 0;
  		document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  		document.getElementById("count-el-balls").innerHTML = countBalls;
  		countElBatter.innerText = "";
  	}
	console.log("result")
}


function reset() {
	
  	countStrikes = 0;
  	countBalls = 0;
  	countElResult.innerText = " - ";
  	document.getElementById("count-el-strikes").innerHTML = countStrikes; 
  	document.getElementById("count-el-balls").innerHTML = countBalls;
  	countElBatter.innerText = "";
	console.log("countStrikes")
}
