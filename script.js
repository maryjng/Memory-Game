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
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(flipped);
    newDiv.classList.add(color);
    newDiv.classList.toggle(color);
    newDiv.setAttribute("data-color", color);;
    // newDiv.setAttribute("data-clicked", clicked);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// count the number of cards that are flipped up, let flipped = 0
// (flipped = 0; flipped < 2)
    //listen for click to flip; flipped += 1
// check if the two clicked cards match
  // if not, unflip them
// reset flipped to 0

// flipped as the counter
for (let flipped = 0; flipped < 2){
  // listen for click, if a card has no flipped class it will toggle on and the counter goes up
  gameDiv.addEventListener("click", function(e){
      if (!(e.target.classList.contains(".flipped")){
          e.target.classList.toggle("flipped")
          flipped += 1
      }
  })
}
//Element.querySelectorAll('[data-attr="value"]')
const cards = gameDiv.querySelectorAll
// when flipped hits 2, compare the color class of the two cards with flipped class on.
  // if it matches, flipped = 0

// let cardOne = e.target
// let cardTwo = e.target
// if (cardOne.attribute("data-color") === cardTwo.attribute("data-color")){
// }


// a counter goes up when you click one then when you click another it hits 2 and disables all click event listeners for 1 second
// if the data-color attribute matches then remove click event listeners on those divs
// setTimeout( , 1000)
// toggle the two card classes off


// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  assignedColor = e.target.getAttribute("data-color")
  e.target.classList.toggle(assignedColor)
  console.log("you just clicked", e.target);
}



// when the DOM loads
createDivsForColors(shuffledColors);
