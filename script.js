/* Pomodoro project! Codeday Winter 2021 */
var TimerRunning = false;
var countDownDate = new Date();
// console.log(countDownDate);

var startBtn = document.getElementById("Start");
var timer = document.getElementById("clock");
var stop = false;

// countDownDate = countDownDate.getTime();

function pad(n) { // thanks stackoverflow
    return (n < 10) ? ("0" + n) : n;
}

var interval = null // placeholder
function _Countdown(){
	if(TimerRunning && timeleft > 0) {
		timeleft--;
		var minutes = Math.floor(timeleft / 60);
		var seconds = Math.floor(timeleft % 60);
		document.getElementById("mins").innerHTML = minutes + " :";
		document.getElementById("secs").innerHTML = pad(seconds) + " s";
	} else {
		clearInterval(interval);
	}
	
	if (timeleft < 1) {
		document.getElementById("mins").innerHTML = "";
		document.getElementById("secs").innerHTML= "";
		document.getElementById("end").innerHTML= "Time is up!";
	}
}
var timeleft = null // placeholder
function CountDown(time) {
	timeleft = time;
	interval = setInterval(_Countdown, 1000);
}

/*
function CountDown(){
  // console.log(pause);
  if(TimerRunning == true){
    var now = new Date().getTime();
    // console.log(now);
    var timeleft = countDownDate - now;
    // console.log(timeleft);
    var minutes = Math.floor((timeleft % (1000 * 60 * 60 )) / (1000 * 60));
    // console.log(minutes);
    var seconds = Math.floor((timeleft % (1000 * 60) / 1000));
    // console.log(seconds);
    document.getElementById("mins").innerHTML = minutes + "m";
    document.getElementById("secs").innerHTML = seconds + "s";
		if(timeleft < 0){
      clearInterval(myfunc);
      document.getElementById("mins").innerHTML = "";
      document.getElementById("secs").innerHTML= "";
      document.getElementById("end").innerHTML= "Time is up";
			StopTimer()
		}
	} else {
		
	}
}
*/

function StartTimer(){ // Time is in seconds
  if(timeleft > 1) {
		// console.log("start timer");
		startBtn.textContent = "Pause";
		startBtn.id = "Pause";
		TimerRunning = true;
		CountDown(timeleft)
  } else {
    document.getElementById("mins").innerHTML = "";
	  document.getElementById("secs").innerHTML= "";
	  document.getElementById("end").innerHTML= "";
  }
}

function StopTimer(){
	// console.log("stopping timer");
	startBtn.textContent = "Start";
	startBtn.id = "Start";
	clearInterval(interval);
	TimerRunning = false;
	document.getElementById("mins").innerHTML = "";
	document.getElementById("secs").innerHTML= "";
	document.getElementById("end").innerHTML= "";
	pause = false;
}

function ResumeTimer(){
  if(TimerRunning == false){
    // console.log("resuming timer");
    startBtn.textContent = "Pause";
    startBtn.id = "Pause";
		CountDown(timeleft);
    TimerRunning = true;
		pause = false;
  }
}

function PauseTimer(){
  if(TimerRunning == true){
		// console.log("pausing timer poggers");
		startBtn.textContent = "Resume";
		startBtn.id = "Resume";
		clearInterval(interval);
    TimerRunning = false;
		pause = true;
	}
}

function SetTimer(time){
	// console.log("Set timer to: "+time+" minutes ");
	timeleft=time*60
	var minutes = Math.floor(timeleft / 60);
	var seconds = Math.floor(timeleft % 60);
	document.getElementById("mins").innerHTML = minutes + " :";
	document.getElementById("secs").innerHTML = pad(seconds) + " s";
	TimerRunning = false;
	startBtn.textContent = "Start";
	startBtn.id = "Start";
}

var Buttonz = document.getElementById("ButtonChoices").children;
for(var b = 0; b < Buttonz.length; b++){
  Buttonz[b].onclick = function(){
		document.getElementById("end").innerHTML= "";
    ButtonPressed = this.id;
    if(ButtonPressed == "Work"){
      SetTimer(25);
      // var myfunc = setInterval(CountDown,1000);
    } else if(ButtonPressed == "Short-Break") {
			SetTimer(5);
      // var myfunc = setInterval(CountDown,1000);
		} else if(ButtonPressed == "Long-Break") {
			SetTimer(25);
      // var myfunc = setInterval(CountDown,1000);
		}
  }
}

var Buttons = document.getElementById("ButtonControl").children;
for(var i = 0; i < Buttons.length; i++){
	Buttons[i].onclick = function(){
  ButtonPressed = this.id;
		if(ButtonPressed == "Start"){
			StartTimer();
    } else if(ButtonPressed == "Pause") {
			PauseTimer();
    } else if(ButtonPressed == "Resume"){
      ResumeTimer();
		} else if (ButtonPressed == "Stop"){
			StopTimer();
		}
  }
}