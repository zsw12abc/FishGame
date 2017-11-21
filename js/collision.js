//check the distance between fruit and big fish
function monFruitsCollision() {
    // console.log("run collision");
    if (!data.gameOver) {
        for (var i = 0; i < fruit.num; i++) {
            if (fruit.alive[i]) {
                //check distance
                var l = calLength2(fruit.x[i], fruit.y[i], mon.x, mon.y);
                if (l < 900) {
                    // fruit is eaten
                    fruit.dead(i);
                    mon.bigBodyCount++;
                    if (mon.bigBodyCount > 7) {
                        mon.bigBodyCount = 7;
                    }

                    //blue fruit will double the score
                    if (fruit.fruitType[i] === "blue") {
                        data.double = 2;
                    } else {
                        data.fruitNum++;
                    }
                    // console.log("fruit " + i + " has been eaten");
                }
            }
        }
    }
}


//mon feed baby
function monBabyCollision() {
    if (data.fruitNum > 0 && !data.gameOver) {
        var l = calLength2(mon.x, mon.y, baby.x, baby.y);
        if (l < 900) {
            //baby recover
            baby.babyBodyCount = 0;
            mon.bigBodyCount = 0;
            //score update
            data.addScore();
            data.reset();
        }
    }
}