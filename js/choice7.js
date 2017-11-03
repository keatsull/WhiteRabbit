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

		'Takashi puts away his phone and pulls up the website from the link kira supplied',

		'Kira always finds the weirdest places online.',

		'The Title Reads “The Destined and the fight for fate”',
		'One message board reads “Manifestations of attachment”',

		'That does sound like what we are experiencing….',

		'Takashi opens the thread',
		'It starts with pictures of the strings hanging out of people',

 		'i though me and kira were the only ones that could see those things!',

		'Next takashi opens a thread called FATED DENIERS',

		'One user named “SkyLimit” starts talking about “fate deniers” It reads: ',


		'I’ve found a FD been tailing him for 6 months and am certain that he was affected.',

		'how do you know for sure, do i have to remind you of the responsibilities of the destined?',

		'destined? What has kira stumbled onto! Sounds like a cult….',

		'no you don’t' ,

		'Keep an eye on him until an opportunity appears then do what you have too.',

		'ok ',

		'I have to figure out what these fate deniers are and what exactly these “Destined” have to do with them. ',

		'Takashi looks at the clock on the wall',

		'What! how did it get so late i have work soon',
		'man i hope i do not get fired',
		'the boss seemed annoyed aswell as i passed out',
		'I will have to hurry',

		'Takashi struggles to put on his uniform and then starts to walk to work' ,

		'The destined ha just a normal everyday cult….',
 		'but they did have pictures of the manifestations i wonder if they really do know what’s going on?',
		'None of this matters if i lose my job though, the boss will probably not be happy about what happened hopefully i can lawyer my way around it',
		'hopefully i can find what is behind this so i can prevent it from happening again.',

		'Well look who it is, thought you would take the day off after what happened yesterday',

		'Sorry' ,
		'did you help me home?',

		'Yeah i had to pull you off the floor',
		'I was going to call an ambulance but you told me not to' ,
		'said it happens occasionally then I drove you home',
		'you were out of it like you were sleepwalking',
		'WTH was that all about?',

		'I have Low Blood sugar and occasionally pass out',

		'First time i’m hearing about it….',

		'Sorry i should of told you earlier',

		'Well it does not matter now besides it was already toward the end of your shift when you blacked out and you came into work today so i’ll let you off this time.',

		'“Is he trying to be nice? Either way he believed the lie time to just get today over with and talk to kira about the website”',

		'Boss heads out the back of the shop and leaves the front to takashi',
		'takashi goes behind the counter and starts his shift',

		'Mystery girl approaches the counter',

		'Ok I’m not gonna mess this up again',
		'“Play it cool”',

		'Hi….',

		'….hi',

		'i saw you pass out yesterday is everything okay',

		'Uhh yeah everything is fine' ,
		'Just low blood sugar' ,

		'i’m glad you are okay',

		'“This is so surreal”',

		'Well i got to go to uni i’ll see you later…. Um i never caught your name',

		'It’s takashi and yours?',

		'Sora….anyways i have to go',

		'Sora turns to leave',

		'“Where is that courage come on ask her OUT!”',
		'Wait….',

		'Sora turns back a little surprised',

		'“This might seem a bit hasty”',
		'Would you like to get a coffee sometime?',

		'….',

		'“FFS! Takashi you are a moron”',

		'Um… sure',

		'Sora starts to blush and approaches the counter again',

		'Here is my number',

		'Sora places a business card called ‘sora’s modern art’ on the counter and leaves',

		'“Wow that actually worked!! Maybe what kira said about confidence is true”',

		'Takashi looks at the business card',

		'“She must be doing a creative arts degree”',

		'TAKASHI! What are you doing just standing around get to work!',

		'Sorry boss will get to it',


	];

	//make sure too associate with storyline
	let charAndLocation = [
		'&nbsp',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'SkyLimit',
		'DrCraze',
		'Takashi',
		'SkyLimit',
		'DrCraze',
		'SkyLimit',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Takashi',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Takashi',
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
		'hopefully she is free after i finish work', 
		'i have to meet up with kira after work \n I will have to message sora tomorrow'
	];

	//links for decision, likely only use first 2
	let link1 = "choice8.html";
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