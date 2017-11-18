var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;//time costs between each fps

var bgPic = new Image();

var ane;
var fruit;
var mon;

document.body.onload = game;

function game() {
    init();
    // console.log("start");
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();

}

function init() {
    //get canvas context
    can1 = document.getElementById("canvas1");//fishes, dust, UI, circle
    ctx1 = can1.getContext("2d");

    can2 = document.getElementById("canvas2");//background, ane, foods
    ctx2 = can1.getContext("2d");

    bgPic.src = "./src/background.jpg";
    this.canWidth = can1.width;
    this.canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mon = new monObj();
    mon.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();


    // ctx1.clearRect(0, 0, canWidth, canHeight);
    mon.draw();
    // console.log(deltaTime);
}