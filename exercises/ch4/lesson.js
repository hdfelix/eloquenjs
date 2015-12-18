/*jslint node: true */
"use strict";

var journal = require('./jacques_journal.js');

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

function hasEvent(event, entry){
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0,0,0,0];
  for(var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)){ index += 1;}
    if(entry.squirrel){ index += 2;}
    table[index] += 1;
  }
  return table;
}

// Print out a table for 'pizza'
console.log(tableFor("pizza", journal));

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

//Print out events for first journal entry
console.log(journal[0].events);

var map = {};
function storePhi(event, phi){
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

// Is pizza in map?
console.log("pizza" in map);

// Print out Phi coefficient for "Touched Tree" event
console.log(map["touched tree"]);

for (var event in map)
  console.log("The correlation for '" + event + "' is " + map[event]);

function gatherCorrelations(journal){
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++){
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(journal);

// Print correlations for "Pizza")
console.log("\nCorrelations for pizza: " + correlations.pizza);

console.log("\nCORRELATIONS:\n");
for (var event in correlations){
  console.log(event + ": " + correlations[event]);
}

console.log("\nSTRONGER CORRELATIONS:\n");
for (var event in correlations) {
  var correlation = correlations[event];
  if(correlation > 0.1 || correlation < -0.1){
    console.log(event + ": " + correlation);
  }
}

for(var i = 0; i < journal.length; i++){
  var entry = journal[i];
  if(hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)){
    entry.events.push("peanut teeth");
  }
  console.log("\n" + phi(tableFor("peanut teeth", journal)));
}


console.log("\nSHIFT & UNSHIFT");
var todoList = [];
function rememberTo(task){
  todoList.push(task);
}

function whatIsNext(){
  return todoList.shift();
}

function urgentlyRememberTo(task){
  todoList.unshift(task);
}

rememberTo("eat");
console.log("\nnext task: " + whatIsNext());

console.log("Add urgent task: ('grocery shopping')");
rememberTo("sleep");

urgentlyRememberTo("grocery shopping");

console.log("\nCurrent List: " + todoList);

console.log("\n" + [1,2,3,2,1].indexOf(2));
console.log("\n" + [1,2,3,2,1].lastIndexOf(2));
console.log("\n" + [0,1,2,3,4].slice(2,4));
console.log("\n" + [0,1,2,3,4].slice(2));

function remove(array, index){
  return array.slice(0,index).concat(array.slice(index + 1));
}

console.log("\nremove() example:\n" + remove(['a','b','c','d','e','f'], 2));

// string, number, and Boolean are not objects and are immutable

// Arguments object
// In JS you are allowed to pass more (or fewer) arguments than the number of declared parameters
function noArguments(){
  return arguments.length;
}

console.log("noArguments() has " + noArguments(2,3) + " arguments.");

