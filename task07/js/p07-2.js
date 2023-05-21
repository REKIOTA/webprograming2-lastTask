let menu = ["ステーキ", "ハンバーグ", "ドリア", "グラタン", "スパゲッティ", "ライス", "スープ", "ドリンクバー"];
document.querySelector("#menuName").textContent = menu;
let orders = [];

let order1 = document.querySelector("#order1");
let offer1 = document.querySelector("#offer1");
order1.addEventListener("click", ()=> {
	order();
});
offer1.addEventListener("click", ()=> {
	offer();
});
		

function order() {
	let i = parseInt(Math.random()*8)
	orders.push(menu[i]);
	// document.querySelector("#ordered1").textContent = orders;
	let output1 = document.querySelector("#ordered1");
	output1.textContent = orders;
}

function offer() {
	orders.shift();
	let output1 = document.querySelector("#ordered1");
    output1.textContent = orders;
}