console.log("Js works");
// This is the addition
for (i = 5; i <= 120; i+=10){
  console.log(i);
}

// This is the division

for (i = 4096; i >= 1; i/=2){
  console.log("This is the division", i);
}

/* What this code is doing is :
1) creating an array of the presidents
2) creating a for loop that is the length of the array
3) concatining the sentence togther
IMPORTANT: in order to get the NUMBER of the index but not the content simply use the i.
This takes the number of the index that your on from the for loop/array.
P.S. : use parseInt() inorder to tell Javascript that i and the +1 are numbers, therfore it does a math opperation not a concation. */

let AmericianP = ["Jorge Wahsington", "Malcolm Ford", "Donald Trump"];

for (i = 0; i < AmericianP.length; i++){

  console.log("President #" + parseInt(i+1) + " was " + AmericianP[i]);

   }


  // //this is an array that
  // let presidentsss = ["#1 Georgie", "#2 Tommy", "#3 Bertha"];
  // for (let i = 0; i < presidentsss.length; i++) {
  //     console.log("President", presidentsss[i]);
  // }
  //
  // let president = ["#1 Georgie", "#2 Tommy", "#3 Bertha"];
  // president.forEach(function(pres, index) {
  //     console.log("President", pres, index+1);
  // });
  //
  //
  //
  //
  //
  // let presidents = [];
  //     presidents.push({
  //         number: "#1",
  //         name: "George Washington",
  //         dates: "(1789-1797)"
  //     });
  //     presidents.push({
  //         number: "#2",
  //         name: "John Adams",
  //         dates: " (1797-1801)"
  //     });
  //     presidents.push({
  //         number: "#3",
  //         name: "Thomas Jefferson",
  //         dates: "(1808-1809)"
  //     });
  //     presidents.push({
  //         number: "#4",
  //         name: "James Madison",
  //         dates: "(1809-1817)"
  //     });
  //     presidents.push({
  //         number: "#5",
  //         name: "James Monroe",
  //         dates: "(1817-1825)"
  //     });
  //     presidents.push({
  //         number: "#6",
  //         name: "John Quincy Adams",
  //         dates: "(1825-1829)"
  //     });
  //
  //
  // presidents.forEach(function(item, index){
  //     console.log("President", `${item.number} ${index+1}: ${item.name} was president ${item.dates}`);
  //
  // });

  // Object iteration:

  var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}


   Object.keys(antSpecies).forEach(function(key) {
        console.log(key);
    });
