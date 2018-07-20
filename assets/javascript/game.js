
$(document).ready(function(){
//create random values for 4 crystals as buttons--options 1-12 pts
var redGemBtn = [Math.floor(Math.random()*1+12)];
var blueGemBtn = [Math.floor(Math.random()*1+12)];
var greenGemBtn = [Math.floor(Math.random()*1+12)];
var purpleGemBtn = [Math.floor(Math.random()*1+12)];
//for current score
var currentScore = 0;
$("#currentscore").text(currentScore);
console.log("current score is " + currentScore);
//for computer's choice of score
var computerChoiceTarget = [Math.floor(Math.random()*19+120)];
//prints target score
$("#targetscore").text(computerChoiceTarget);
console.log("target score is " + computerChoiceTarget);
//for totals
var wins = 0;
$("#wins").text(wins);
console.log("number of wins is " + wins);
var losses = 0;
$("#losses").text(losses);
console.log("number of losses is " + losses);
//create a for loop to go through each crystal button

    //create a variable name for jquery button name
    //then give it a class
    //append to the div

    //then create on-click
    //when clicked, score is updated


//if user score matches computer choice, user wins

//if user score is higher than computer choice, user loses

//game restarts with the win or loss

// give a number value to each crystal button, then the computer can randomly change the value via java/jquery
    // for html <button id="red-crystal" class="btn btn-primary number
    //then in java/jquery $(number) val()
});