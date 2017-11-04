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
		'There you are, thank you.', // 1

		'**The Customer exits the convenient store.**', // 2

		'Am I losing my mind?', // 3

		'**TAKASHI notices a girl standing outside the convenient store beside a bus stop.**', //4

		'It’s her!', //5

		'That girl always gets off the bus at this time',//6

		'She doesn’t know who I am, how do I approach her?', //7

		'BOSS! I’m going on break for 5, can you handle the front?',//8

		'Bloody hell, takashi! It’s a bit out of the blue.',//9

		'Sorry, I really need 5 minutes',//10

		'Ahh fine, go ahead. ',//11

		'**Takashi quickly leaves the store but as he exits a Strange animated strings warps into appearance**',//12

		'**This time the string is attached to Takashi!!!**', //13 

		'WAH!!', //14

		'NO, not now!', //15

		'Not Again!', //16

		'TAKASHI ARE YOU ALRIGHT?!', //17

		'ARRRrrrgggggh' , //18

		'Damn it, not again.',

 		'I was so close to talking to that girl!', //20

 		'I’ll probably never have the courage again, why now?!',

		'This hasn’t happened since Kira and I were kids', //22

		'It brings back bad memories of all that time spent in hospital….',

		'I should let Kira know.', //24

		'**Beep** **beep** **beep**',

		'**Takashi pulls out phone**', //26

		'"Speak of the devil"',

		'Message: Hey, how did it go? Did you end up talking to her?', //28

		'Message: Nah, one of those things appeared on me again, I blacked out and woke up at home.',

		'Message: WHAT!?! I thought those days were over, didn’t the doctor say that you grew out of it? The string should no longer manifest on you.', //30

		'Message: I’ve never trusted doctors, besides how could they know, there is no diagnosis for this type of thing.',

		'Message: Hmmm…well do you know how you got home?', //32

		'Message: No idea, I completely blacked out again.',

		'Message: Well, it can’t be helped. Maybe your boss helped you home.', //34

		'Message: Hah, I’ll probably get fired this time, since he already sounded annoyed during my shift and now this happened….',

		'Message: Don’t worry about it, things have always worked out. Anyways I’ve got some good news.', //36

		'I’ve found some information about what these manifestations are.',

 		'Go to this website, I’ll send a link to your computer.', //38

		'**Takashi goes to his computer to open the link, it looks like a weird format he is not used to seeing**',

		'Message: We can talk more after i’m finished at Uni.', //40

		'Message: Ok, i’ll have a look now.',

		'Message: We’ll talk later.' //42

	];

	//make sure too associate with storyline
	let charAndLocation = [
		'Customer', //1
		'&nbsp',
		'Takashi', //3
		'&nbsp',
		'Takashi', //5
		'Takashi',
		'Takashi',//7
		'Takashi',
		'Boss',//9
		'Takashi',
		'Boss',//11
		'&nbsp',
		'&nbsp',//13
		'Takashi',
		'Takashi',//15
		'Takashi',
		'Boss',//17
		'Takashi',
		'Takashi',//19
		'Takashi',
		'Takashi',//21
		'Takashi',
		'Takashi',//23
		'Takashi',
		'&nbsp', //25
		'&nbsp',
		'Takashi', //27
		'Kira',
		'Takashi', //29
		'Kira',
		'Takashi', //31
		'Kira',
		'Takashi', //33
		'Kira',
		'Takashi', //35
		'Kira',
		'Kira', //37
		'Kira',
		'&nbsp',//39
		'Kira',
		'Takashi', //41
		'Kira' 
	];

	//add more using ,''
	let decision = [
		'I feel so tired after what happened and i can’t miss my shift tomorrow \n i’ll have to just have a quick nap and meet up with kira and learn tabout what he found then, he will understand ',
		'I am tired but i bet i can spend some time on researching what kira found'
	];

	//links for decision, likely only use first 2
	let link1 = 'choice6.html';
	let link2 = 'choice7.html';
	let link3 = '#';
	let link4 = '#';

	//use this to set events to play etc at certain times, maybe you just want to change backgrounds or characters
	function newEvent() {

		console.log('here'+i);

		//Identical to scene 4, Needs some additions
		if (i == 0) {
			changeCharacter('url("./images/characters/Customer_animated.gif")');
			changeBackground('url("./images/bgs/shop_interior1.png")');
		} 
		else if (i >= 1 && i <= 7 ) 
		{
			changeCharacter('url("./images/characters/BossFinal.png")'); //Null entry, no character
		}
		else if(i >= 8 && i <= 10)
		{
			changeCharacter('url("./images/characters/BossFinal.png")'); //Correct
		}
		else if(i >=11 && i <= 15)
		{
			changeBackground('url("./images/bgs/shop_interior1.png")'); //Show street here, might have an additional stage showing the string.
			changeCharacter('url("./images/characters/sora2.png")');
		}
		else if(i == 16){
			changeBackground('url("./images/bgs/shop_interior1.png")'); //black background to show blacking out.

		}		
		else if(i >= 17){
			changeBackground('url("./images/bgs/shop_interior1.png")'); //Takashis apartment
		}
		else if(i >= 27){
			changeCharacter('url("./images/characters/sora2.png")'); //Takashis phone with Kira
		}

		if (i == 16) {
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