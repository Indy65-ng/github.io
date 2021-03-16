function berserkCharacter(manga, name, background, image) {
    this.manga = manga;
    this.name = name;
	this.background = background;
	this.image = image;
	this.displayCharacter = displayCharacter;
}

var character = new Array();
        character[0] = "Please choose a character";
	    character[1] = new berserkCharacter("BERSERK", "Guts", "Guts is the main character of Berserk. He is born from an hanged woman and has been raised by Gambino, the leader of the mercenary group. He joined the Band of the Hawk after he lost a fight against Griffith, the charismatic leader of the Band of Hawk.", "Images/Guts.jpg");
	    character[2] = new berserkCharacter("BERSERK", "Griffith", "He is the leader of the Band of the Hawk. He has defeated Guts in a fight and since Guts has sworn fedelity to him. Charismatic, enigmatic, Griffith seems to have to possibility to accomplish wonders.", "Images/Griffith.jpg");
		character[3] = new berserkCharacter("BERSERK", "Casca", "Only female among the Band of the Hawk, she is the second mos skilled warrior and his second in command untill Guts join the group. The relationship between Guts and Casca will be tumultuous.", "Images/Casca.jpg");
		character[4] = new berserkCharacter("BERSERK", "The Skull Knight", "Enigmatic figure, The Skull Knight is aloof and mysterious with a great foreknowledge with event which have yet to happen.", "Images/Skull Knight.jpg");
		character[5] = new berserkCharacter("BERSERK", "The God Hand", "The God Hand is a quintumvirate of demon sovereigns who act as executors of the Idea of Evil's will. The God Hand is the main antagonist of the manga", "Images/God Hand.jpg");

function displayCharacter() {
    content = "";
	content += "<!DOCTYPE html><html><head><title>" + this.manga + "</title></head>";
	content += "<body style='background-color: #413D33; color: white'><main><div  style='text-align: center'>";
	content += "<table width='90%'<tr><td colspan='2' style='text-align: center'>";
	content += "<h3>Character: <strong>" + this.name + "</strong></h3><hr/></td></tr>";
	content += "<tr><td><strong>Description: </strong>" + this.background + "</td></tr>";
	content += "<tr><td><img src='" + this.image + "' height='250' width='250'/>" + "</td></tr>";
	content += "</table><form>";
	content += "<input type='button' value='OK' onclick='window.close();'/>";
	content += "</form></div></main></body></html>";
	
	oneWindow = open("", "oneWindow", "width=500, height=550");
	newWindow(oneWindow);
}

function newWindow(x) {
    x.document.close();
	x.document.open();
	x.document.write(content);
	x.document.close();
	x.moveTo(10,10);
	x.focus();
}
