/*Coffee Brewer*/

//Coffee Pot//
var cP = new Object();
cP.isFull = false;
cP.isHot = false;
cP.isFresh = false;

document.getElementById("lvlButt").onclick = function() {coffeeLvl()};
document.getElementById("hotButt").onclick = function() {coffeeHot()};
document.getElementById("frshButt").onclick = function() {coffeeFrsh()};

function coffeeLvl() {
	if(cP.isFull == true){
		document.getElementById("lvlButt").innerHTML = "Full";
	}else{
		document.getElementById("lvlButt").innerHTML = "Empty";
	}
}
function coffeeHot() {
	if(cP.isHot == true){
		document.getElementById("hotButt").innerHTML = "Hot";
	}else{
		document.getElementById("hotButt").innerHTML = "Cold";
	}
}
function coffeeFrsh() {
	if(cP.isFresh == true){
		document.getElementById("frshButt").innerHTML = "Fresh";
	}else{
		document.getElementById("frshButt").innerHTML = "Stale";
	}
}


