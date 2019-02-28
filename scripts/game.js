var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var gameOver = false;
var started = false;

$(".btn").click(function () {
  // Register user clicked button
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);

  // Check if game is over
  if (gameOver) {
    $("h1").text("Game Over, Press Any Key to Restart");
    gameOverState();
  }
});

// To start the game
$(document).keypress(function () {
  if (!started) {
    started = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (currentLevel === (gamePattern.length - 1)) {
      setTimeout(nextSequence, 500);
      userClickedPattern = [];
    }
  } else {
    gameOver = true;
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  started = false;
  gameOver = false;
}

function gameOverState() {
  $("body").addClass("game-over").delay(200).queue(function () {
    $(this).removeClass("game-over").dequeue();
  });
  playSound("wrong");
  startOver();
}

function nextSequence() {
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  GamePatternLoop(0);
}

// Display and Loop through entire game pattern
function GamePatternLoop(i) {
  setTimeout(function () {
    $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
    playSound(gamePattern[i]);
    i++;
    if (i < gamePattern.length) {
      GamePatternLoop(i);
    }
  }, 300)
}

function playSound(colour) {
  new Audio("sounds/" + colour + ".mp3").play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed").delay(100).queue(function () {
    $(this).removeClass("pressed").dequeue();
  });
}
