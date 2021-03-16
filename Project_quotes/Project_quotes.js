
var quotes = [
    ['The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela'],
	['If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt'],
	['If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.','James Cameron'],
	['Tell me and I forget. Teach me and I remember. Involve me and I learn.','Benjamin Franklin'],
	['It is during our darkest moments that we must focus to see the light.','Aristotle'],
	['Do not go where the path may lead, go instead where there is no path and leave a trail.','Ralph Waldo Emerson'],
	['In the end, it\'s not the years in your life that count. It\'s the life in your years.','Abraham Lincoln'],
	['Life is really simple, but we insist on making it complicated.','Confucius'],
	['Life is trying things to see if they work.','Ray Bradbury'],
	['Success is not final; failure is not fatal: It is the courage to continue that counts.','Winston S. Churchill'],
]

var colors = [
    '#EC357E',
	'#431024',
	'#4229A8',
	'#666273',
	'#2B8F9E',
	'#658A55',
	'#3E140A',
	'#FF5722',
	'#F38181',
	'#00ADB%',
]

var randomNumber = "";
var currentQuote = "";
var currentAuthor = "";

function newQuote() {
    randomNumber = Math.floor(Math.random()*(quotes.length));
	currentQuote = quotes[randomNumber][0];
    currentAuthor = quotes[randomNumber][1];
	
	document.getElementById("text").innerHTML = currentQuote
	document.getElementById("author").innerHTML = currentAuthor
}

function changeColor(elem) {
    var randNum1 = Math.floor(Math.random()*255).toString();
	var randNum2 = Math.floor(Math.random()*255).toString();
	var randNum3 = Math.floor(Math.random()*255).toString();
	return elem = document.body.style.backgroundColor = 'rgb('+randNum1+','+randNum2+','+randNum3+')';
}