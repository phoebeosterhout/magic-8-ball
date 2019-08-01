$(document).ready(function() {
var magic8ball = {};
magic8ball.listOfAnswers = ["Yes", "Duh", "Perhaps", "If You're Lucky", "Don't even think about it"];
$("#answer").hide();

magic8ball.askMeSomething = function(question) {
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberForAnswer = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForAnswer);
	var answerText = this.listOfAnswers[randomIndex];
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#8ball").effect("shake");
	$("#answer").text(answerText);
};

var onClick = function() {
	$("#answer").hide();
	setTimeout (
		function() {
		var question = prompt("Ask me a yes or no question");
		magic8ball.askMeSomething(question);
	}, 500);
};

$("#questionButton").click(onClick);
});
