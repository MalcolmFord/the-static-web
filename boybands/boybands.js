console.log("Its working");
let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
let sentence = "";
let sentence2 = "";
for (i=0; i < bands.length; i++){
  sentence = bands[i];
  document.getElementById('boy-bands').innerHTML += `<li> ${sentence} </li>`;

}
console.log(sentence);

for (i=0; i < vegetables.length; i++){
  sentence2 = vegetables[i];
  document.getElementById('vegetables').innerHTML += `<li> ${sentence2} </li>`;

}
console.log(sentence2);

// document.getElementById('boy-bands').innerHTML += ` <p> ${bCounter[i]} </p>`


// document.getElementById("card").innerHTML += `<li><img src="${item.image}"</li>`







// var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
// var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
//
// // The number of loops to perform (what if the array changes?)
// var bandCount = bands.length;
// var vegCount = vegetables.length
//
// // Keep track of which band we're on in the loop
// var currentBand = bands[Tracker];
//
// // Keep track of which veggie we're on in the loop
// var currentVeggie = vegetables[loopTracker];
//
// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById("boy-bands");
//
// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = document.getElementById("vegetables");
//
// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
//
//   // Add the band names into the correct <div>
//   currentBand = "";
//
//
//   // Add the veggie names into the correct <div>
//   currentVeggie = ""
//   console.log(currentVeggie + currentBand);
// }
