

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},

];
var cardsInPlay = [];
var wins = 0;
var losses = 0;

function reset() {
	//change the images of the card to the back. 
	var cardsToReset = document.getElementsByClassName("gameCards");
	for (var i = 0; i < cardsToReset.length; i++) {
		cardsToReset[i].setAttribute("src", "images/back.png");
	}

	//empty the cardsInPlay
	cardsInPlay.splice(0,cardsInPlay.length)


	console.log("Flipped images back");
}

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.className = "gameCards";
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		//Increase number of wins
		wins++;
		document.getElementsByClassName("score")[1].innerHTML = "Wins: " + wins;
		console.log("Win!");
	}
	else{
		alert("Sorry, try again.");
		//Increase number of losses
		losses++;
		document.getElementsByClassName("score")[0].innerHTML = "Losses: " + losses;
		console.log("Loss!");
	}
}

function flipCard() {

	var cardId = this.getAttribute("data-id");

	console.log("The user flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) 
		checkForMatch();
}

createBoard();

var resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", reset);



	

