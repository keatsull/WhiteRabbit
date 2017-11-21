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
		
		'I’ve always loved the difficulty in replicating beauty.', //0

		'Beauty seems to be wasted if it is not free.',

		'Sure, but isn’t the point of art to capture beauty and lock it inside a canvas?', //2
 
		'“I can’t help but think everyone here is locked in a canvas tied by string”',

		'Perhaps, but if you pluck a flower it withers.', //4

		'**Sora smiles**',

		'Hmm….when painted it doesn’t',//6

		'**Sora\'s phone buzzes she quickly looks and seems mildly alarmed**',

		'Sorry, I have to go, can we catch up later.', //8

		'Sure, not a problem.',

		'Feel free to message me later if you’d like.', //10

		'**Sora quickly leaves the cafe but drops a book out of her bag. Takashi picks it up, it looks really old**',

		'**Takashi runs out of the cafe to catch sora but she is no where to be seen**', //12

		'“It must be an art reference or something, I’ll have to return this to her. I’ll message her when i get home”',

		'**Takashi arrives home**',  //14

		'That book….There is something weird about that book.',

		'**Takashi opens the old latin book it’s title is ‘Novus ordo seclorum’**',  //16

		'“What the hell is this? Some of these symbols are the same as on the website that Kira linked”',

		'While flipping through the pages a note falls from amongst the pages. It’s in english.', //18

		'“This could be a note written by Sora”',

		'I want to leave, this is getting out of hand and the others have lost their minds, they really believe their serving a greater purpose, can you help me transfer or even better, quit?', //20

 		'“I have a feeling she isn’t just talking about university here, I’ll have to keep reading”',

		'**Takashi continues reading**', //22

		'The subject is innocent, we have been brainwashed by the organisation. Please, can you help?',

		'To: Dr. Craze:', //24

		'WAIT A SECOND!',

		'Dr. Craze was on the message board!', //26

		'Skylimit and Dr Craze were talking about some crazy kidnapping or something.',

		'I’ll have to message Sora and get an explanation for this.', //28

		'**Takashi pulls out his phone and starts to message Sora**',

		'Message: Hi Sora, you dropped a book at the cafe today. It was titled Novus ordo seclorum, pretty weird title. Anyway, feel free to come around to get it or I can give it to you tomorrow at work', //30

		'Message: Can I come around now? I really need that book.',

		'“This book must be important, why exactly does she have it in her possession? I’ll have to confront her when she arrives”', //32

		'Message: Ok, No problem.',

		'**Takashi messages his address to Sora and waits patiently**', //34

		'**KNOCK KNOCK KNOCK**',

		'That must be her.', //36

		'**Takashi answers the door**',

		'Sorry for coming over so urgently.', //38

		'Don’t stress, I don’t mind, so what is so important about this book?',

		'I need it for university.', //40

		'Really? Why would you need a latin book for art? There are not even any pictures for reference in it. ',

		'..How much have you read?', //42

		'I can’t read latin but I know the symbols are not something an art student should be interested in.',

		'….', //44

		'And can you explain this',

		'**Takashi hands over the note that fell out of the book when he opened it**', //46

		'So you found the note…. How much do you know?',

		'I know that you are in in trouble and I can help', //48

		'How exactly can you help? Do you understand what I’m part of?',

		'“I think I understand now she must be part of the cult, but why would she ask Dr. Craze for help in the note? That man sounded insane”', //50

		'Your part of the destined.',

		'**Sora seems surprised**', //52

		'What I can’t figure out is why would you put your trust in Dr. Craze. That man’s unstable',

		'I know that now, they were never planning to let me go, and you of all people might be able to help', //54

		'What is that supposed to mean?',

		'Well, you\'re special Takashi. We didn’t go to the cafe for no reason, I was asked to get information on you.', //56

		'“So I was the one that was going to get kidnapped, but why me?”',

		'Why am I special?', //58

		'The organisation hunts people like you Takashi, people which are disconnected from fate, you are dangerous to them. ',

		'Have you ever been puzzled by the reason you can see the string while others are completely oblivious to it?', //60

		'My whole life….',

		'The organisation known as the “Destined” call people like you “fate deniers”.', //62

		'No one knows when it started, but from what I have experienced they have immense resources at their disposal and are hell bent on stopping fate deniers getting in the way.',

		'You see Takashi. You can ignore fate and can crush their plans.', //64

		'How? I’ve always been able to see the string but never have I experienced any powers like you describe.',

		'With my help, I’ll show you but only if you help me.', //66

		'Why are you telling me all this?',

		'Are we not enemies if what you say is true?', //68

		'I’m done with the destined, I just want to be free. After our date at the cafe, I came to notice that you are innocent in all this and so am I.',

		'So what are we to do?', //70

		'We will have to leave this place, they know where I am and who you are, if you trust me we will have to leave now.',

		'Okay.. I’ll trust you', //72

		'**Takashi frantically packs his belongings and leaves with sora as he leaves he sees flames starting to emerge from his apartment and can here a large explosion in the distance**',


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
	let link1 = 'endcredits.html';
	let link2 = '#';
	let link3 = '#';
	let link4 = '#';

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		console.log('here'+i);

		//use the value i to set when a background &/or character should change
		if (i >= 0 && <= 10) {
			changeCharacter('url("./images/characters/Sora2.png")');
			
		} 

		if (i >= 0 && i < 12) {
			changeBackground('url("./images/bgs/cafe_outside1.jpg")');			//cafe
		}

		if(i == 11){
			changeCharacter('url("")');		//null
		}

		if(i >= 12 && i <= 13){
			changeBackground('url("./images/bgs/street1.jpg")');			//street
		}

		if(i >= 14 && i <= 15){
			changeBackground('url("./images/bgs/room_interior2.jpg")');			//Takashis
		}

		if(i >= 16 && i <= 18){
			changeCharacter('url("")');		
			changeBackground('url("./images/bgs/book.jpg")');			//book
		}

		if(i >= 19 && i <= 25){
			changeCharacter('url("./images/characters/BossFinal.png")');		//note
			changeBackground('url("./images/bgs/book.jpg")');
		}

		if(i >= 26 && i <= 29){
			changeCharacter('url("")');		//takashis
			changeBackground('url("./images/bgs/room_interior2.jpg")');
		}

		if(i >= 30 && i <= 33){
			changeCharacter('url("./images/characters/BossFinal.png")');		//phone
			changeBackground('url("")');
		}

		if(i >= 34 && i <= 37){
			changeCharacter('url("")');			//null
			changeBackground('url("")');
		}

		if(i >= 38 && i <= 72){
			changeCharacter('url("./images/characters/Sora2.png")');		//Sora/takashis
			changeBackground('url("./images/bgs/room_interior2.jpg")');
		}

		if(i >= 73) {
			updateNotification("hopelessromantic"); //achievement earned
			changeCharacter('url("")');			//Kaboom
			changeBackground('url("./images/bgs/takashiapartmentfire.jpg")');
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