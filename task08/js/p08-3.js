const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
	sum();
});
		
function sum() {
	let M = document.querySelector("#m").value;
	let N = document.querySelector("#n").value;
	let sum = 0;
	let i = 0;
	let count = N-M+1;
	while (i < count) {
		sum = sum + (Number(M) + Number(i));
		i +=1;
	}
	document.querySelector("span").textContent = sum;
}