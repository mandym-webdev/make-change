
//One popular interview coding question is to set up a function to make change in the most optimal way.

//Ex: given a need for 72 cents in cange, what is the least amount of coins you can use assuming denominations of 25, 10, 5, and 1.

//Solution:

//See it live:  https://jsfiddle.net/wanderingdev/xtfbbvsr/

function make_change(amount,denominations) {
  
  var count = [];
  var tempAmount = amount;
  
  while (tempAmount > 0 ){
    for (var i = 0; i < denominations.length; i++){
      count.push(Math.floor(tempAmount / denominations[i]));
      tempAmount = tempAmount % denominations[i];
     }
     return count;
  }
}

var amount = 72;
var denominations = [25, 10, 5, 1];
console.log(make_change(amount, denominations));

// returns [2,2,0,2]


