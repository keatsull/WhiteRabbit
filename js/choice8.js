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

		'**Takashi finishes work and message Sora**',

		'Message: Hey, it’s Takashi, I just finished my shift, do you still want to grab that coffee?',

		'Message: Yeah, do you know the cafe two blocks down from your work? I’m there now, I always have a coffee here before heading home :D',

		'Message: Ok, heading there now :)',

		'**Takashi heads out of the convenient store and starts walking down to the cafe**',

		'“She is beautiful and she’s an artist, why would she agree to meet me? Now that I think about it, I don’t have much to talk about. All I ever talk about with Kira is the fate string"',

		'"I’ll have to use wit, the boss fell for my lies, so will she.”',

		'**Takashi arrives at the cafe and sees sora through the window, she spots him and waves, Takashi waves back and enters the cafe, it’s called "The long journey cafe"**',

		'Hi Sora, it’s funny i’ve never been to this cafe even though it’s two blocks away from work', //8

		'Really? You have to come here more often! Their ice cream is the best',

		'**As takashi takes his seat and grabs the menu. He sees two big glasses which seemed to have had ice cream in them**',

		'“How can she eat so much...?”',

		'Are you going to order?',

		'Oh…. right, haha',

		'I’ll have a coffee and a slice of cake.'

	];

	//make sure too associate with storyline
	let charAndLocation = [
		'&nbsp',
		'Takashi',
		'Sora',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Sora',
		'&nbsp',
		'Takashi',
		'Sora',
		'Takashi',
		'Takashi'
	];

	//add more using ,''
	let decision = [
		'So, I saw your business card, are you an artist?', 
		'So, what are you studying at university?'
	];

	//links for decision, likely only use first 2
	let link1 = "choice9.html";
	let link2 = "choice10.html";
	let link3 = '#';
	let link4 = '#';

	changeBgAudio("./audio/bg/Space-for-Thought.mp3"); //this is the other background music
	bgAudio.volume = 0.0;

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		//console.log('here'+i);

		//use the value i to set when a background &/or character should change
		if (i >= 0 && i <= 3) {
			changeCharacter('url("./images/characters/handwithphone.png")');				//Phone
			changeBackground('url("./images/bgs/shop_interior1.jpg")');							
		}

		if(i >= 4 && i <= 7) {
			changeCharacter('url("")');															
			changeBackground('url("./images/bgs/street6.jpg")');							//street
		} 

		if (i <8) {
			bgAudio.volume = 0;
			bgMusic.volume = 0.5;	
		}

		if(i >=8) {
			changeBackground('url("./images/bgs/cafe_outside1.jpg")');	
			changeCharacter('url("./images/characters/Sora.gif")');
			bgAudio.volume = 0.5;
			bgMusic.volume = 0;	
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

	function shakeScreen() {
		$('.conversationContainer').effect("shake", {times: 3}, 700);
		$('.characterContainer').effect("shake", {times: 4}, 600);
	}
	
});

function returnLocation() {
		return currentLocation;
}