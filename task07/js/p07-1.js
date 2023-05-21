const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
	fortune();
});
		
function fortune() {
	let omikuji = ["大凶","凶","小吉","中吉","大吉"];
	let number = parseInt(Math.random()*5)+1;
	let result;

	switch(number) {
		case 1:
			result = omikuji[0];
			break;
		case 2:
			result = omikuji[1];
			break;
		case 3:
			result = omikuji[2];
			break;
		case 4:
			result = omikuji[3];
			break;
		case 5:
			result = omikuji[4];
			break;
	}
	document.querySelector("#result").textContent = result;
}