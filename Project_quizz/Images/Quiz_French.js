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
    new Question("Qui est le personnage principal?", ["Griffith", "Guts", "Casca"], "Guts"),
	new Question("Quel est le nom du pendentif de Griffith?", ["Le Behelit Pourpre", "l'Anneau Unique", "Un Horcrux"], "Le Behelit Pourpre"),
	new Question("Quel est le nom du groupe que Guts rejoint?", ["La Communaute de l'Anneau", "l'Armee de Dumbledore", "la Bande du Faucon"], "la Bande du Faucon"),
	new Question("Qu'est-ce que Berserk?", ["Un Manga", "Un Comics", "Un Roman"], "Un Manga"),
	new Question("Qui est le createur de Berserk?", ["J.K. Rowling", "G.R.R. Martin", "Kentaro Miura"], "Kentaro Miura"),
	]
	
	var quiz = new Quiz(questions);
	
	populate();
