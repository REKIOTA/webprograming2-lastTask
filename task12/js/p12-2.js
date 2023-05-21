//canvasを得る
const cv = document.querySelector("canvas");
const gc = cv.getContext("2d");

//描画コンテクスト取得
let circle = {x:0, y:0, r:50};
function draw() {
    circle.x = parseInt(Math.random()*640);
    circle.y = parseInt(Math.random()*480);
    gc.beginPath();
    gc.lineWidth = 5;
    gc.strokeStyle = "blue";
    gc.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
    gc.stroke();
}

//イベントリスナーを定義
const btn =document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    draw();
});