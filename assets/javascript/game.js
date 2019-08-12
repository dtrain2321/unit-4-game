// alert("test")

// global variables

var crystal = {
    blue:{
        name:"blue",
        value:0
    },
    green:{
        name:"green",
        value:0
    },
    red:{
        name:"red",
        value:0
    },
    yellow:{
        name:"yellow",
        value:0
    }
};

// scores

var currentScore = 0;
var targetScore  = 0;

// wins and loses

var winCount    = 0;
var loseCount    = 0;

// functions
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;


}; 

var startgame = function(){

    currentScore = 0;

    targetScore = getRandom(19,120);

    crystal.blue.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

// console.log("_______________________________");
// console.log("Target score: " + targetScore);
// console.log("blue: "+crystal.blue.value + " | yellow: " + crystal.yellow.value +  " | red: " +crystal.red.value +  "|  green: "+crystal.green.value);
// console.log("_______________________________");
// var imgValue = $(".crystal").attr("value", crystal.blue.value);


};

var addValues = function(crystal){

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();

    console.log("Your Score: " +currentScore);


}

var checkWin = function(){
    if(currentScore > targetScore){
        alert("You're a bum!!!!");
        loseCount++;
        // change the DOM
        $("#loseCount").html(loseCount);

         // Reset
         startgame();
    }

    else if (currentScore == targetScore){

        alert("You're the best!!!")
        winCount++;
        // change the DOM
        $("#winCount").html(winCount);

        // Reset
        startgame();
    }

}

// mainprocess

// starts the game

startgame();

$("#blue").click(function(){
    addValues(crystal.blue)
});



$("#red").click(function(){
    addValues(crystal.red)
});


$("#green").click(function(){
    addValues(crystal.green)
});


$("#yellow").click(function(){
    addValues(crystal.yellow)
});