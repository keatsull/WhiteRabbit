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

		
		'About 6 months i moved here after my grandparents kicked me out',

		'That must of been hard',

		'At the beginning it was, not knowing anyone but now i’m use to it, fate has a funny way of throwing us around',

		'Soras phone buzzes she quickly looks and seems mildly alarmed',

		'Sorry i have to go, can we catch up later',

		'Sure not a problem',

		'Feel free to message me later if you’d like',

		'Sora quickly leaves the cafe but drops a book out of her bag as she leaves Takashi picks it up it looks really old',
		'Takashi runs out of the cafe to catch sora but she is no where to be seen',

		'“It must be an art reference or something, i’ll have to return this to her I’ll message her when i get home”',

		'Takashi get’s home and puts Soras book on his bed',

		'Takashi pulls out phone and messages sora',

		'Hi sora you dropped a book at the cafe, do you want to meet up tomorrow so i can return it',

		'I was worried i thought i lost it, i need the book urgently can you bring it to my place?',

		'Umm sure i can bring it over',

		'Sora sends through her address',

		'We must of really hit it off at the cafe for her to trust me to return it, then again it must be an important book, maybe she needs it for university',

		'Takahi puts on shoes and heads to the address', 
		'Takashi walks quickly to the address thinking briefly about how he is going to approach this situation',

		'I never thought this could happen, only a few days ago i was struggling to even say a word to her now i’m going to her house to drop off a book.',
		'I wonder what i’m going to say when i get there….',

		'Takashi arrives at the address it looks like a normal apartment building not so different from takashis',

		'Okay don’t get nervous now',

		'Takashi knocks at the door', 
		'Sora answers',

		'Oh hi takashi that didnt take you long you must live near by',

		'I left as soon as i got your message',

		'Thanks heaps i would of been in trouble if i’d lost it',

		'Takashi hands over book and the energy surrounding sora suddenly changes',

		'So did you look through the book?',

		'No haha', 

		'Sora seems angry',

		'ARE YOU SURE!',

		'“What has happened to sora usually from what i can tell she is more collected than this”',
		'Yeah i’m sure the title is in latin and i can’t read latin, i’m surprised you can did you take latin at uni?',

		'I hope you understand but i can’t trust you this book holds too many secrets we can’t let out',

		'“Wth is she on about?”',
		'I’m not sure i’m understanding what your talkin….',

		'Before takashi can finish his sentence he can feel something cold in his stomach as he looks down he can see a dagger glowing red with some sort of energy surrounding it stabbed directly into his stomach',
 		'the warm blood starts gushing out of him in streams and his knees buckle, he hold his stomach in blinding pain.',

		'WHY! Sora whhhyyyyyy',

		'I’m sorry but if it wasn’t you it would of been me',

		'As the screen turns black Takashi can hear a mysterious voice',

		'Good job sora now we can continue our work, who would of guessed that this idiot would of brang himself to us haha how naive he must of been, do not worry i’ll take care of the body, look’s like we will have to move again.',

		'Ok doctor what ever you say',

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