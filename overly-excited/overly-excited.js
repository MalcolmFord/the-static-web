// Create an array that contains the words in the sentence
let output = "";
let exclamition = "!";
let sentence = ["The" ,"walrus" ,"danced" ,"through" ,"the" ,"trees" ,"in" ,"the" ,"light" ,"of" ,"the" ,"moon"];

function addExcitement (theWordArray) {
  /*
  Write a `for` loop that iterates over the array argument and
  outputs the words.
  */

  for (let i=0; i<theWordArray.length; i++){
    let currentWord = theWordArray[i];
    output += " " + currentWord;

    if(i % 3 === 2){
      output += exclamition;
      exclamition = exclamition + "!"
    }
    console.log(output);
  }

}


// Invoke the function and pass in the array
addExcitement(sentence)










// if (sentence % 3){
//   sentence.splice(3,0, "!")
// }
//
// // The addExcitement function should accept the array as the sole argument
