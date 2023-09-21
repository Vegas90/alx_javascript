#!/usr/bin/node
//declaring function in a object
const myObject = {
    type: 'object',
    value: 12,
incr: function()
  {
    //this keyword to access the value property within the incr method. 
this.value = this.value +1;
  }

};
//added module.exports to make myObject available for use in other modules. This allows you to import and use myObject in other files.
module.exports = {myObject};

console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);