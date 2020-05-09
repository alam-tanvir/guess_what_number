/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber);
let guesses = [];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Functionality for playing the whole game
 */
function playGame(){  
  // *CODE GOES BELOW HERE *
  let numberGuess =  document.getElementById('number-guess').value;
  document.getElementById('number-guess').value = '';
  if (guesses.includes(numberGuess)) {
    duplicateNumberInput();
  } else if ((numberGuess > 0) && (numberGuess < 100)) {
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
  } else {
    invalidNumberInput();
  }
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult (numberGuess){
   if (numberGuess > correctNumber) {
    showNumberAbove();
    //console.log('The number you guess is too high');
  } else if (numberGuess < correctNumber) {
    showNumberBelow();  
    //console.log('The number you guess is too low');
  } else {
    showYouWon();
    //console.log('You guess is CORRECT')
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  correctNumber = getRandomNumber();
  guesses = [];
  resetResultContent();
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while (index > 0) {
    list += "<li class='list-group-item'> You guessed " + guesses[index - 1] + "</li>"
    index--;
  }
  list += '</ul>'
  console.log(list);
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "info":
      dialog = "<div class='alert alert-info' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
    case "invalid":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
    case "invalid":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
    case "duplicate":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'info' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('info', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'info' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('info', text);
  document.getElementById("result").innerHTML = dialog;
}

function invalidNumberInput(){
  const text = "Your guess is out of range";
  let dialog = getDialog('invalid', text);
  document.getElementById("result").innerHTML = dialog;
}

function duplicateNumberInput(){
  const text = "You already tried this number";
  let dialog = getDialog('duplicate', text);
  document.getElementById("result").innerHTML = dialog;
}