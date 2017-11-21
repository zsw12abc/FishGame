var waveObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.color = [];
};

waveObj.prototype.num = 10;
waveObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.r[i] = 0;
    }
};

waveObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            //draw wave
            this.r[i] += deltaTime * 0.05;
            if (this.r[i] > 60) {
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 60;
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI);
            ctx1.closePath();
            if (this.color[i] === "white") {
                ctx1.strokeStyle = "rgba(255,255,255," + alpha + ")";
            } else if (this.color[i] === "blue") {
                ctx1.strokeStyle = "rgba(10,186,255," + alpha + ")";
            } else if (this.color[i] === "red") {
                ctx1.strokeStyle = "rgba(255,255,0," + alpha + ")";
            }
            ctx1.stroke();
        }
    }
    ctx1.restore();
};

waveObj.prototype.born = function (x, y, color) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            //born
            // console.log("born");
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            this.color[i] = color;
            // console.log(this.color[i]);
            return;
        }
    }
};