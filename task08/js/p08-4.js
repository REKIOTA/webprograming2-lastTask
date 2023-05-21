const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
	rdCount();
});
		
function rdCount() {
	let count = Number(document.querySelector("#inp").value);
	let i = 0;
	let rd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	while (i < count) {
		n = parseInt(Math.random()*10);
		i += 1;
		rd[n] += 1;
	}

	document.querySelector("#rd0").textContent = rd[0];
	document.querySelector("#rd1").textContent = rd[1];
	document.querySelector("#rd2").textContent = rd[2];
	document.querySelector("#rd3").textContent = rd[3];
	document.querySelector("#rd4").textContent = rd[4];
	document.querySelector("#rd5").textContent = rd[5];
	document.querySelector("#rd6").textContent = rd[6];
	document.querySelector("#rd7").textContent = rd[7];
	document.querySelector("#rd8").textContent = rd[8];
	document.querySelector("#rd9").textContent = rd[9];
}