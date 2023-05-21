// ==== それぞれのボタンを押した時のイベントリスナーを設定し処理を定義する ====
//テキストボックス
const tbox_btn = document.querySelector("#tbox_btn");
tbox_btn.addEventListener("click", ()=> {
    let tbox_inp = document.querySelector("#tbox_inp").value;
    document.querySelector("#tbox_result").textContent = tbox_inp;
});

//スライダー
const range_btn = document.querySelector("#range_btn");
range_btn.addEventListener("click", ()=> {
	let range_inp = document.querySelector("#range_inp").value;
	document.querySelector("#range_result").textContent = range_inp;
});

//テキストエリア
const tarea_btn = document.querySelector("#tarea_btn");
tarea_btn.addEventListener("click", ()=> {
	let tarea_inp = document.querySelector("#tarea_inp").value;
	document.querySelector("#tarea_result").textContent = tarea_inp;
});

//ラジオボタン
const rbtn_btn = document.querySelector("#rbtn_btn");
rbtn_btn.addEventListener("click", ()=> {
	let result = "";
    let rbtn_inp = document.querySelectorAll("input[name='language']");
	for (let i = 0; i < rbtn_inp.length; i++) {
		if (rbtn_inp[i].checked) {
			result = rbtn_inp[i].value;
		}
	}
	document.querySelector("#rbtn_result").textContent = result;
});

//チェックボックス
const cbox_btn = document.querySelector("#cbox_btn");
cbox_btn.addEventListener("click", ()=> {
	let result = [];
	let cbox_inp = document.querySelectorAll("input[name='animation']");
	for (let j = 0; j < cbox_inp.length; j++) {
		if (cbox_inp[j].checked ) {
			result.push(cbox_inp[j].value);
		}
	}
	document.querySelector("#cbox_result").textContent = result;
});

//メニュー（単一）
const select1_btn =document.querySelector("#select1_btn");
select1_btn.addEventListener("click", ()=> {
	let select1_inp = document.querySelector("#select1_inp").value;
	document.querySelector("#select1_result").textContent = select1_inp;
});

//メニュー（複数）
const selectm_btn = document.querySelector("#selectm_btn");
selectm_btn.addEventListener("click", ()=> {
	let result = [];
	let selectm_inp = document.querySelector("#selectm_inp").options;
	for (let k = 0; k < selectm_inp.length; k++) {
		if (selectm_inp[k].selected) {
			result.push(selectm_inp[k].value);
		}
	}
	document.querySelector("#selectm_result").textContent = result;
});