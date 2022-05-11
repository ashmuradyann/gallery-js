let body = document.querySelector("body")

window.onload = function() {

	setTimeout(function() {

		body.classList.add('loaded')

		Draggable.create('.gallery', {
				bounds: 'body',
				inertia: true
			})

	}, 800)

}

let bool = false

function colorSwitch(){

	// bool = localStorage.getItem("bool") ? true : false
	
	let style = document.createElement('style')
	style.innerHTML = `body {
		background: ${bool ? "#fff" : "#000"};
		color: ${bool ? "#000" : "#fff"};
	}
	button {
		border: 1px solid ${bool ? "#000" : "#fff"};
		color: ${bool ? "#000" : "#fff"};
	}
	button:hover {
		color: ${bool ? "#fff" : "#000"};
		background-color: ${bool ? "#000" : "#fff"};
	}`;

	document.querySelector("strong").innerHTML = bool ? "dark" : "light"
	document.head.appendChild(style)
	
	localStorage.setItem("bool", bool)
	
	bool = !bool

}