/*
const reset = document.querySelector('#Reset');
const winScoreSelect = document.querySelector('#playto');

let winning = 3;
let gameOver = false;

const player1 = {
	button: document.querySelector('#player1Button'),
	score: document.querySelector('#p1Score'),
	Counts: 0
};

const player2 = {
	button: document.querySelector('#player2Button'),
	score: document.querySelector('#p2Score'),
	Counts: 0
};

function updateChanges(player, opponent) {
	if (!gameOver) {
		player.Counts++;
		if (player.Counts === winning) {
			gameOver = true;
			player.score.classList.add('winner');
			opponent.score.classList.add('loser');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.score.textContent = player.Counts;
	}
}

winScoreSelect.addEventListener('change', function () {
	winning = parseInt(this.value);
	Reset();
});

player1.button.addEventListener('click', function (evt) {
	updateChanges(player1, player2);
});

player2.button.addEventListener('click', function (evt) {
	updateChanges(player2, player1);
});

reset.addEventListener('click', Reset);

function Reset() {
	gameOver = false;
	player1.Counts = 0;
	player2.Counts = 0;
	player1.score.textContent = 0;
	player2.score.textContent = 0;
	player1.score.classList.remove('winner', 'loser');
	player2.score.classList.remove('winner', 'loser');
	player1.button.disabled = false;
	player2.button.disabled = false;
}
*/


const req = new XMLHttpRequest();

req.onload = function () {
	console.log("DONE!!")
	const data = JSON.parse(this.responseText)
	console.log("The fact is :", data.data[0].fact)
}

req.onerror = function () {
	console.log("Not DONE!!!")
	console.log(this+"a")
	
}



req.open("Get", "https://catfact.ninja/facts")
req.send()