/* Created by Rhys Harrison & Keaten Sullivan, script Entered by Clifford Smith */
var currentLocation = 0;

$(document).ready(function(e) {

	//This is the file that will store all the text dialogues and character
	//names for use in the corresponding scene. 

	var currentDialogue = '';

	setFirstLoad(true); //we have now played the game before, start menu will go to choice1.html instead of novel.html
	
	//To iterate through the code. 
	var i = 0;
	var loadedGame = false;

	//if loaded from previous save
	if (getDidWeLoadGame() == true) {
		//in icongnito mode, save feature does not
		//if (isNaN(getSave())) {
			//cant load game
			//showOverlayText('ERROR LOADING');
			//i = 0;
		//} else {
			i = getDialogueLocation();
			console.log(i);
			setDidWeLoadGame(false); //application now wont go through this function
			loadedGame = true;
			showOverlayText('LOADED GAME');
		//}
		
	} else {
		i = 0;
	}

	if (i == 0) {
		enableBtn("#prevBtn", false);
		showUI(".optionContainer", false);
	}

	//Story Arrays
	//replace, delete and add more as necessary
	//add more using ,''
	let storyLine = [
		'**TAKASHI, wearing work uniform, stands behind the counters sleeping.**', //0

		'Wake up Takashi, Stop sleeping on the Job!',

		'*Yawns* My bad.. it has not been busy for a while',  //2

		'Imagine what a customer would think if they saw you like that! Do you have any common sense?',

		'It will not happen again, Sir',

		'Better hope not',

		'**The Boss goes to back of store. Takashi\'s phone buzzes**', //6 phone buzzes

		'That must be Akira',

		'**Takashi pulls out his phone**',

		'Hahahaha so much crazy talk!',

		'The professor here has one of those things..',

		'..and the whole lecture hall hasn’t mentioned a word of it! Like it isn’t even there!',

		'So, anyway, what’s the deal takashi? Have you talked to her yet?'
	];

	//make sure too associate with storyline
	let charAndLocation = [
		'&nbsp',
		'Boss',
		'Takashi',
		'Boss',
		'Takashi',
		'Boss',
		'Boss',
		'Takashi',
		'Takashi',
		'Kira',
		'Kira',
		'Kira',
		'Kira'
	];

	//add more using ,''
	let decision = [
		'No, not yet. I’m just waiting for the right time', 
		'Actually, todays the day!'
	];

	//links for decision, likely only use first 2
	let link1 = 'choice2.html';
	let link2 = 'choice3.html';
	let link3 = '#';
	let link4 = '#';

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		//console.log('here'+i);

		//use the value i to set when a background &/or character should change
		if (i >= 0) {
			changeBackground('url("./images/bgs/shop_interior1.jpg")');
		}

		if (i == 0) {
			changeCharacter('url("")'); //empty
		}

		if(i >= 1 && i <= 5 )
		{
			changeCharacter('url("./images/characters/BossAngry.png")');
		}

		if(i >= 6 && i <= 8)
		{
			changeCharacter('url("")'); //empty
		}

		if (i == 6) {
			playAudio("./audio/effect/SynthChime10.mp3", false);
		}

		if( i == 9 ){
			changeCharacter('url("./images/characters/msg/MessagingAkira01.gif")');
		}

		if( i >= 10 && i < 12 ){
			changeCharacter('url("./images/characters/msg/MessagingAkira02.gif")');
		}
		
		if( i == 12 ){
			changeCharacter('url("./images/characters/msg/MessagingAkira03.gif")');
		}

		if (i == 1) {
			//playAudio('"./audio/effect/Creeky-Interior-Door.mp3"', false);
			shakeScreen();
		}
	}
	
	/************************ PROGRAMMERS ONLY **********************
	****************************************************************/

	//This is the click event that changes the dialogue when the user clicks.
	$("#nextBtn").click(function() {nextText(); newEvent();}); 
	$("#prevBtn").click(function() {prevText(); newEvent();}); 
	
	//Populates the inital dialogue
	if (i < storyLine.length && i < charAndLocation.length) {
		currentDialogue = storyLine[i];
		$('#title').html(charAndLocation[i]);
		$("#charDialogue").html(currentDialogue);

		if (loadedGame) {
			if (i == storyLine.length-1) {
				enableBtn("#nextBtn", false); //disable next button
			}
			loadedGame = false;
		}

		newEvent();
	}
	

	//previous dialogue
	function prevText() {

		if (i < storyLine.length && i >= 0) {

			if (i > 0) {
				i--;
			}

			//used for normal
			var count = storyLine.length; 
			var count2 = charAndLocation.length;
			currentDialogue = storyLine[i];

			//enable next on decisions
			if (i < count) {
				enableBtn("#nextBtn", true);
			}
			
			//This is the full text for this part of the code. Will cycle through the first array. 
			if(i < count && i < count2) {				
				$("#charDialogue").html(currentDialogue);
				$('#title').html(charAndLocation[i]);

				showUI(".conversationContainer .optionContainer", false);
			}

			if (i == 0) {
				enableBtn("#prevBtn", false);
			} 
			
			//store i
			currentLocation = i;

		}
	}

	//Click event, will look in the code to find the next dialogue option. 
	function nextText(){

			//vars
			var count = storyLine.length;
			var count2 = charAndLocation.length;

			//up i value
			if (i < count-1) {
				i++;
			}

			//enable previous button
			if (i > 0) {
				enableBtn("#prevBtn", true);
			}

			//store i for save/load purposes
			console.log(i);
			currentLocation = i;

			//used for normal
			currentDialogue = storyLine[i];

			if(i < count && i < count2 ) {				
				$("#charDialogue").html(currentDialogue);
				$('#title').html(charAndLocation[i]);
			}

			if (i == count-1) {
				showUI(".conversationContainer .optionContainer", true);
				$('.conversationContainer .optionContainer').html(''); //clear
				//Populates the choices on screen.

				for(var j = 0; j < decision.length; j++) {
					var n = j+1;

					//links
					var link = '#';
					if (j == 0) { link = link1; }
					if (j == 1) { link = link2; }
					if (j == 2) { link = link3; }
					if (j == 3) { link = link4; }
					
					$('.conversationContainer .optionContainer').append('<a href="'+link+'""><h3>Option '+n+'</h3><p>'+decision[j]+'</p></a>');
				} 
				enableBtn("#nextBtn", false);
			}
			
	}

	function enableBtn(button, bool) {
		if (!bool) {
			$(button).css({
				'pointer-events': 'none',
   				'cursor': 'default',
   				'opacity': '0.2'
			});
		} else {
			$(button).css({
				'pointer-events': 'all',
   				'cursor': 'pointer',
   				'opacity': '1'
			});
		}
	}

	function showUI(div, bool) {
		if (bool) {
			$(div).css("visibility", "visible");
		} else {
			$(div).css("visibility", "hidden");
		}
	}

	//changes character, also set which file to change, default use 1
	function changeCharacter(file) {
		$('.characterContainer span:nth-child(1)').css("background-image", file) 
	}

	function changeBackground(file) {
		$('#backgroundImg').css("background-image", file);
	}

	//loop specifies weather audio keeps playing or not
	function playAudio(file, loop) {
		$('#audioContainer').html(''); //empty 
		
		if (loop) {
			$('#audioContainer').html('<audio loop autoplay><source src='+file+' type="audio/mpeg"></audio>');
		} else {
			$('#audioContainer').html('<audio autoplay><source src='+file+' type="audio/mpeg"></audio>');
		}
	}

	function shakeScreen() {
		$('.conversationContainer').effect("shake", {times: 3}, 700);
		$('.characterContainer').effect("shake", {times: 4}, 600);
	}
	
});

function returnLocation() {
		return currentLocation;
}