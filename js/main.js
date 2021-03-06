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

var mx;//mouse position
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var monTail = [];
var monEye = [];
var monBodyOra = [];
var monBodyBlue = [];

var data;
var wave;
var dust;
var dustPic = [];

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

    can1.addEventListener('mousemove', onMousemove, false);

    bgPic.src = "./src/background.jpg";
    this.canWidth = can1.width;
    this.canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mon = new monObj();
    mon.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
        monTail[i] = new Image();
        monTail[i].src = "./src/bigTail" + i + ".png";
        monBodyOra[i] = new Image();
        monBodyBlue[i] = new Image();
        monBodyOra[i].src = "./src/bigSwim" + i + ".png";
        monBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }

    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png";
        monEye[i] = new Image();
        monEye[i].src = "./src/bigEye" + i + ".png";
    }

    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = "./src/babyFade" + i + ".png";
    }

    data = new dataObj();
    wave = new waveObj();
    wave.init();

    dust = new dustObj();
    for (var i = 0; i < 7; i++) {
        dustPic[i] = new Image();
        dustPic[i].src = "./src/dust" + i + ".png";
    }
    dust.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 50) deltaTime = 50;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();


    // ctx1.clearRect(0, 0, canWidth, canHeight);
    mon.draw();
    // console.log(deltaTime);
    baby.draw();
    monFruitsCollision();
    monBabyCollision();

    data.draw();
    wave.draw();
    dust.draw();
}

function onMousemove(e) {
    if (!data.gameOver) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
            // console.log(mx);
        }
    }
}