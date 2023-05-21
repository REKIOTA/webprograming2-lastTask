const list1 = document.querySelectorAll(".list1");
for (let i = 0; i < list1.length; i++) {
	list1[i].addEventListener("click", ()=> {
		list1[i].classList.toggle("animation3");
	});
}