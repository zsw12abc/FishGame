//check the distance between fruit and big fish
function monFruitsCollision() {
    // console.log("run collision");
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            //check distance
            var l = calLength2(fruit.x[i], fruit.y[i], mon.x, mon.y);
            if (l < 900) {
                // fruit is eaten
                fruit.dead(i);
                // console.log("fruit " + i + " has been eaten");
            }
        }
    }
}


//mon feed baby
function monBabyCollision() {
    var l = calLength2(mon.x, mon.y, baby.x, baby.y);
    if (l < 900){
        //baby recover
        baby.babyBodyCount = 0;
    }
}