
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

	if (type == "hopeless romantic") {
		img="hopelessromantic.png"
		title="Hopeless Romantic"
	}

	if (type == "conspiracy") {
		img="conspiracy.png"
		title="Conspiracy Theorist"
	}

	if (type == "ignorance is bliss") {
		img="ignoranceisbliss.png"
		title="Ignorance is Bliss"
	}

	//fills html
	$('#notification').html('<img src="./images/achievements/'+img+'" alt="img"/>'+'<div id="notifInnerContainer"><p>Unlocked Achievement</p><h3>'+title+'</h3></div>');

	//shows and then hides the notification
	$('#notification').fadeIn(300, function() {
		$('#notification').css('display', 'all');
	}).delay(2000).fadeOut(300, function() {
		$('#notification').css('display', 'none');
	});
}




