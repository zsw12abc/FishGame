var dustObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];
    this.id = [];
    this.alpha = 0;
};

dustObj.prototype.num = 30;
dustObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = Math.random() * 15 + 20;
        this.id[i] = Math.floor(Math.random() * 7);
    }
};

dustObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    ctx1.save();
    for (var i = 0; i < this.num; i++) {
        var id = this.id[i];
        ctx1.drawImage(dustPic[id], this.x[i] + this.amp[i] * l, this.y[i]);
    }
    ctx1.restore();
};