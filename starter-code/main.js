// console.log("JS file is connected to HTML! Woo!")
//Declared four card variables all as string with the values "queen" and "king" respectively 
var cardOne="queen";
var cardTwo="king";
var cardThree="queen";
var cardFour="king";

//If-else statements to check for equality of the four cards
// if(cardOne===cardThree||cardTwo===cardFour){
// 	alert("Found a match");
// }
// else if(cardOne===cardFour||cardTwo===cardThree||cardOne===cardTwo||cardThree===cardFour){
// 	alert("Found a match");
// }
// else{
// 	alert("Sorry, try again.")
// }


//variable that stores thr div element with 'game-board' id
var makeBoard=document.getElementById('game-board');

//createCards function to generate cards
var createCards =function() 

{

for (var i=0;i<4;i++){
	var newCard=document.createElement('div');
	newCard.className="card";
	makeBoard.appendChild(newCard);

}

}

createCards();




