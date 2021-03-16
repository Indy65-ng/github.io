function berserkCharacter(manga, name, background, image) {
    this.manga = manga;
    this.name = name;
	this.background = background;
	this.image = image;
	this.displayCharacter = displayCharacter;
}

var character = new Array();
        character[0] = "Please choose a character";
	    character[1] = new berserkCharacter("BERSERK", "Guts", "Guts est le personnage principal de Berserk. Il est ne d'une femme pendue et a ete eleve par Gambino, Le chef d'une troupe de mercenaire. Il rejoint la Toupe du Faucon apres un duel perdu contre Griffith son leader charismatique.", "Guts.jpg");
	    character[2] = new berserkCharacter("BERSERK", "Griffith", "Il est le chef de la Toupe du Faucon. Il a defait Guts au cours d'un combat singulier et depuis ce dernier lui a jure fidelite. Charismatique, enigmatique, Griffith semble avoir la possibilite d'accomplir des merveilles.", "Griffith.jpg");
		character[3] = new berserkCharacter("BERSERK", "Casca", "Unique femme de la Bande du Faucon, Elle est le commandant en second de la Troupe et son guerrier le plus valeureux apres Griffith, jusqu'a ce que Guts se joigne a eux. A partir de la, la relation entre Guts et Casca va devenir tumultueuse.", "Casca.jpg");
		character[4] = new berserkCharacter("BERSERK", "Le Skull Knight", "Figure enigmatique, Le Skull Knight est cryptique et myterieux avec une grande connaissance des ressort de l'histoire de Berserk et des evenements encore a venir.", "Skull Knight.jpg");
		character[5] = new berserkCharacter("BERSERK", "Les God Hand", "Les God Hand sont un quintumvirate de demons souverains qui agissent comme executant de la volonte de l'Idee du Mal. Les God Hand sont les principaux antagonistes du manga", "God Hand.jpg");

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