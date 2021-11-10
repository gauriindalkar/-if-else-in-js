var input = require('readline-sync');
console.log("create facebook account")
language = input.question("enter the language :")
if (language == "enlish" || "hindi" || "marathi"){
    name = input.question("enter your name and surname :")
    if (name == "gauriindalkar"){
        email_id=input.question("enter your email id :")
        if (email_id == "indalkargauri@gmail.com"){
            password = input.questionInt("enter password :") 
            if (password == password){
                gender = input.question("enter the gender :")
                if (gender == "male" || "female" || "other"){
                    console.log("vaild")
                }else{
                    console.log("invalid")
                }
            }else{
                console.log("invaild")
            }
        }else{
            console.log("invalid")
        }
    }else{
        console.log("invalid")
    }
}else{
    console.log("invalid")
}

