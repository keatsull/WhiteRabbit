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
		'The “right time?” You just have to talk to her right away.',

		'Be confident about yourself, that’s it.',

		'Confidence is overrated.',

		'**A Customer appears in front, ready to make a purchase, Takashi places the phone down and greets the customer.**',

		'Oh! HH-hey, just this?',

		'Yes, please',

		'**Suddenly, a strange animated string attached to the customer warps into appearance, wriggling in the air.**'
	];

	//make sure too associate with storyline
	let charAndLocation = [

		'Kira',
		'Kira',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Customer',
		'&nbsp'
	];

	//add more using ,''
	let decision = [
		'Sir/Madam! You have something on your back!', 
		'Th-That’ll be 295 Yen..'
	];

	//links for decision, likely only use first 2
	let link1 = 'choice4.html';
	let link2 = 'choice5.html';
	let link3 = '#';
	let link4 = '#';

	changeBgAudio("./audio/bg/Hypnotic-Puzzle2.mp3"); //this is the other background music
	bgAudio.volume = 0;

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		//console.log('here'+i);

		//use the value i to set when a background &/or character should change
		if (i >= 0) {
			changeBackground('url("./images/bgs/shop_interior1.jpg")');
		}
		
		if (i == 0) {
			changeCharacter('url("./images/characters/msg/MessagingAkira05_1_.gif")'); 
		}

		if( i == 1 ){
			changeCharacter('url("./images/characters/msg/MessagingAkira06_1_.gif")');
		}

		if( i == 2 ){
			changeCharacter('url("./images/characters/msg/MessagingAkira07_1_.gif")');
		}

		if (i == 3){
			changeCharacter('url("./images/characters/CustomerAppear.gif")'); //change to customer W/O string
		}
		
		if (i >= 4 && i <= 5){
			changeCharacter('url("./images/characters/Customer.gif")'); //change to customer W/O string
		}
		
		if(i == 6) {
			bgAudio.volume = 0.5;
			bgMusic.volume = 0;
			changeCharacter('url("./images/characters/Customer_animated.gif")');
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

	//other background music
	function changeBgAudio(file) {
		$('#bgAudio').html('<source src='+file+' type="audio/mpeg">');
	}

	//other background music
	function changeBgAudio2(file) {
		$('#bgAudio2').html('<source src='+file+' type="audio/mpeg">');
	}

	function shakeScreen() {
		$('.conversationContainer').effect("shake", {times: 3}, 700);
		$('.characterContainer').effect("shake", {times: 4}, 600);
	}
	
});

function returnLocation() {
		return currentLocation;
}