const p1button = document.querySelector('#player1Button')
const p2button = document.querySelector('#player2Button')
const p1Score = document.querySelector("#p1Score")
const p2Score = document.querySelector("#p2Score")
const reset = document.querySelector('#Reset')
const winScoreSelect = document.querySelector('#playto')



let p1Counts = 0;
let p2Counts = 0;
let winning = 3;
let gameOver = false;


winScoreSelect.addEventListener("change", function () {
	winning = parseInt(this.value)
	Reset()
})

p1button.addEventListener("click", function (evt) {
	if (!gameOver) {
		p1Counts++
		p1Score.textContent = p1Counts
		if (p1Counts === winning) {
			gameOver = true
			p1Score.classList.add("winner")
			p2Score.classList.add("loser")
			p1button.disabled = true
			p2button.disabled = true
		}
	}

})

p2button.addEventListener("click", function (evt) {
	if (!gameOver) {
		p2Counts++
		p2Score.textContent = p2Counts
		if (p2Counts === winning) {
			gameOver = true
			p2Score.classList.add("winner")
			p1Score.classList.add("loser")
			p1button.disabled = true
			p2button.disabled = true

		}
	}

})

reset.addEventListener("click", Reset)

function Reset() {
	gameOver = false;
	p1Counts = 0
	p2Counts = 0
	p2Score.textContent = 0
	p1Score.textContent = 0
	p1Score.classList.remove("winner", "loser")
	p2Score.classList.remove("winner", "loser")
	p1button.disabled = false
	p2button.disabled = false
}