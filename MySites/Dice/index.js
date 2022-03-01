$("#Play-button").click(function() {

  var rand1 = Math.ceil(Math.random() * 6);
  $("#Dice1").attr("src", "images/dice" + rand1 + ".png");

  var rand2 = Math.ceil(Math.random() * 6);
  $("#Dice2").attr("src", "images/dice" + rand2 + ".png");

  Winner(rand1, rand2);
});

$("#Play-button").one("click", function() {
  var audio = new Audio("Begaining.mp3");
  audio.play();

});

function Winner(value1, value2) {
  if (value1 > value2) {
    $("#Play-button").text("🚩 Player 1 Win");

  } else if (value1 < value2) {
    $("#Play-button").text("Player 2 Win 🚩");
  } else {
    $("#Play-button").text("Draw 🏁🏁🏁");
  }
}
