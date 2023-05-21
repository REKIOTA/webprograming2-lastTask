const li1 = document.querySelector(".list1");
li1.addEventListener("mouseover", ()=> {
	li1.classList.toggle("animation1");
})
li1.addEventListener("mouseout", ()=> {
	li1.classList.toggle("animation1");
});