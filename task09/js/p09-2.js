let input1 = document.querySelector("#input1");
input1.addEventListener("input", ()=> {
	let result = document.querySelector("#result");
	result.textContent = input1.value ** 2 * Math.PI;
});