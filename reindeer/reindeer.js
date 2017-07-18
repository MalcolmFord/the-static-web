console.log("It works");
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

let sentence = "";

var hohohoElement = document.getElementById("reindeer");

for (i=0; i<reindeer.length && reindeer.length <= colors.length; i++){
  let currentReindeer = reindeer[i];
  let currentColor = colors[i];
  hohohoElement.innerHTML += `${currentColor} ${currentReindeer} <br>`
}
