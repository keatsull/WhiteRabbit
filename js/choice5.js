/* Created by Rhys Harrison & Keaten Sullivan, script Entered by Clifford Smith */
var currentLocation = 0;

$(document).ready(function(e) {

	//This is the file that will store all the text dialogues and character
	//names for use in the corresponding scene. 

	var currentDialogue = '';
	
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
'Excuse me? Look I don’t have time for games, my bus arrives in a minute.',

		'The Customer exits the convenient store.',

		'Am I losing my mind?', 

		'TAKASHI notices a girl standing outside the convenient store beside a bus stop.',

		'It’s her!',
		'She always gets off the bus at this time',
		'Okay Takashi, you’ve already told Akira You’d do it.',
		'Now’s the time to make yourself known!',
		'BOSS i’m going on break for 5 can you handle the front?',

		'Bloody hell takashi! It’s a bit out of the blue',

		'Sorry i really need 5 minutes',

		'Ahh fine ',

		'Takashi quickly leaves the store but as he exits a Strange animated strings warps into appearance',
		'this time the string is attached to Takashi',

		'Wah!',
		'No, not now!',
		'Not Again!',

		'TAKASHI ARE YOU ALRIGHT!',

		'ARRRrrr',
		'dammit not again',
 		'I was so close to talking to that girl!',
 		'I’ll probably never have the courage again, why now!',
		'this hasn’t happened since me and kira were kids',
		'brings back bad memories all that time spent in hospital….',
		'I should let Kira know.',

		'“Beap beap beap”',

		'Takashi pulls out phone',

		'"Speak of the devil"',

		'Message: Hey how did it go did you end up talking to her?',

		'Message: Nah one of those things appeared on me again, i blacked out and woke up at home',

		'Message: WHAT!!!!! I thought those days were over, didn’t the doctor say that you grew out of it? The string should no longer manifest on you.',

		'Message: I’ve never trusted doctors, besides how could they know, there is no diagnosis for this type of thing',

		'Message: Hmmm….well do you know how you got home?',

		'Message: No I completely blacked out again',

		'Message: well it can’t be helped maybe your boss helped you home.',

		'Message: I’ll probably get fired this time he already sounded annoyed during my shift and now this….',

		'Message: Don’t worry about it, things have always worked out anyways i’ve got some good news',
		'i’ve found some information about what these manifestations are',
 		'go to this website I’ll send a link to your computer',

		'Takashi goes to his computer to open the link it looks weird a format he is not use to seeing',

		'Message: we can talk more after i’m finished at Uni',

		'Message: Ok i’ll have a look now',

		'Message: We’ll talk later'

	];

	//make sure too associate with storyline
	let charAndLocation = [
		'Customer',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'Boss',
		'Takashi',
		'Boss',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'Takashi',
		'Takashi',
		'Boss',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Kira',
		'Takashi',
		'Kira'
	];

	//add more using ,''
	let decision = [
		'I feel so tired after what happened and i can’t miss my shift tomorrow \n i’ll have to just have a quick nap and meet up with kira and learn tabout what he found then, he will understand ',
		'I am tired but i bet i can spend some time on researching what kira found'
	];

	//links for decision, likely only use first 2
	let link1 = 'choice6.html';
	let link2 = 'choice7.html';
	let link3 = '#';
	let link4 = '#';

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		console.log('here'+i);

		//use the value i to set when a background &/or character should change
		if (i <= 2) {
			changeCharacter('url("./images/characters/Customer_animated.gif")');
			changeBackground('url("./images/bgs/shop_interior1.png")');
		} else {
			changeCharacter('url("./images/characters/BossFinal.png")');
			changeBackground('url("./images/bgs/testbackground.png")');
		}

		if (i == 3) {
			playAudio('"./audio/effect/Creeky-Interior-Door.mp3"', false);
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