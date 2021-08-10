let me = {
    firstName: 'Jada',
    lastName: 'Cox',
    age: 40,
    email: 'jadacox@gmailcom'
}
// console.log(me)
console.log(me.firstName)
me.age = 1000
console.log(me.age)
me["place of residence"] = 'Ohio'
console.log(me["place of residence"])

let fancyGreeting = 'ello'
console.log(me[fancyGreeting]) 


const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }
 console.log(monster.name)
 monster.type= "creature"
 console.log(monster.type)
 monster.age= 6
 
 //ogres
 console.log(monster.name)
monster.type = "creature"
console.log(monster.type)
monster.age = 6
console.log(monster.age)
console.log("_________Ogres___________")
let adventurer = {
    name: "Joe",
    medicine: "Pepto Bismol",
    hitpoints: 10
}
let ogre = {
    name: "Ogre",
    hitpoints: 10
}
    while(adventurer.hitpoints > 0 || ogre.hitpoints > 0){
    //* creates random number
    let randNUm = Math.floor(Math.random() * 2)
    console.log(randNUm)
    //* 0 === adventurer | 1 === ogre

    if (randNUm === 0){
        ogre.hitpoints -= 1;
        if (ogre.hitpoints === 0){
            console.log(`Adventurer WINS!`);
            break;
        }
    } else if (randNUm === 1) {
        adventurer.hitpoints -= 1;
        if (adventurer.hitpoints === 0){
            console.log(`Ogre WINS!`);
            break;
        }
    }
    console.log(`Adveturer Points: ${adventurer.hitpoints}`)
    console.log(`Ogre Points: ${ogre.hitpoints}`)
}

//1. Mama cat
const cat1 = {
    name: "Pinky",
    breed: "Brain",
    age: 10
}
console.log(cat1.name)
console.log(cat1.age)
console.log(cat1.breed)
console.log("_____________________")
//2. Papa cat
const cat2 = {
    name: "Ren",
    breed: "Stimpy",
    age: 12
}
console.log(cat2.name)
console.log(cat2.age)
console.log(cat2.breed)
console.log("_____________________")
//3. Combine Cats
const combineCats = (mama, papa) => {
   return {
       name: mama.name + papa.name,
       age: 1,
       breed: mama.breed + "-" + papa.breed
   }
  }
console.log(combineCats(cat1, cat2))
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1,
cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));