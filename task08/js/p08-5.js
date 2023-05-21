let cart = {};       
        
let add = document.querySelector("#add");
let show = document.querySelector("#show");
add.addEventListener("click", ()=> {
    addCart();
});
show.addEventListener("click", ()=> {
    showCart();
});
            
function addCart(){
    let Shina = document.querySelector("#shina");
    let Kosu = document.querySelector("#kosu");
    let ShinaName = Shina.value;
    let ShinaCount = Number(Kosu.value);

    if (ShinaName in cart) {
        cart[ShinaName] += ShinaCount;
    } else {
        cart[ShinaName] = ShinaCount;
    }
}

function showCart(){
    let outList = document.querySelector("#cartTable");
    outList.innerHTML = "<tr><th>品名</th><th>個数</th></tr>";
    for (let key in cart) {
        outList.innerHTML += "<tr><td>" + key + "</td><td>" + cart[key] + "</td></tr>";
    }
}