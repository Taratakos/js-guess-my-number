// 70. PROJECT #1: Guess My Number!

/*
// So we selected this button here using querySelector. And then we use the addEventListener method on that element to attach an event handler. And that event handler is this function here. Okay, so this is, again, just a function expression. So we wrote here a function that has a similar format as this. We simply did not assign it to any variable. Instead, we passed it directly here into the addEventListener method. So as the first argument, we had the name of the event that we're listening for, which is a click. And then as the second argument, we have this function value. And this function simply contains the code that we want to execute whenever the event happens. Also, note that we do not call this function here anywhere, right? We only define the function here, and then pass it into the event handler. But it is the JavaScript engine who will call this function as soon as the event happens.
document.querySelector('.check').addEventListener('click', function () {
  // if we want to compare numbers with numbers, we need to first convert this string to a number.
  const guess = Number(document.querySelector('.guess').value);
  // // And of course, we can also do some DOM manipulation here.
  // document.querySelector('.message').textContent = '🎉 Correct Number!';
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});

/////////////////////////////////////////
// 76. Coding challenge #1 ( implement the functionality of playing the game again)
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

//  let's define the number, between 1 and 20. We need just basically to reassign the value to secretNumber.(let)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// If we define the secret number inside this handler function then on each click, we would get a new secret number.
let score = 20;
let highscore = 0;
// refactoring code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// the name of the event is a click and then we need to specify a function so it's just an anonymous handler function.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restore the initial values of the score/message & secret Number
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //set the value to anything, here we want to set it to empty string
  document.querySelector('.guess').value = '';
  // what we need to do is to select the whole body of this page first. So it's basically this whole element <body>
  document.querySelector('body').style.backgroundColor = '#222';
  // So whenever we are manipulating a Style, we always need to specify a string. We cannot just write like a number like 30, it has to be a string.
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number';
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong/different from correct number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High' : '📉Too Low';
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😣You lost the game';
      displayMessage('😣You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // when guess is to high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😣You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😣You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
