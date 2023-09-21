#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };

function incr()
  {
myObject.value = myObject.value +1
  }
module.exports = {incr};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);