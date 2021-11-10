var a=require('readline-sync');
var age=a.questionInt("enter number");
if (age>=25){
    console.log("i am legally drinking")
}else if (age>=24){
    console.log("i am legally marriage")
}else if (age>=21){
    console.log("i am legally driver")
}else if (age>=18){
    console.log("i am legally votter")
}else if (age>=5){
    console.log("i am go to school")
}