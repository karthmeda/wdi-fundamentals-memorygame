// console.log("JS file is connected to HTML! Woo!")

var cards=["queen","queen","king","king"];
var cardsInPlay=[];


//variable that stores thr div element with 'game-board' id
var gameBoard=document.getElementById('game-board');

//createCards function to generate cards
var createCards =function() 

{

for (var i=0;i<cards.length;i++){
	var cardElement=document.createElement('div');
	cardElement.className="card";
	//sets attribute to value of card
	cardElement.setAttribute('data-card', cards[i]);
	//Adds 'click' event listener to cards
	cardElement.addEventListener('click', isTwoCards);
	gameBoard.appendChild(cardElement);

}

}

var isMatch = function(clickedCards) {
  
    if (clickedCards[0] === clickedCards[1]) {
      alert('You found a match!');
    } 
    else {
      alert('Sorry, try again.');
    }
    //window.location.reload();
}
//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
	 this.innerHTML = '<img src="./King.png"  alt="King" />';   
	} 
	else {
	   this.innerHTML = '<img src="./Queen.jpg" alt="Queen" />';
	}
  //if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
          {
             isMatch(cardsInPlay);
         }

	     
  //        // Remove card images
  	var faceDown = document.getElementsByClassName('card');
  for (var k = 0; k < faceDown.length; k++) {
        faceDown[k].innerHTML = '';
  }

  cardsInPlay =[];
   	
}

}



createCards();




