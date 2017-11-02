
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

function saveGame(loc) {
	var local = loc.split('/').pop();
	localStorage.setItem('lastSave', local);
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

function getDialogueLocation() {
	return parseInt(localStorage.getItem('dialogueLocation'));
}

function loadGame() {

	//get items
	var load = getSave()
	setDidWeLoadGame(true);

	//reload website
	window.location.href = getSave();

}



