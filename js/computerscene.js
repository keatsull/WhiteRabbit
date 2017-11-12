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
		i = getDialogueLocation();
		console.log(i);
		setDidWeLoadGame(false); //application now wont go through this function
		loadedGame = true;
	} else {
		i = 0;
	}

	if (i == 0) {
		//enableBtn("#prevBtn", false);
		showUI(".optionContainer", false);
	}

	//Story Arrays
	//replace, delete and add more as necessary
	//add more using ,''
	let storyLine = [
		'Ahahaha, So much crazy talk.',
		'The professor here has one of those things, and the whole lecture hall hasnt mentioned a word of it!', //hide dialogue
		'Like it isnt even there!', 
		'So, anyway, Whats the deal Takashi, have you talked to her yet?',
		'test', //show
		'test'
	];

	//make sure too associate with storyline
	let charAndLocation = [
		'Sora, at Work',
		'Sora, at Work',
		'Boss, outside Work',
		'Boss, outside Work',
		'test',
		'test'
	];

	//add more using ,''
	let decision = [
		'No,not yet', 
		'Actually, todays the day!'
	];

	//links for decision, likely only use first 2
	let link1 = '#';
	let link2 = '#';
	let link3 = '#';
	let link4 = '#';

	//First Images here
	changeCharacter('url("./images/characters/computer.png")');
	changeBackground('url("./images/bgs/computerscenebg.png")');

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		//console.log(i);

		//use the value i to set when a background &/or character should change
		if (i == 1) {
			hideDialogue();
		}

		if (i < 4) {
			$('.computerData').html('<img id="computerImg" src="images/computerscenes/desktopmessageboard1.png" alt="image"/>');
		}

		if (i == 4) {
			$('.computerData').html('<img id="computerImg" src="images/computerscenes/desktopmessageboard2.png" alt="image"/>');
			hideDialogue();
		}
	}
	
	/************************ PROGRAMMERS ONLY **********************
	****************************************************************/

	//This is the click event that changes the dialogue when the user clicks.
	$("#nextBtn").click(function() {nextText(); newEvent();}); 
	$("#prevBtn").click(function() {prevText(); newEvent();}); 
	
	//Populates the inital dialogue
	if (loadedGame) {
		nextText();
		newEvent();
		loadedGame = false;
	} else {
		if (i < storyLine.length && i < charAndLocation.length) {
			currentDialogue = storyLine[i];
			$('#title').html(charAndLocation[i]);
			$("#charDialogue").html(currentDialogue);
			newEvent();
		}
	}

	
	

	//previous dialogue
	function prevText() {
		
		//console.log(i);

		if (i < storyLine[i].length && i >= 0) {

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
				//enableBtn("#prevBtn", false); //disabled for computer scene
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

	function hideDialogue() {
		$('.conversationContainer').hide();
	}

	function showDialogue() {
		$('.conversationContainer').show();
	}

	//used for scrolling through computer scene
	jQuery(

		$('.computer').scroll(function() {
  			var y = $(this).scrollTop();
  			var max = $(this)[0].scrollHeight - $(this)[0].clientHeight

  			//first scorllpoint
  			if (currentLocation == 1) {
  				if (y > max*0.2) {
    				showDialogue();
  				}
  			}
  			
  			//second scrollpoint
  			if (currentLocation >= 4) {
  				if (y == max) {
    				showDialogue();
  				}
  			}
		})
	);
	
	
});