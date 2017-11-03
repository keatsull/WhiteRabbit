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
		
		'I’ve always loved the difficulty in replicating beauty',

		'Beauty seems to be wasted if it is not free',

		'Sure but isn’t that the point of art to capture beauty and lock it inside a canvas?',

		'“I can’t help but think everyone here is locked in a canvas tied by string”',
		'Perhaps but if you pluck a flower it withers',

		'Sora smile',

		'Hmm….when painted it doesn’t',

		'Soras phone buzzes she quickly looks and seems mildly alarmed',

		'Sorry i have to go, can we catch up later',

		'Sure not a problem',

		'Feel free to message me later if you’d like',

		'Sora quickly leaves the cafe but drops a book out of her bag as she leaves Takashi picks it up it looks really old',
		'Takashi runs out of the cafe to catch sora but she is no where to be seen',

		'“It must be an art reference or something, i’ll have to return this to her I’ll message her when i get home”',

		'Takashi arrives home', 

		'That book….there is something weird about that book',

		'Takashi opens the old latin book it’s title is ‘Novus ordo seclorum’', 

		'“Wth is this, some of these symbols are the same as on the website that kira linked”',

		'While flipping through the pages a note falls from amongst the pages it’s in english',

		'“This could be a note written by sora”',

		'I want to leave, this is getting out of hand and the others have lost their minds, they really believe their serving a greater purpose, can you help me transfer or even better quit?',

 		'“I have a feeling she isn’t just talking about university here i’ll have to keep reading”',

		'Takashi continues reading',
		'The subject is innocent, we have been brainwashed by the organisation please can you help?',
		'to: Dr craze',

		'WAIT A SECOND!',
		'Dr craze was on the message board!',
		'Skylimit and dr craze were talking about some crazy kidnapping or something.',

		'I’ll have to message sora and get an explanation for this',

		'TAKASHI pulls out his phone and starts to message sora',

		'Message: Hi sora you dropped a book at the cafe today it was titled Novus ordo seclorum, pretty weird title, anyways feel free to come around to get it or i can give it to you tomorrow at work',

		'Message: Can i come around now i really need that book',

		'“This book must be important, why exactly does she have it in her possession i’ll have to confront her when she arrives”',
		'Message: Ok no problem ',

		'TAKASHI messages his address to sora and waits patiently',

		'KNOCK knock knock',

		'That must be her',

		'TAKASHI answers the door',

		'Sorry for coming over so urgently ',

		'Don’t stress i don’t mind, so what is so important about this book?',

		'I need it for university',

		'Really? Why would you need a latin book for art? There are not even any pictures for reference in it. ',

		'How much have you read?',

		'I can’t read latin but i know the symbols are not something an art student should be interested in.',

		'….',

		'And can you explain this',

		'TAKASHI hands over the note that fell out of the book when he opened it',

		'So you found the note…. How much do you know?',

		'I know that you are in in trouble and i can help',

		'And how exactly can you help, do you understand what i’m part of',

		'“I think i understand now she must be part of the cult, but why would she ask dr craze for help in the note? That man sounded insane”',
		'Your part of the destined',

		'Sora seems surprised',

		'What i can’t figure out is why would you put your trust in dr craze that man’s unstable',

		'I know that now, they were never planning to let me go, and you of all people might be able to help',

		'What is that supposed to mean?',

		'Well your special Takashi, we didn’t go to the cafe for no reason i was asked to get information on you.',

		'“So i was the one that was going to get kidnapped, but why me”',
		'Why am i special?',

		'The organisation hunts people like you takashi, people which are disconnected from fate, you are dangerous to them. ',
		'Have you ever been puzzled by the reason you can see the string while others are oblivious?',

		'My whole life….',

		'The organisation known as the “Destined” call people like you “fate deniers”',
		'no one knows when it started but from what i have experienced they have immense resources at their disposal and are hell bent on stopping fate deniers getting in their way',
		'you see takashi you can ignore fate and can crush their plans.',

		'How? I’ve always been able to see the string but never have i experienced any powers like you describe?',

		'With my help, i’ll show you but only if you help me',

		'why are you telling me all this?',
		'Are we not enemies if what you say is true?',

		'I’m done with the destined i want to be free, after our date at the cafe i came to notice that you are innocent in all this and so am i.',

		'So what are we to do?',

		'We will have to leave this place, they know where i am and who you are, if you trust me we will have to leave now.',

		'Okay i’ll trust you', 

		'Takashi frantically packs his belongings and leaves with sora as he leaves he sees flames starting to emerge from his apartment and can here a large explosion in the distance',


	];

	//make sure too associate with storyline
	let charAndLocation = [
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Sora',
		'&nbsp',
		'Sora',
		'Takashi',
		'Sora',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Note',
		'Takashi',
		'&nbsp',
		'Note',
		'Note',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Sora',
		'Takashi',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'&nbsp',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'Takashi',
		'Sora',
		'Sora',
		'Takashi',
		'Sora',
		'Sora',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'Takashi',
		'Sora',
		'Takashi',
		'Sora',
		'Takashi',
		'&nbsp',

			];

	//add more using ,''
	let decision = [
		' ', 
	];

	//links for decision, likely only use first 2
	let link1 = '#';
	let link2 = '#';
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
					
					$('.conversationContainer .optionContainer').append('<a href="'+link+'"><h3>END</h3><p>'+decision[j]+'</p></a>');
					
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