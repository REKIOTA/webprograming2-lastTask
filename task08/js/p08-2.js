const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
	numMax();
});
		
function numMax() {
	let numStr = document.querySelector("#number").value;
	let numAry = numStr.split(",");
	let max = Number(numAry[0]);
	let i = 0;
	while (i < numAry.length) {
		if (max < Number(numAry[i])) {
			max = Number(numAry[i]);
		}
		i +=1;
	}
	document.querySelector("span").textContent = max;
}