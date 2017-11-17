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

		
		'About 6 months.. I moved here after my grandparents kicked me out.', //0

		'That must of been hard.',

		'At the beginning it was, not knowing anyone, but now I’m use to it. Fate has a funny way of throwing us around.', //2

		'**Sora\'s phone buzzes she quickly looks and seems mildly alarmed**',

		'Sorry, I have to go, can we catch up later.', //4

		'Sure, not a problem.',

		'Feel free to message me later if you’d like.', //6

		'**Sora quickly leaves the cafe, but drops a book out of her bag as she leaves. Takashi picks it up it looks really old**',

		'**Takashi runs out of the cafe to catch Sora but she is no where to be seen**',  //8

		'“It must be an art reference or something, I’ll have to return this to her. I’ll message her when I get home”',

		'**Takashi get’s home and puts Soras book on his bed**',  //10

		'**Takashi pulls out phone and messages Sora**',

		'Hi Sora, you dropped a book at the cafe, do you want to meet up tomorrow so I can return it?',  //12

		'Oh good! I was worried when I thought I lost it, but I need the book urgently. Can you please bring it to my place?',

		'Umm..Sure, I can bring it over.', //14

		'**Sora sends through her address**',

		'We must of really hit it off at the cafe for her to trust me to return it. Then again, it must be an important book and she needs it for university.', //16

		'**Takashi puts on shoes and heads to the address**', 

		'**Takashi walks quickly to the address, thinking briefly about how he is going to approach this situation**',  //18

		'I never thought this could happen, only a few days ago I was struggling to even say a word to her and now I’m going to her house to drop off a book.',

		'I wonder what I’m going to say when I get there….',  //20

		'**Takashi arrives at the address it looks like a normal apartment building not so different from Takashi\'s**',

		'Okay, don’t get nervous now.',  //22

		'**Takashi knocks at the door**', 

		'**Sora answers**',  //24

		'Oh, hi Takashi! That didn\'t take you long, you must live nearby.',

		'I left as soon as I got your message.',  //26

		'Thanks heaps, I would of been in trouble if I’d lost it.',

		'**Takashi hands over book and the energy surrounding Sora suddenly changes**',  //28

		'So did you look through the book?',

		'No haha.', //30

		'**Sora seems angry**',

		'ARE YOU SURE?!',  //32

		'“What has happened to Sora? Usually she seems more collected than this”',

		'Yeah, I’m sure the title is in latin and I can’t read latin. I’m surprised you can, did you take latin at uni?',  //34

		'I hope you understand but I can’t trust you. This book holds too many secrets we can’t let out.',

		'“What the hell is she on about?”',  //36

		'I’m not sure I’m underst-',

		'**Before Takashi can finish his sentence, he can feel something cold in his stomach. As he looks down, he can see a dagger glowing red with a form of energy surrounding it impaled directly into his stomach',  //38

 		'**The warm blood starts gushing out of him in streams. His knees buckle and he holds his stomach in blinding pain.**',

		'WHY!? SORA, WHHHHYYYYY?!',   //40

		'I’m sorry, but if it wasn’t you it would of been me.',

		'**As Takashi\'s world goes black he can hear a mysterious voice...**',  //42

		'Good job Sora, now we can continue our work. Who would of guessed that this idiot would have brought himself to us? Ha-Ha-Ha, how naive he must of been. Do not worry, I’ll take care of the body but it looks like we will have to move again.',

		'Ok doctor, what ever you say.',  //44

		'….'

	];

	//make sure too associate with storyline
	let charAndLocation = [
		'Sora',
		'Takashi',
		'Sora',
		'&nbsp',
		'Sora',
		'Takashi',
		'Sora',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'Sora',
		'Takashi',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Sora',
		'Takashi',
		'Sora',
		'&nbsp',
		'Sora',
		'Takashi',
		'&nbsp',
		'Sora',
		'Takashi',
		'Sora',
		'Sora',
		'Takashi',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'Sora',
		'&nbsp',
		'Mystery Man',
		'Sora',
		'Mystery Man'
	];

	//add more using ,''
	let decision = [
		'Credits',
		'Main menu'
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
		if (i >= 0 && i <= 6) {
			changeCharacter('url("./images/characters/Sora2.png")');
			changeBackground('url("./images/bgs/shop_interior1.png")');			//Cafe
		} else if (i == 7){
			changeBackground('url("./images/bgs/book.jpg")');	
			changeCharacter('url("./images/characters/emptySprite.png")');			//Book?
		}
		else if (i >= 8 && i <= 9 ){
			changeCharacter('url("./images/characters/emptySprite.png")');		//null
			changeBackground('url("./images/bgs/street11.png")');			//Street
		}
		else if (i == 10 ){	
			changeCharacter('url("./images/characters/emptySprite.png")');
			changeBackground('url("./images/bgs/room_interior2.png")');			//Takashis
		}
		else if (i >= 11 && i <= 15 ){
			changeCharacter('url("./images/characters/emptySprite.png")');			//phome
			changeBackground('url("./images/bgs/room_interior2.png")');	
		}
		else if (i == 16 ){
			changeCharacter('url("./images/characters/emptySprite.png")');
			changeBackground('url("./images/bgs/room_interior2.png")');				//null
		}
		else if (i == 17 ){
			changeBackground('url("./images/bgs/blackbackground.jpg")');	
			changeCharacter('url("./images/characters/emptySprite.png")');		//Black Screen
		}
		else if (i >= 18 && i <= 20 ){
			changeBackground('url("./images/bgs/street11.png")');		
			changeCharacter('url("./images/characters/emptySprite.png")');	//Street
		}
		else if (i >= 21 && i <= 23){
			changeBackground('url("./images/bgs/room_interior2.png")');	
			changeCharacter('url("./images/characters/emptySprite.png")');		//Apartment NEEDS Change
		}
		else if (i >= 24 && i <= 27 ){
			changeCharacter('url("./images/characters/Sora2.png")');
			changeBackground('url("./images/bgs/room_interior2.png")');
		}
		else if (i >= 28 && i <= 36){
			changeCharacter('url("./images/characters/BossFinal.png")');
			changeBackground('url("./images/bgs/room_interior2.png")');	//Evil Sora
		}
		else if (i == 37 ){
			changeCharacter('url("./images/characters/emptySprite.png")');
			changeBackground('url("./images/bgs/room_interior2.png")');	    //null, Remove Sora, adds effect
		}
		else if (i >= 38 && i <= 41 ){
																			//Oh noes, you have been stabbed screen.
			changeBackground('url("./images/bgs/stabbingblood.png")');
			changeCharacter('url("./images/characters/emptySprite.png")');
		}
		else if (i >= 42 && i <= 45){
			changeBackground('url("./images/bgs/blackbackground.png")');
			changeCharacter('url("./images/characters/emptySprite.png")');			//black screen of die-dead
		}




		if (i == 38) {
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