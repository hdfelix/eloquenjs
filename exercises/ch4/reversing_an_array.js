/* jslint node: true */
'use strict';

var i;

function reverseArray(array){
  var reversedArray = [];
  for(i = array.length - 1; i > 0; i--){
    reversedArray.push(array[i]); 
  }

  return reversedArray;
}

console.log(reverseArray([1,2,3,4,5]));

function arrayPrint(array){
  console.log("[" + array + "]");
}

function reverseArrayInPlace(array){
  if(array.length === 1) {
    arrayPrint(array);
    return;
  }

  var swapItemOne, swapItemTwo, swapIndexOne, swapIndexTwo, midIndex;

  midIndex =  Math.ceil(((array.length - 1) / 2));

  for(i = 0; i < midIndex; i++){
    swapIndexOne = i;
    swapIndexTwo = array.length - i - 1;

    swapItemOne = array[i];
    swapItemTwo = array[array.length - i - 1];

    array[swapIndexOne] = swapItemTwo;
    array[swapIndexTwo] = swapItemOne;
  }

  arrayPrint(array);
}

reverseArrayInPlace([1]);
reverseArrayInPlace([1,2]);
reverseArrayInPlace([1,2,3]);
reverseArrayInPlace([1,2,3,4]);
reverseArrayInPlace([1,2,3,4,5]);
reverseArrayInPlace([1,2,3,4,5,6]);
reverseArrayInPlace([1,2,3,4,5,6,7]);
