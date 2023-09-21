#!/usr/bin/node
function addMeMaybe(number, theFunction)
{
    const number = number + 1;
    theFunction(number)
};

module.exports = {addMeMaybe};
