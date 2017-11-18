var fruitObj = function () {
    this.alive = [];//bool
    this.x = [];
    this.y = [];
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        //draw fruit
        ctx2.drawImage(this.orange, this.x[i], this.y[i]);
        // console.log("fruit " + i + " : " + this.x[i] + " " + this.y[i]);
    }
}

fruitObj.prototype.born = function (i) {
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    // console.log(canHeight);
}

fruitObj.prototype.update = function () {
    var num = 0;
    for (var i = 0; i < this.num; i++) {
        if (this.alive) {
            num++;
        }
    }
}