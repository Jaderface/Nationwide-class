//light switch//
const y = new Boolean('light');

console.log(y.valueOf());

//email address//
let John = {
    firstName: 'John',
    lastName: 'Smith',
    Age: '40',
    email: 'johnsmith@mail.com'
}
console.log(John)
console.log(John.email)


//Take it easy//

let rainbow = ['red', 'blue', 'yellow', 'green', 'orange']
console.log(rainbow.length)
console.log(rainbow[1])

let me = {
    firstName: 'Jada',
    favFood: 'pizza',
    hobby: 'mobile games',
    town: 'Columbus',
    favDatatype: 'array'

    

}
console.log(me.hobby)


//Crazy Object//

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

  console.log (crazyObject.taco[5])
