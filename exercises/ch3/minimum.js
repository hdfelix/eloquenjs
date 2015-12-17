'use strict';

function min(a,b) {
  if(a < b){
    return a;
  }else{
    return b;
  }
}

console.log("min function exercize:\n");
console.log(min(0,10));
console.log(min(0,-10));

console.log("\n\n");


console.log("isEven function exercize:\n");
function isEven(number){
  if(number < 0){
    return NaN;
  }
  if(number === 0){
    return true;
  }else if(number === 1){
    return false;
  }else{
    return isEven(number -2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log("\n\n");

console.log("Bean Counting exercize:\n");

