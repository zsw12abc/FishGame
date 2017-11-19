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