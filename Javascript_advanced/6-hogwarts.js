//studentHogwarts.js
let privateScore = 0;
let name = null;

//private methods
function changeScoreBy(points){
   privateScore += points; 
 }

}

//public methods accessible from outside the module
export const studentHogwarts = {
    setName: function(newName){
        name= newName;
    },
    rewardStudent: function(){
     changeScoreBy(1);
    },
    penalizeStudent: function(){
        changeScoreBy(-1);
    },
    getScore : function(){
        console.log(name + ": " + privateScore)
    }
};

// main.js

import { studentHogwarts } from "./studentHogwarts.js";

// Create an instance named 'harry'
const harry = Object.create(studentHogwarts);
harry.setName("Harry");

// Reward the student four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log the name and score
console.log(harry.getScore());

// Create another instance named 'draco'
const draco = Object.create(studentHogwarts);
draco.setName("Draco");

// Reward the student one time and penalize three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log the name and score
console.log(draco.getScore());