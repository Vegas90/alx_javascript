#!/usr/bin/node
function addMeMaybe(number, theFunction)
{
    const number1 = number + 1;
    theFunction(number1)
};

module.exports = {addMeMaybe};
