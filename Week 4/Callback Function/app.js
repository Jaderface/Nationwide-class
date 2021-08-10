// setTimeout(
//     ()=>{
//     console.log("Hello")
// },  4000)

// callback functions are functions that are passed as an 
// argument to anther function\

// camera Function is the higher order function

var cameraFunction = (callBackFunction) => {
    console.log("The camera" + callBackFunction)
}


var lensOne =()=>{
    return " is now using the macro lens"
}

var lensTwo =()=>{
    return " is now using the super macro lens"
}
// cameraFunction()


// write a function that capitalizes a word 

var capitalize = (word)=>{
  var capsWord = word[0].toUpperCase()
    console.log(capsWord)
}

var excitedWords =(word)=> {
    var happyWord = word + "!"
    console.log(happyWord)
}

capitalize("dog")

excitedWords("Hey")