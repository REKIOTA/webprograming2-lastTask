const list1 = document.querySelectorAll("#list1 dt");
for (let i = 0; i < list1.length; i++) {
	list1[i].addEventListener("click", ()=> {
		let dd = document.querySelector("#dd0" + [i]);
		dd.classList.toggle("anim");
	})
};