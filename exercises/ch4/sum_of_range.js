/* jslint node: true */
'use strict';

function range(start, end, step){
  var array = [];
  var increment = 1;
  var direction = 'up';
  var i;

  if(step){
    increment = step; 
    if(step < 0){
      direction = 'down';
    }
  }

  if(direction === 'up'){
    for (i = start; i <= end; i+= increment){
      array.push(i);
    }
  }
 
  if(direction === 'down'){
    for (i = start; i >= end; i+= increment){
      array.push(i);
    }
  }

  return array;
}

function sum(numArray){
  return numArray.reduce(function (a,b){ return a + b; });
}

console.log(range(2,13));
console.log(sum([1,2,3,4,5]));
console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));
console.log(range(10, 1, -1));
