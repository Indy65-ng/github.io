function Quiz(questions) {
    this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
	    this.score++;
	}
	this.questionIndex++
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer = choice;
}

function populate() {
    if(quiz.isEnded()) {
	    showScores();
	}
	else {
	    //Show Questions
	    var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//Show Option
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i<choices.length; i++) {
		    var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i,choices[i]);
		}
		
		showProgress();
	}
};

function guess(id, guess) {
    var button = document.getElementById(id);
	button.onclick = function() {
	    quiz.guess(guess);
		populate();
	}
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
};

function showScores() {
    var endTest = "<h1>Result</h1>";
	endTest += "<h2 id='score'>Your Score is: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = endTest;
}

var questions = [
    new Question("Who is the name of the main character?", ["Griffith", "Guts", "Casca"], "Guts"),
	new Question("What is the name of Griffith's pendant?", ["The Crimson Behelit", "The One Ring", "A Horcrux"], "The Crimson Behelit"),
	new Question("What is the name of the group that Guts join?", ["The Fellowship of the Ring", "The Dumbledore Army", "The Band of the Hawk"], "The Band of the Hawk"),
	new Question("What is Berserk?", ["A Manga", "A Comics", "A Novel"], "A Manga"),
	new Question("Who is the creator of Berserk?", ["J.K. Rowling", "G.R.R. Martin", "Kentaro Miura"], "Kentaro Miura"),
	]
	
	var quiz = new Quiz(questions);
	
	populate();
