console.log("HI NIGGA ")

const button = document.querySelector("button")
const form = document.querySelector("form")

form.addEventListener("submit", async function (e) {
	e.preventDefault()
	try {
		const seaerch = form.elements.Qol.value
		const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${seaerch}`)
		const img = res.data[0].show.image.medium
		const Nimg = document.createElement('img')
		Nimg.src = img;
		document.body.append(Nimg)

	} catch (error) {
		console.log("not found !!")
	}


})