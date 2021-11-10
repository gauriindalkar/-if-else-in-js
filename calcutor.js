var readlineSync = require('readline-sync');
var num=readlineSync.questionInt("enter number");
var num1=readlineSync.questionInt("enter number");
var symbol=readlineSync.questionInt("enter symbol");
if (symbol=="+"){
    console.log(num+num1)
}
else if (symbol=="-"){
    console.log(num-num1)
}
else if (symbol=="*"){
    console.log(num*num1)
}
else if (symbol=="/"){
    console.log(num/num1)
}
else if (symbol=="%"){
    console.log(num%num1)
}
else if (symbol=="++"){
    console.log(num++)
}
else if (symbol=="--"){
    console.log(--num)
}
else if (symbol=="=="){
    console.log(num==num1)
}
else if (symbol=="==="){
    console.log(num===num1)
}
else if (symbol=="!="){
    console.log(num!=num1)
}
else if (symbol==">"){
    console.log(num>num1)
}
else if (symbol=="<"){
    console.log(num<num1)
}
else if (symbol=="<="){
    console.log(num<=num1)
}
else if (symbol==">="){
    console.log(num>=num1)
}
else if (symbol=="+="){
    console.log(num+=num1)
}
else if (symbol=="-="){
    console.log(num-=num1)
}
else if (symbol=="*="){
    console.log(num*=num1)
}
else if (symbol=="/="){
    console.log(num/=num1)
}
else if (symbol=="%="){
    console.log(num%=num1)
}
else if (symbol=="**="){
    console.log(num**=num1)
}
else if (symbol=="&&"){
    console.log(num&&num1)
}
else if (symbol=="||"){
    console.log(num||num1)
}
else if (symbol=="!"){
    console.log(num!=num1)
}
else{
    console.log("This is not symbol")
}