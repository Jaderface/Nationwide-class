// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
//   console.log(capitalizeFirstLetter ('a'));
//   console.log(capitalizeFirstLetter ('new'));
//   console.log(capitalizeFirstLetter('day'));

const mySentence = "today will be great";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
console.log(words)


const anagrams = (stringA, stringB) => {

    stringA = stringA.toLowerCase().split("").sort().join("")
    stringB = stringB.toLowerCase().split("").sort().join("")
    console.log(stringA,stringB)
    // return stringA === stringB
    console.log(stringA === stringB)

 
}
anagrams('rail safety', 'fairy tales')
// anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')