var monObj = function () {
    this.x;
    this.y;
    this.angle;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

    this.bigEyeCount = 0;
    this.bigEyeTimer = 0;
    this.bigEyeInterval = 1000;
}

monObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    // this.bigTail.src = "./src/bigTail0.png";

}

monObj.prototype.draw = function () {
    //move towards mouse
    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.98);

    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//-PI, PI

    this.angle = lerpAngle(beta, this.angle, 0.5);


    this.bigTailTimer += deltaTime;
    if (this.bigTailTimer > 50) {
        this.bigTailCount = (this.bigTailCount + 1) % 8;
        this.bigTailTimer %= 50;
        // console.log("bigTailCount: "+ this.bigTailCount);
    }

    this.bigEyeTimer += deltaTime;
    if (this.bigEyeTimer > this.bigEyeInterval){
        this.bigEyeCount = (this.bigEyeCount + 1) % 2;
        this.bigEyeTimer %= this.bigEyeInterval;

        if (this.bigEyeCount === 0) {
            this.bigEyeInterval = Math.random() * 1500 + 1000;
        } else {
            this.bigEyeInterval = 300;
        }
    }


    //only works on big fish.(save => restore)
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(bigTail[this.bigTailCount], -bigTail[this.bigTailCount].width * 0.5 + 30, -bigTail[this.bigTailCount].height * 0.5);
    ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(bigEye[this.bigEyeCount], -bigEye[this.bigEyeCount].width * 0.5, -bigEye[this.bigEyeCount].height * 0.5);
    ctx1.restore();
}