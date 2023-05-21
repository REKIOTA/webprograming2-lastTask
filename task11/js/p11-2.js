const list1 = document.querySelectorAll(".list1");
for (let i = 0; i < list1.length; i++) {
	list1[i].addEventListener("mouseover", ()=> {
		list1[i].classList.toggle("animation2");
	});
	list1[i].addEventListener("mouseout", ()=> {
		list1[i].classList.toggle("animation2");
	});
}