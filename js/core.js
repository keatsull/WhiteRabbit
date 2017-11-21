
/* Created by Keaten Sullivan */
/* Persistant Data used for the story and loading/saving game */

/* mutators */
function storeDecision(bool) {
	localStorage.setItem('trueEnding', bool);
}

function storeDialogueLocation(i) {
	localStorage.setItem('dialogueLocation', i);
}

function setDidWeLoadGame(bool) {
	localStorage.setItem('didWeLoadGame', bool);
}

function setFirstLoad(bool) {
	localStorage.setItem('firstLoad', bool);
}

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

function saveGame(loc) {
	var local = loc.split('/').pop();
	localStorage.setItem('lastSave', local);
	hideMobileMenu();
	showOverlayText('SAVED GAME');
	console.log(getSave());
}

/* getters */
function getDecision() {
	return (localStorage.getItem('trueEnding') === 'true');
}

function getDidWeLoadGame() {
	return (localStorage.getItem('didWeLoadGame') === 'true');
}

function getSave() {
	return localStorage.getItem('lastSave');
}

function getFirstLoad() {
	return localStorage.getItem('firstLoad');
}

function getDialogueLocation() {
	return parseInt(localStorage.getItem('dialogueLocation'));
}

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

function showOverlayText(text) {
	console.log(text);
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

function hideAchievements() {
	$('#achievementsOverlay').delay(0).animate({'opacity': '0'}, 300);
    $('#achievementsOverlay').delay(300).css("visibility", "hidden");
}




