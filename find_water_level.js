var a = require('readline-sync')
var water = a.questionInt("enter a leval")
if (water<1){
    console.log("fill the water");
}
else if (water>1 && water<10){
    console.log("don't fill water");
}
else if (water>10){
    console.log("water is overflow");
}

