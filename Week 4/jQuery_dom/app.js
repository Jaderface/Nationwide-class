


const addh2 = () => {
    //creating an h2
    let h2 = $('<h2>').text("Just getting started")
    $('body').append(h2)
}

// const changedh2 = () => {
//     $(h2).text("Getting warmed up");
    
// }

//     addh2()
// changedh2()

var generateSquares = (amountOfSquares) => {
    // loop to do an action for so many times
    for(var counter = 1; counter <= amountOfSquares; counter++){
        // create the square
      let square = $('<div>').addClass('square')
    //   add css to the squares
     square.css('background-color', rgbGenerator() )
      // append the square to the body
      $('body').append(square)
      }
    }
    var rgbGenerator = ()=> {
        var red =  Math.floor(Math.random() * 256) 
        var blue = Math.floor(Math.random() * 256) 
        var green = Math.floor(Math.random() * 256) 
        return "rgb(" + red + "," + green + "," + blue + ")"
    }
    generateSquares(100)




// //loop to do an action for so many times
// for(var counter = 0; counter <= 1000; counter++){
//     // create the square
//   let square = $('<div>').addClass('square')
//   // append the square to the body
//   $('body').append(square)
//   }

//   generateSquares(100)
