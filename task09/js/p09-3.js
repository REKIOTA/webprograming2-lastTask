let input1 = document.querySelector("#input1");
input1.addEventListener("input", ()=> {
	// スライダーから取得した半径の値を表示
	document.querySelector("#input2").textContent = input1.value;

	// 円周計算
	let circ = document.querySelector("#circ");
	circ.textContent = Number(input1.value) * 2 * Math.PI;

	// 面積計算
	let area = document.querySelector("#area");
	area.textContent = Number(input1.value) ** 2 * Math.PI;
});