#!/usr/bin/node
//declaring function in a object
const myObject = {
    type: 'object',
    value: 12
  
incr: function()
  {
this.value = this.value +1;
  }

};
module.exports = {myObject};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);