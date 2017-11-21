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

		'**Takashi looks at the clock on the wall**', //0

		'What! How did it get so late? *sighs* I have work soon.',

		'Man, I hope I don\'t get fired.',

		'The boss seemed annoyed as I passed out, also. ',

		'So, I will have to hurry.',

		'**Takashi struggles to put on his uniform and then starts to walk to work**' , //5

		'The boss will probably not be happy about what happened, hopefully I can lawyer my way around it and hopefully I can find out what is behind this so it can prevent it from happening again.',

		'Though, I wonder what kira discovered?',

		'Well look who it is. I thought you would take the day off after what happened yesterday.', //8

		'Sorry about that. ' ,

		'Did you help me get home?',

		'Yeah, I had to pull you off the floor.',

		'I was going to call an ambulance, but you told me not to.' ,

		'You said it happens occasionally and then I drove you home.',

		'You were out of it, like you were sleepwalking.',

		'What the hell was that all about?',

		'I have Low Blood sugar and occasionally pass out and it leaves me drained afterwards.',

		'First time i’m hearing about it….',

		'Sorry, I should of told you earlier.',

		'Well, it does not matter now. Besides it was already toward the end of your shift when you blacked out and you came into work today, so I’ll let you off this time.',

		'“Is he trying to be nice? Either way he believed the lie. It\'s time to just get today over with and talk to kira about the website”',

		'**Boss heads out the back of the shop and leaves the front to takashi**', //21

		'**Takashi goes behind the counter and starts his shift**',

		'**The Mystery girl approaches the counter**', //23

		'Ok, I’m not gonna mess this up again.',

		'“Play it cool, Takashi.”',

		'Hi….',

		'…....Hi',

		'I saw you pass out yesterday, is everything okay?',

		'Uhh yeah, everything is fine' ,

		'Just low blood sugar.' ,

		'I’m glad you are okay',

		'“This is so surreal”',

		'Well, I got to go to uni, I’ll see you later…. Um I never caught your name.',

		'It’s Takashi and yours?',

		'Sora….anyways I have to go',

		'**Sora turns to leave**', //36

		'“Where is that courage come on ask her OUT!?”',

		'Wait!',

		'**Sora turns back a little surprised**', //39

		'“This might seem a bit hasty”',

		'Would you like to get a coffee sometime?',

		'….',

		'“FFS! Takashi you are a moron”',

		'Um… sure.',

		'**Sora starts to blush and approaches the counter again**',

		'Here is my number.',

		'**Sora places a business card called ‘Sora’s Modern Art’ on the counter and leaves**', //47

		'“Wow that actually worked!! Maybe what Kira said about confidence is true”',

		'**Takashi looks at the business card**',

		'“She must be doing a creative arts degree”',

		'TAKASHI! What are you doing just standing around get to work!', //51

		'Sorry boss will get to it.',


	];

	//make sure too associate with storyline
	let charAndLocation = [
		'&nbsp',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Takashi',
		'Boss',
		'Takashi',
		'Takashi',
		'Boss',
		'Boss',
		'Boss',
		'Boss',
		'Boss',
		'Takashi',
		'Boss',
		'Takashi',
		'Boss',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'Takashi',
		'Mystery girl',
		'Takashi',
		'Mystery girl',
		'Takashi',
		'Takashi',
		'Mystery girl',
		'Takashi',
		'Mystery girl',
		'Takashi',
		'Sora',
		'&nbsp',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Takashi',
		'Sora',
		'Takashi',
		'Sora',
		'&nbsp',
		'Sora',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Boss',
		'Takashi',
	];

	//add more using ,''
	let decision = [
		'Hopefully she is free after I finish work', 
	/* greyed out choice*/	'I have to meet up with kira after work, \n I will have to message Sora tomorrow.'  
	];

	//links for decision, likely only use first 2
	let link1 = "choice8.html";
	let link2 = '#';
	let link3 = '#';
	let link4 = '#';

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		//console.log('here'+i);

		//use the value i to set when a background &/or character should change
		if (i >= 0 && i < 4) {
			changeBackground('url("./images/clockbg.png")'); 
		}

		if (i == 0) {
			changeCharacter('url("")'); //emtpy
			playAudio('"./audio/effect/clock.m4a"', false);				
		}

		if (i == 1) {
			shakeScreen();
		}

		if (i >= 1 && i <= 4) {
			changeCharacter('url("")'); //empty
			changeBackground('url("./images/bgs/room_interior2.jpg")'); 				
		}
		
		if (i >= 5 && i <= 7) {
			changeCharacter('url("")'); //empty
			changeBackground('url("./images/bgs/street6.jpg")'); 						
		}

		if (i >= 8 && i <= 20) {
			changeCharacter('url("./images/characters/BossFinal.png")');
			changeBackground('url("./images/bgs/shop_interior1.jpg")');
		} 
		if (i >= 21 && i <= 22){
			changeCharacter('url("")'); //empty																		
		} 
		if (i >= 23 && i <= 35){
			changeCharacter('url("./images/characters/Sora2.png")');			
		} 
		if (i >= 36 && i <= 38){
			changeCharacter('url("")'); //empty																	
		} 
		if (i >= 39 && i <= 46){
			changeCharacter('url("./images/characters/Sora2.png")');	
		} 
		if (i >= 47 && i <= 50){
			changeCharacter('url("")'); //empty	
		} 
		if (i >= 51){
			changeCharacter('url("./images/characters/BossFinal.png")');
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