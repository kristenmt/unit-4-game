$(document).ready(function(){
//create random values for 4 crystals as buttons--options 1-12 pts
var redGemBtn = [Math.floor(Math.random()* 11) +1];
console.log("red gem is " + redGemBtn);
var blueGemBtn = [Math.floor(Math.random()* 11) +1];
console.log("blue gem is " + blueGemBtn);
var greenGemBtn = [Math.floor(Math.random()* 11) +1];
console.log("green gem is " + greenGemBtn);
var purpleGemBtn = [Math.floor(Math.random()* 11) +1];
console.log("purple gem is " + purpleGemBtn);
//for current score
var currentScore = 0;
$("#currentscore").text(currentScore);
console.log("current score is " + currentScore);
//for computer's choice of score
var computerChoiceTarget = [Math.floor(Math.random()* 101) +19];
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


function lose() {
	losses ++;
	$("#losses").text(losses);
};
function win() {
	wins ++;
	$("#wins").text(wins);
};

    //then create on-click
    //when clicked, score is updated

$("#red-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(redGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget === currentScore){
        // $("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
    else {
        // $("#losses").text(losses);
        lose();
        console.log("user loses");
    }
});

$("#blue-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(blueGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget === currentScore){
        // $("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
    else {
        // $("#losses").text(losses);
        lose();
        console.log("user loses");
    }
});
$("#green-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(greenGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget === currentScore){
        // $("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
    else {
        // $("#losses").text(losses);
        lose();
        console.log("user loses");
    }
});
$("#purple-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(purpleGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget === currentScore){
        // $("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
    else {
        // $("#losses").text(losses);
        lose();
        console.log("user loses");
    }
});
//if user score matches computer choice, user wins






//game restarts with the win or loss

});