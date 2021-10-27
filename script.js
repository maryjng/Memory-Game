const gameContainer = document.getElementById("game");
const gameDiv = gameContainer.querySelector("div");

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
  gameContainer.setAttribute("data-flip", 0);

  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // // give it a class attribute for the value we are looping over
    // newDiv.classList.add(color);
    // newDiv.classList.toggle(color);
    newDiv.setAttribute("data-color", color);
    newDiv.setAttribute("data-flip", "down");
    // newDiv.setAttribute("data-clicked", clicked);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(e) {
  assignedColor = e.target.getAttribute("data-color")
  //assign the correct class based on data attribute

  //check if there are 2 cards face up
  //if not then flip the clicked one up and add one to the face up card count
  if (e.target.parentElement.dataset.flip < 2){
    e.target.classList.add(assignedColor);
    if (e.target.dataset.flip === "down"){
      e.target.dataset.flip = "up";
      e.target.parentElement.dataset.flip += 1;
      }
    console.log("you just clicked", e.target);
    }

    //this doesn't work
  if (e.target.parentElement.dataset.flip === 2){
    const flippedCards = gameContainer.querySelectorAll("[data-flip = 'up']")
    const arrFlippedCards = Array.from(flippedCards)
    if(arrFlippedCards[0] === arrFlippedCards[1]){
      for (let card in flippedCards){
        card.removeEventListener("click", handleCardClick);
      }
    }
    // else{
    //   setTimeout(function(){
    //     for (let card in flippedCards){
    //       card.classList.remove(assignedColor)
    //       }
    //     }, 1000);
    //   }
    gameContainer.dataset.flip = 0

  }
}


// when the DOM loads
createDivsForColors(shuffledColors);
