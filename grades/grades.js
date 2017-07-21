let A= "";
let B= "";
let C= "";
let D= "";
let F= "";
let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
for (i=0; i< scores.length; i++){
  if (scores[i] <= 60){
    F = F +1;
  }else if (scores[i] <= 70){
    D = D+1
  }else if (scores[i] <= 80){
    C = C+1;
  }else if (scores[i] <= 90){
    B = B+1;
  }else if (scores[i] <= 100){
    A = A+1;
  }
}
let minNum = Math.min(...scores);
let maxNum = Math.max(...scores);
console.log("This works");
console.log("There are "+A.length+ " A's");
console.log("There are "+B.length+ " B's");
console.log("There are "+C.length+ " C's");
console.log("There are "+D.length+ " D's");
console.log("There are "+F.length+ " F's");
console.log("The smallest number is " + minNum);
console.log("The largest number is " + maxNum);









// for (i =0; i <= scores.length; i++){
//   switch (scores[1]) {
//     case (scores[i] <= 60):
//     F= F+1;
//     break;
//     case (scores[i] <= 70):
//     D++;
//     break;
//     case (scores[i] <= 80):
//     C++;
//     break;
//     case (scores[i] <= 90):
//     B++;
//     break;
//     case (scores[i] <= 100):
//     A++;
//     break;
//   }
// }
