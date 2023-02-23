//  let's define the number, between 1 and 20. We need just basically to reassign the value to secretNumber.(let)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// If we define the secret number inside this handler function then on each click, we would get a new secret number.
let score = 20;
let highscore = 0;
// refactoring code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (scoreResult) {
  document.querySelector('.score').textContent = scoreResult;
};

const findNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!'; // замість цього коду викликаємо ф-ію / рефакторинг
    displayMessage('⛔ No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 Correct Number !';
    displayMessage('🏆 Correct Number !');
    // document.querySelector('.number').textContent = secretNumber;
    findNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '🙀📈 Too High !' : '🙀📉 Too Low !';
      displayMessage(
        guess > secretNumber ? '🙀📈 Too High !' : '🙀📉 Too Low !'
      );
      score -= 1;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '👎🏻 You lost the game !';
      displayMessage('👎🏻 You lost the game !');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🙀📈 Too High !';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎🏻 You lost the game !';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🙀📉 Too Low !';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎🏻 You lost the game !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  // document.querySelector('.number').textContent = score;
  findNumber(score);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
