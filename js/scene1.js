$(document).ready(function(e) {

	//This is the file that will store all the text dialogues and character
	//names for use in the corresponding scene. 

	//Starts here
	//Declare the container for displayed dialogue and choices(when applicable)
	let currentDialogue = '';
	let currentChoiceA = '';
	let currentChoiceB = '';
	
	//To iterate through the code. 
	let i = 0;

	if (i == 0) {
		enableBtn("#prevBtn", false);
		showUI(".optionContainer", false);
	}

	var storyLineNum = 0; //current storyline
	var decisionNum = 0; //current descision
	var responseNum = 0; //current response

	//For decision's to determine the outcomes. 
	let decisionState = 0;

	//Story Arrays
	//These are arrays that contain dialogue for the scene

	//Opening lines, Akira talking to Takashi over txt
	let storyLineA = ['Ahahaha, So much crazy talk.',
	'The professor here has one of those things, and the whole lecture hall hasnt mentioned a word of it!',
	'Like it isnt even there!', 'So, anyway, Whats the deal Takashi, have you talked to her yet?'];

	//First dialogue option, Whether he is going to talk to Sora
	let decisionA = ['[1] No,not yet', '[2] Actually, todays the day!'];

	//Response's based on decisionA
	let responseA = ['No, Not yet. Im just waiting for the right time', 
	'The "right time?"', 'You just have to talked to her right away',
	'Be confident about yourself thats it.', 'Confidence is overrated'];

	let responseB = ['Actually, todays the day! Next time I see her Ill say hi.',
	'Thats it!', 'If you walk up to her with that sort of confidence you might just stand a chance.',
	'"Might just stand a chance?", thanks for the words of support Akira.', 'Anytime'];

	//Standard Conversation with customer
	let storyLineB = ['Oh! Hey, just this?', 'Yes,Please','Suddenly, strange animated strings attached to the customer warp into appearance, wriggling in the air.',
	'Should Takashi warn the customer?'];

	//Decision to warn customer
	let decisionB = ['Warn the customer', 'Ignore the strings'];

	//Response's based on decisionB
	let responseC = ['Sir! You have something on your back!', 'Excuse me? Look, I dont have time for games, my bus arrives in a minute.'];

	let responseD = ['Th-Thatll be 295 Yen', 'Thank you'];

	//Customer Leaves, See's Sora
	let storyLineC = ['The Customer exited the Store'];

	var currentStorylines = [storyLineA, storyLineB, storyLineC]; //add if there is more
	var currentResponses = [responseA, responseB, responseC, responseD];
	var currentDecisions = [decisionA, decisionB];


	//Starting the code, runs linearly.
	
	//This is the click event that changes the dialogue when the user clicks.
	$("#nextBtn").click(function() {nextText();}); 
	$("#prevBtn").click(function() {prevText();}); 
	
	//Populates the inital dialogue
	currentDialogue = currentStorylines[storyLineNum][i];
	$("#charDialogue").html(currentDialogue);
	

	function prevText() {

		if (i < currentStorylines[storyLineNum].length && i >= 0) {
			//console.log("Here");

			if (i >= 0) {
				i--;
			}

			//enable next on decisions
			if (i < currentStorylines[storyLineNum].length) {
				enableBtn("#nextBtn", true);
			}
			
			//This is the full text for this part of the code. Will cycle through the first array. 
			if(i < currentStorylines[storyLineNum].length) {				
				currentDialogue = currentDialogue = currentStorylines[storyLineNum][i];
				$("#charDialogue").html(currentDialogue);

				showUI(".optionContainer", false);
			}

			if (i == 0) {
				enableBtn("#prevBtn", false);
			} 
			

		}
	}

	//Click event, will look in the code to find the next dialogue option. 
	function nextText(){

			//enable previous button
			if (i > 0) {
				enableBtn("#prevBtn", true);
			}

			if(i < currentStorylines[storyLineNum].length) {				
				currentDialogue = currentDialogue = currentStorylines[storyLineNum][i];
				$("#charDialogue").html(currentDialogue);
			}

			if (i == currentStorylines[storyLineNum].length-1) {
				$('.optionContainer').html(''); //clear
				showUI(".optionContainer", true);
				//Populates the choices on screen.
				for(var j = 0; j < currentDecisions[decisionNum].length; j++) {
					var n = j+1
					$('.optionContainer').append('<a href="#"><h3>Option '+n+'</h3><p>'+currentDecisions[decisionNum][j]+'</p></a>');
				}

				enableBtn("#nextBtn", false);
			}

			if (i < currentStorylines[storyLineNum].length-1) {
				i++;
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

});