'use strict';

console.log("Bean Counting exercize:\n");

var string = 'Big Beahr Hector';
function countBs(string){
 var i;
 var numOfBs = 0;
 for(i=0; i < string.length; i++){
   if(string.charAt(i) === 'B'){
     numOfBs += 1;
   }
 }
 return numOfBs;
};

console.log(string + ' (' + countBs(string) + ')');

function countChar(string, character){
  var i;
  var numOfChars = 0;
  for(i=0; i < string.length; i++){
    if(string.charAt(i) === character){
      numOfChars += 1;
    }
  }
 return numOfChars;
};

console.log(string + ' (' + countChar(string, 'H') + ')');
