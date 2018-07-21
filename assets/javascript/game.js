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

    //then create on-click
    //when clicked, score is updated
// $("#red-gem").on("click", function(){
//     var redGemBtnVal = $(this).attr(redGemBtn);
//     currentScore += parseInt($(this).attr("value"));
// 		$("#currentscore").html(currentScore);
// });
$("#red-gem").on("click", function(){
    currentScore = currentScore + redGemBtn;
    $("#currentscore").text(currentScore);
    console.log("new user score is " + currentScore);
});

//if user score matches computer choice, user wins

//if user score is higher than computer choice, user loses

//game restarts with the win or loss

// give a number value to each crystal button, then the computer can randomly change the value via java/jquery
    // for html <button id="red-crystal" class="btn btn-primary number
    //then in java/jquery $(number) val()
});