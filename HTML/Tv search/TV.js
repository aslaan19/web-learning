console.log("HI NIGGA ")

const button = document.querySelector("button")
const form = document.querySelector("form")

form.addEventListener("submit", async function (e) {
	e.preventDefault()
	try {
		const seaerch = form.elements.Qol.value
		const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${seaerch}`)
		const rd = res.data
		imagemaker(rd)
		

	} catch (error) {
		console.log("not found !!")
	}

	function imagemaker(shows) {

		for (let show of shows) {
			const img = document.createElement('img')
			img.src = show.show.image.medium;
			document.body.append(img)
		}

	}

})