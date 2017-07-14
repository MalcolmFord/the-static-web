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
