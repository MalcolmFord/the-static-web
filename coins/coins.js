/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
let value = document.getElementById("userInput");
function coinCounter (value) {
  // Initialize a JavaScript object to hold the coins
  let cash = value;
  cash *= 100;
  // console.log("first cash amount: " + cash);
  let quarters = parseInt(cash / 25);
  cash = cash % 25
  // console.log("Second cash amound: " +cash);

  let dimes = parseInt(cash / 10);
  cash = cash % 10;
  // console.log("Third cash amount: "+ cash);
  let nickels = parseInt(cash / 5 );
  cash = cash % 5;
  // console.log("Forth cash amount:" + cash);
  let pennies = cash;
  console.log("quarters :" +quarters);
  console.log("dimes :" +dimes);
  console.log(" nickels :" +nickels);
  console.log("pennies :" +pennies);



}
  // var coinPurse = {};

  // coinPurse.quarters = 0;

  // return coinPurse;
// }

var coins = coinCounter()
