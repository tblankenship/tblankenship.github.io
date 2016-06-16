var numSquares=9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setModeButtons();
	setSquares();
	reset();
}

function setModeButtons(){
	//mode buttons
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[3].classList.remove("selected");
			modeButtons[4].classList.remove("selected");
			this.classList.add("selected");

			if (this.textContent === "Easy") {
				numSquares = 4
				document.querySelector("#container").classList.add("a");
				document.querySelector("#container").classList.remove("b");
				document.querySelector("#container").classList.remove("c");
				document.querySelector("#container").classList.remove("d");

			} else if (this.textContent === "Medium") {
				numSquares = 9
				document.querySelector("#container").classList.remove("a");
				document.querySelector("#container").classList.remove("b");
				document.querySelector("#container").classList.remove("c");
				document.querySelector("#container").classList.remove("d");

			} else if (this.textContent === "Hard") {
				numSquares = 16
				document.querySelector("#container").classList.remove("a");
				document.querySelector("#container").classList.remove("c");
				document.querySelector("#container").classList.remove("d");
				document.querySelector("#container").classList.add("b");
			} else if (this.textContent === "Insane") {
				numSquares = 25
				document.querySelector("#container").classList.remove("a");
				document.querySelector("#container").classList.remove("b");
				document.querySelector("#container").classList.remove("d");
				document.querySelector("#container").classList.add("c");
			} else if (this.textContent === "Psycho") {
				numSquares = 36
				document.querySelector("#container").classList.remove("a");
				document.querySelector("#container").classList.remove("b");
				document.querySelector("#container").classList.remove("c");
				document.querySelector("#container").classList.add("d");
			}

			reset();
		});
	}

}

function setSquares(){
	for(var i = 0; i < squares.length; i++){
		//Adding click listerns to squares
		squares[i].addEventListener("click", function(){
		//grabs color of clicked square
		var clickedColor = this.style.background;
		//compare color to the clicked color
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}


function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = pickColor();
	//Change the goal color RGB value
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}
	h1.style.background = "steelblue";

}


resetButton.addEventListener("click", function(){
	reset();
})



function changeColors(color) {
	//loop through squares
	for(var i = 0; i < squares.length; i++){
		//Change each color to match the given color
		squares[i].style.background = color;
	}
}



function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}


function generateRandomColors(num) {

	var arr = []
	//add the amount of colors to the array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;

}


function randomColor(){
	//Pick a "R"
	var r = Math.floor(Math.random() * 256)
	//Pick a "G"
	var g = Math.floor(Math.random() * 256)
	//Pick a "B"
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";

}
