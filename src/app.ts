
function replaceWavy() {
	document.querySelectorAll("span.wavy").forEach(el => {
		let text = el.textContent? el.textContent : ""
		el.textContent = ""
		for (let i = 0; i < text.length; i++) {
			let child = document.createElement("span")
			child.textContent = text[i]
			if (text[i] == " ") {
				child.textContent = "\u00A0"
			}
			child.style.animationDelay = `${i * -0.05}s`
			el.appendChild(child)
		}
	})
}

export default {
	// optionally provide callback functions for each route
	routes: {
		"": "",
		"home": "",
		"about": "",
		"folio": "",
		"cv": "",
		"folio/code": "",
		"folio/art": "",
		"folio/games": "",
	} as Record<string, string>,

	current_route: "",

	mounted() {
		//@ts-ignore
		document.getElementById("app").style.visibility = "visible"
		this.handle_route_change()
		this.add_routes()
		replaceWavy()

		window.onmousemove = (e) => {
			let x = -(e.x / window.innerWidth) * 16 - 24
			let y = -(e.y / window.innerHeight) * 16 - 24
			//@ts-ignore
			document.getElementById("pfp").style.objectPosition = `${x}px ${y}px`
		}
	},

	handle_route_change() {
		for (let [route, handler] of Object.entries(this.routes)) {
			let hash = window.location.hash.replace("#/", "")
			if (hash == route) {
				this.current_route = route
				if (this.hasOwnProperty(handler)) {
					//@ts-ignore
					if (this[handler] instanceof Function) {
						//@ts-ignore
						this[handler]()
					}
				}
			}
		}
	},

	add_routes() {
		window.onhashchange = () => {
			this.handle_route_change()
			replaceWavy()
		}
	},

	tab(page: string) {
		return this.current_route.includes(page)  ? `> ${page}` : page
	}
}