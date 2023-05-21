let circles=[];
let id=null;

const cv = document.querySelector("canvas");
const gc = cv.getContext("2d");
const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
	const rx = parseInt(Math.random() * cv.width);
	const ry = parseInt(Math.random() * cv.height);

	const rc = {x:rx, y:ry, r:50, width:5, style:"blue"};
	circles.push(rc);
	if(id == null) {
		id = setInterval(rightDraw, 10);
	}
});

function rightDraw() {
	gc.clearRect(0, 0, cv.width, cv.height);
	for (let i of circles) {
		i.x +=1;
		i.y -=1;
		gc.lineWidth = i.width;
		gc.strokeStyle = i.style;
		gc.beginPath();
		gc.arc(i.x, i.y, i.r, 0, 2 * Math.PI);
		gc.stroke();
	}
}