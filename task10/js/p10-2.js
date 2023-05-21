// ==== それぞれのボタンを押した時のイベントリスナーを設定し処理を定義する ====
//テキストボックス
const tbox_inp = document.querySelector("#tbox_inp");
tbox_inp.addEventListener("input", ()=> {
	document.querySelector("#tbox_result").textContent = tbox_inp.value;
});

//スライダー
const range_inp =document.querySelector("#range_inp");
range_inp.addEventListener("input", ()=> {
	document.querySelector("#range_result").textContent = range_inp.value;
});

//テキストエリア
const tarea_inp =document.querySelector("#tarea_inp");
tarea_inp.addEventListener("input", ()=> {
	document.querySelector("#tarea_result").textContent = tarea_inp.value;
});

//ラジオボタン
const rbtn_inp = document.querySelector("#rbtn_inp");
rbtn_inp.addEventListener("change", ()=> {
	let result = "";
	radio_inp =document.querySelectorAll("input[name='language']");
	for (let i = 0; i < radio_inp.length; i++) {
		if (radio_inp[i].checked) {
			result = radio_inp[i].value;
		}
	}
	document.querySelector("#rbtn_result").textContent = result;
});

//チェックボックス
const cbox_inp = document.querySelector("#cbox_inp");
cbox_inp.addEventListener("change", ()=> {
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
const select1_inp =document.querySelector("#select1_inp");
select1_inp.addEventListener("change", ()=> {
	document.querySelector("#select1_result").textContent = select1_inp.value;
});

//メニュー（複数）
const selectm_inp = document.querySelector("#selectm_inp");
selectm_inp.addEventListener("change", ()=> {
	let result = [];
	let selectm_inp1 = document.querySelector("#selectm_inp").options;
	for (let k = 0; k < selectm_inp1.length; k++) {
		if (selectm_inp1[k].selected) {
			result.push(selectm_inp1[k].value);
		}
	}
	document.querySelector("#selectm_result").textContent = result;
});