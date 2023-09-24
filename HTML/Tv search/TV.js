console.log("HI NIGGA ")

const button = document.querySelector("button")
const form = document.querySelector("form")

form.addEventListener("submit", async function (e) {
	e.preventDefault()
	try {
		deleter()
		const seaerch = form.elements.Qol.value
		const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${seaerch}`)
		imagemaker(res.data)


	} catch (error) {
		console.log("not found !!")
	}

	function imagemaker(shows) {
		const line = document.createElement('ol')

		document.body.append(line)
		for (let show of shows) {
			const img = document.createElement('img')
			img.src = show.show.image.medium;


			document.body.append(img)
		}

	}
	function deleter() {
		const images = document.querySelectorAll('img')
		for (let image of images) {
			image.remove()
		}


	}

})