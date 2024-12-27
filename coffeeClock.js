/*Coffee Clock*/
var time = new Object();
time.min = 0;
time.hr = 12;
time.am_pm = "am";
var bt = new Object();
var temp;

window.setInterval(clockCount, 1000);

function clockCount(){
	if(time.hr < 11){
		if(time.min < 59){
			time.min++;
		}else{
			time.min = 0;
			time.hr++;
		}
	}else if(time.hr == 12){
		if(time.min < 59){
			time.min++;
		}else{
			time.min = 0;
			time.hr = 1;
		}
	}else if(time.hr == 11){
		if(time.min < 59){
			time.min++;
		}else{
			time.min = 0;
			time.hr++;
			if(time.am_pm == "am"){
				time.am_pm = "pm";
			}else{
				time.am_pm = "am"
		}
		}
	}
	if(time.min < 59 && time.min < 10){
		document.getElementById("clockDisp").innerHTML = time.hr + ":0" + time.min + time.am_pm;
	}else{
		document.getElementById("clockDisp").innerHTML = time.hr + ":" + time.min + time.am_pm;
	}
	brew();
}

function brewTimeSet(tshr,tsmin,tsampm){
	bt.hr = Number(tshr);
	bt.min = Number(tsmin);
	bt.ampm = tsampm;
	if(time.min < 59 && time.min < 10){
		document.getElementById("brewTime").innerHTML = bt.hr + ":0" + bt.min + bt.ampm;
	}else{
		document.getElementById("brewTime").innerHTML = bt.hr + ":" + bt.min + bt.ampm;
	}
}

function brew(){
	if(time.hr == bt.hr && time.min == bt.min && time.am_pm == bt.ampm){
		window.alert("Brewing Fresh Pot");
		cP.isFull = true;
		cP.isHot = true;
		cP.isFresh = true;
		temp = 200;
		lvl = 8;
		document.getElementById("Coffee").src = "images/fullCoffee.png";
		window.setInterval(tempDec,500);
	}else{
		//no coffee
	}
}

function tempDec(){
	if (temp > 90){
		temp--;
	}else{
		//Already room temperature
	}
	document.getElementById("temperature").innerHTML = temp + "[deg.]";
}