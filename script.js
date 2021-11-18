const gameContainer = document.getElementById("game");
const gameDiv = gameContainer.querySelector("div");
var flipCounter = 0

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  gameContainer.setAttribute("data-flip", flipCounter);

  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // // give it a class attribute for the value we are looping over
    newDiv.setAttribute("data-color", color);
    //also set a "flip" state data attribute of down
    newDiv.setAttribute("data-flip", "down");

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


function handleCardClick(e) {
  //assign the correct class based on data attribute
  assignedColor = e.target.getAttribute("data-color")

  //if the clicked card is already matched, ignore don't do anything
  if (e.target.dataset.flip === "matched"){
    return
  }
  //check if there are 2 cards face up
  //if not then flip the clicked one up and add one to the face up card count
  if (e.target.parentElement.dataset.flip < 2){
    e.target.classList.add(assignedColor);
    if (e.target.dataset.flip === "down"){
      e.target.dataset.flip = "up";
      flipCounter += 1
      e.target.parentElement.dataset.flip = flipCounter;
      }
    console.log("you just clicked", e.target);
    }

  let flippedCards = gameContainer.querySelectorAll("[data-flip = 'up']")
  //check if two cards are face up
  if (e.target.parentElement.dataset.flip == 2){
    //if two cards are face up, compare their colors
    let cardOne = flippedCards[0].dataset.color
    let cardTwo = flippedCards[1].dataset.color
    if (cardOne == cardTwo){
      //assign "matched" data attr if colors match
        flippedCards[0].dataset.flip = "matched";
        flippedCards[1].dataset.flip = "matched";
      }

    //unflip cards and remove color if cards do not match
    else {
      setTimeout(function(){
        flippedCards.forEach(function(card){
          let classColor = card.dataset.color
          card.classList.remove(classColor)
          card.dataset.flip = "down"
        })}, 1000);
      }
    //reset count of flipped cards whether cards were matched or not
    gameContainer.dataset.flip = 0
    flipCounter = 0

  }
  const allCards = gameContainer.children

  if (Array.from(allCards).every(function(card){
    return card.dataset.flip === "matched"} )) {
    window.alert("You won!")
  }
}


// when the DOM loads
createDivsForColors(shuffledColors);
