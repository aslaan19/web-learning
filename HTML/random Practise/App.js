const button = document.querySelector('button')
const h1 = document.querySelector('h1')
const input = document.querySelector('input')
const form = document.querySelector('form')
const list = document.querySelector('#leaders')




form.addEventListener("submit", function (evt) {
	evt.preventDefault(); // Prevent the form from submitting

	const newName = input.value
	const newLI = document.createElement('li')
	newLI.innerText = newName
	list.append(newLI)
	/* const leader = input.value;
	const newleader = document.createElement('li');
	newleader.textContent = leader; // Use textContent to set the content

	// Append the new leader to a list (e.g., assuming you have an <ul> with id "leadersList")
	const leadersList = document.getElementById('leadersList');
	leadersList.appendChild(newleader); */

});

form.addEventListener("input", function (evt) {
	evt.preventDefault();
	h1.innerText = "welcome," + input.value;
})

/* button.addEventListener('click', function () {

	const newcoler = Randomcolor()
	document.body.style.backgroundColor = newcoler
	h1.innerText = newcoler
})

const Randomcolor = () => {
	const R = Math.floor(Math.random() * 255)
	const G = Math.floor(Math.random() * 255)
	const B = Math.floor(Math.random() * 255)
	return `rgb(${R},${G},${B})`
} */
