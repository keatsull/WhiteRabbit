
/* Created by Keaten Sullivan */
/* Persistant Data used for the story and loading/saving game */

/* mutators */
//store if an ending was chosen
function storeDecision(bool) {
	localStorage.setItem('trueEnding', bool);
}

//store dialogue choice (used in the choice#.js files) for save game
function storeDialogueLocation(i) {
	localStorage.setItem('dialogueLocation', i);
}

//check if we loaded a game, called in the choice#.js files
function setDidWeLoadGame(bool) {
	localStorage.setItem('didWeLoadGame', bool);
}

//first time loading the game
function setFirstLoad(bool) {
	localStorage.setItem('firstLoad', bool);
}

//set achievements to local storage if accomplished
function setAchievement(type) {
	if (type == "hopelessromantic") {
		return localStorage.setItem('hopelessromantic', true);
	}

	if (type == "conspiracy") {
		return localStorage.setItem('conspiracy', true);
	}

	if (type == "ignoranceisbliss") {
		return localStorage.setItem('ignoranceisbliss', true);
	}
}

//save the game at current location
function saveGame(loc) {
	var local = loc.split('/').pop();	//saves the name of the html file
	localStorage.setItem('lastSave', local);	//stores it

	//hide menus
	hideMobileMenu();
	hideMenu();
	showOverlayText('SAVED GAME'); //display
	//console.log(getSave());
}

/* getters */
//get the decision
function getDecision() {
	return (localStorage.getItem('trueEnding') === 'true');
}

//check if  we loaded a game
function getDidWeLoadGame() {
	return (localStorage.getItem('didWeLoadGame') === 'true');
}

//get the last save
function getSave() {
	return localStorage.getItem('lastSave');
}

//check if its our first time
function getFirstLoad() {
	return localStorage.getItem('firstLoad');
}

//get our current location in the array - used in choice# html files
function getDialogueLocation() {
	return parseInt(localStorage.getItem('dialogueLocation'));
}

//get achievements
function getAchievement(type) {
	if (type == "hopelessromantic") {
		return localStorage.getItem('hopelessromantic');
	}

	if (type == "conspiracy") {
		return localStorage.getItem('conspiracy');
	}

	if (type == "ignoranceisbliss") {
		return localStorage.getItem('ignoranceisbliss');
	}
}

//load game
function loadGame() {

	//get items
	if (getSave() === null) {
		//cant load game
		showOverlayText('UNABLE TO LOAD GAME');
	} else {
		setDidWeLoadGame(true);
		//reload website
		window.location.href = getSave();
	}
	
}

//show text that is called as an overlay
function showOverlayText(text) {
	//console.log(text);
	$('#overlayText').show(0);
	$('#overlayText').html('<h3>'+text+'</h3>');
	$('#overlayText').delay(2000).hide(0);
}

//updates notification must call type
function updateNotification(type) {

	img = "";
	title = "";
	var showNot = false;

	if (type == "hopelessromantic") {
		img="hopelessromantic.png"
		title="Hopeless Romantic"
	}

	if (type == "conspiracy") {
		img="conspiracy.png"
		title="Conspiracy Theorist"
	}

	if (type == "ignoranceisbliss") {
		img="ignoranceisbliss.png"
		title="Ignorance is Bliss"
	}

	if (!getAchievement(type)) {
		setAchievement(type); //stores complete achievement
		showNot = true; //will show notification
	}

	//show notification if it hasnt been shown before
	if (showNot) {
		//fills html
		$('#notification').html('<img src="./images/achievements/'+img+'" alt="img"/>'+'<div id="notifInnerContainer"><p>Unlocked Achievement</p><h3>'+title+'</h3></div>');

		//shows and then hides the notification
		$('#notification').fadeIn(300, function() {
			$('#notification').css('display', 'all');
		}).delay(2000).fadeOut(300, function() {
			$('#notification').css('display', 'none');
		});
	}
	
}

//shows the achievemnt overlay
function showAchievements() {
	$('#achievementsOverlay').css("visibility", "visible");
    $('#achievementsOverlay').delay(0).animate({'opacity': '1'}, 300);

    $('#hopelessromantic').css('opacity', '0.5');
    $('#ignoranceisbliss').css('opacity', '0.5');
    $('#conspiracy').css('opacity', '0.5');

    if (getAchievement("hopelessromantic")) {
    	$('#hopelessromantic').css('opacity', '1');
    }

    if (getAchievement("ignoranceisbliss")) {
    	$('#ignoranceisbliss').css('opacity', '1');
    }

    if (getAchievement("conspiracy")) {
    	$('#conspiracy').css('opacity', '1');
    }
}

//hides the achievement overlay
function hideAchievements() {
	$('#achievementsOverlay').delay(0).animate({'opacity': '0'}, 300);
    $('#achievementsOverlay').delay(300).css("visibility", "hidden");
}




