var babyObj = function () {
    this.x;
    this.y;
    this.angle;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;
}

babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    // this.babyEye.src = "./src/babyEye0.png"
    this.babyBody.src = "./src/babyFade0.png"
    // this.babyTail.src = "./src/babyTail0.png"
}

babyObj.prototype.draw = function () {
    this.x = lerpDistance(mon.x, this.x, 0.995);
    this.y = lerpDistance(mon.y, this.y, 0.995);

    var deltaY = mon.y - this.y;
    var deltaX = mon.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//-PI, PI

    this.angle = lerpAngle(beta, this.angle, 0.6);

    //baby tail time count
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        //set the timer to 0
        this.babyTailTimer %= 50;
    }

    //baby eye time count
    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;

        if (this.babyEyeCount == 0) {
            this.babyEyeInterval = Math.random() * 1500 + 1000;
        }else{
            this.babyEyeInterval = 300;
        }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    var babyTailCount = this.babyTailCount;
    ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 23, -babyTail[babyTailCount].height * 0.5);
    ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);
    ctx1.restore();
}