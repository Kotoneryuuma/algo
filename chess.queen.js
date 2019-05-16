function chessmovesafe( x, y, qx, qy){
    if(x == qx || y == qy){
        return false;
    }
    else if (x + y == qx + qy){
        return false;
    }
    else if (y - x == qx - qy){
        return false;
    }
    else{
        return true;
    }
}

console.log(chessmovesafe(1,1,2,3))
// ture
console.log(chessmovesafe(2,3,1,3))
// false

// if queen can't move -> return true;


