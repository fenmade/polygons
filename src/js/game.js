const polygonTemplate = document.getElementById("polygon-template");
const playArea = document.getElementById("play-area");

function makePolygon(sides) {
	let node = polygonTemplate.content.cloneNode(true);
	let points = [];

	for (let i = 0; i < sides; i++) {
		const angle = i / sides * 2 * Math.PI;

		points.push([Math.sin(angle) / 2 + .5, Math.cos(angle) / 2 + .5]);
	}

	let polygon = node.querySelector("polygon");
	polygon.setAttribute("points",
		points.map(point => `${point[0]},${point[1]}`).join(" "));
	return node;
}

function wrapClass(className, node) {
	let el = document.createElement("div");
	el.classList.add(className);
	el.appendChild(node);

	return el;
}

function animate(node) {
	return wrapClass("bouncing", wrapClass("spinning",
		node));
}

/* testing */

playArea.appendChild(animate(makePolygon(3)));
