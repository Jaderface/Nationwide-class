// Making an app to let people in the club
// Bouncer
// Is the user over 21
// if userAge >= 21 then they can enter and drink
// if userAge < 18 then the bouncer is coming for you
// if userAge >= 18 < 21 they can enter but no drinks allowed
// if( condition to be tested){
    // work to be done 
// }
var userAge;
if(userAge >= 21){
    console.log("Welcome. Feel free to have a drink!!!")
}
else if(userAge >=18 && userAge <21){
    console.log("Please come in, but NO DRINKING!!!")
}
else{
    console.log("Bouncer calls your parents!!")
}

// 
// > < greater than less than
// && and
// || or
// * mulitiplication
// / division
// % modelo gives the remainder

 var a = 10;
 var b = 5;

 console.log(a % b)

//  
//write a program to tell whether a number is odd or even

var numberToBeTested = 2

if(numberToBeTested % 2 == 0){
    console.log("Your number is even")
    }
    else{
        console.log("Your number is odd")
    }


    // 

    
      //  for loop from 0-50
for(var counter = 0; counter <= 50; counter++){
    // if(counter % 2 == 0){
    //     console.log(counter + " This number is even")
    // }
    // else{
    //     console.log( counter + " This number is odd")
    // }
    counter %2 == 0 ? console.log(counter + "even") : console.log( counter + "odd")
}  
// 

