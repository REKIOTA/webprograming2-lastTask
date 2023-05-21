let input1 = document.querySelector("#input1");

// 円周計算
let circ = document.querySelector("#circ");
circ.addEventListener("click", ()=> {
    circle();
});

function circle() {
	let result = document.querySelector("#result");
	result.textContent = Number(input1.value) * 2 * Math.PI;
}

// 面積計算
let area = document.querySelector("#area");
area.addEventListener("click", ()=> {
	let result = document.querySelector("#result");
	result.textContent = Number(input1.value) ** 2 * Math.PI;
});