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

//for computer's choice of score
var computerChoiceTarget = [Math.floor(Math.random()* 101) +19];
//prints target score
$("#targetscore").text(computerChoiceTarget);
console.log("target score is " + computerChoiceTarget);
//for totals

var losses = 0;
$("#totallosses").text(losses);
console.log("number of losses is " + losses);
var wins = 0;
$("#totalwins").text(wins);
console.log("number of wins is " + wins);
//for current score
var currentScore = 0;
$("#currentscore").text(currentScore);
console.log("current score is " + currentScore);
//functions for adding win or loss point
// function win() {
// 	wins ++;
// 	$("#totalwins").text(wins);
// }
// function lose() {
// 	losses ++;
// 	$("#totallosses").text(losses);
// }
    //on-click for each crystal
    //when clicked, current score is updated

$("#red-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(redGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget < currentScore) {
        //$("#losses").text(losses);
        lose();
        console.log("user loses");
    }
    else if (computerChoiceTarget == currentScore) {
        // $("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
    
});

$("#blue-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(blueGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget < currentScore) {
        //$("#losses").text(losses);
        lose();
        console.log("user loses");
    }
    else if (computerChoiceTarget == currentScore) {
        //$("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
    
});
$("#green-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(greenGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    
    if (computerChoiceTarget < currentScore) {
       // $("#losses").text(losses);
        lose();
        console.log("user loses");
    }
    else if (computerChoiceTarget == currentScore) {
        //$("#wins").text(wins);
        win();
    console.log("user wins ");
    
    }
});
$("#purple-gem").on("click", function(){
    currentScore = parseInt(currentScore) + parseInt(purpleGemBtn);
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
    if (computerChoiceTarget < currentScore){
        //$("#losses").text(losses);
        lose();
        // updatePage();
        console.log("user loses");
    }
    else if (computerChoiceTarget == currentScore) {
        //$("#wins").text(wins);
        win();
        // updatePage();
    console.log("user wins ");
    
    }
    
});
function lose() {
	losses ++;
    $("#totallosses").text(losses);
    // updatePage();
};
function win() {
    wins ++;
    console.log("this has fired");
    $("#totalwins").text(wins);
    // updatePage();

};

// //if user score matches computer choice, user wins
// if (computerChoiceTarget === currentScore) {
//     // $("#wins").text(wins);
//     win();
// console.log("user wins ");

// }
// //if user score is higher than computer choice, user loses
// else if (computerChoiceTarget < currentScore){
//     // $("#losses").text(losses);
//     lose();
//     console.log("user loses");
// }

//game restarts with the win or loss

});