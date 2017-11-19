var fruitObj = function () {
    this.alive = [];//bool
    this.x = [];
    this.y = [];
    this.l = [];//size
    this.spd = [];//speed
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random() * 0.02 + 0.01;
        this.fruitType[i] = "";
        // this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        //draw fruit
        if (this.alive[i]) {
            if(this.fruitType[i] == "blue"){
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
            if (this.l[i] <= 14) {
                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * 3 * deltaTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < 10) {
                // this.alive[i] = false;
                fruit.dead(i);
            }
        }
        // console.log("fruit " + i + " : " + this.x[i] + " " + this.y[i]);
    }

}

fruitObj.prototype.born = function (i) {
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.2){
        this.fruitType[i] = "blue";
    }else{
        this.fruitType[i] = "orange";
    }
    // console.log(canHeight);
}

fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
    // console.log("fruit " + i + " is dead");
}

function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            num++;
        }
    }
    if (num < 15) {
        sendFruit();
        return;
    }

}

function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            // console.log("fruit " + i + " has been sent");
            return;
        }
    }
}

// fruitObj.prototype.update = function () {
//     var num = 0;
//     for (var i = 0; i < this.num; i++) {
//         if (this.alive) {
//             num++;
//         }
//     }
// }