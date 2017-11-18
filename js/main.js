var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;//time costs between each fps

var bgPic = new Image();

document.body.onload = game;

function game() {
    init();
    // console.log("start");
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();

    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;
}

function init() {
    //get canvas context
    can1 = document.getElementById("canvas1");//fishes, dust, UI, circle
    ctx1 = can1.getContext("2d");

    can2 = document.getElementById("canvas2");//background, ane, foods
    ctx2 = can1.getContext("2d");

}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();

    console.log(deltaTime);
}