'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 3;
let highScore = 0;

function messageTextContent(message) {
	document.querySelector('.message').textContent = `${message}`;
}

function scoreTextContent(textContent) {
	document.querySelector('.score').textContent = `${textContent}`;
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	// console.log(guess);

	if (!guess) {
		//  when player doesn't guess a number
		messageTextContent('⛔ No Number!');
		// when player guess correct number
	} else if (guess === secretNumber) {
		messageTextContent('🎉 Correct Number');
		score++;
		scoreTextContent(score);
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = secretNumber;

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
		// if guess is grater than secret number
	} else if (guess !== secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent =
				guess > secretNumber ? '⬆ Too High' : '⬇ Too Low';
			score--;
			scoreTextContent(score);
		} else {
			messageTextContent('👎 You Lost');
			scoreTextContent(0);
			document.querySelector('body').style.backgroundColor = '#882626';
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	document.querySelector('.guess').value = '';
	messageTextContent('Start guessing...');
	scoreTextContent('20');
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('body').addEventListener('click', function () {
	document.querySelector('.guess').value = '';
});
