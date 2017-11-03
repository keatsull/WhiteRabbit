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

		'TAKASHI finishes work and starts to walk to Kiras university',

		'“I hope this is important i could of asked sora out to the cafe after work!”',
		'“From what i saw last night this Destined cult seems insane, and seem to know what the true nature of the string that i see”',
		'“I better let kira know i am going to his university now”',

		'TAKASHI pulls out phone and starts massaging kira',

		'Message: Hey kira omw to the uni now, you would not believe it but i got her number today',

		'Message: Yeah about that…. Nvm we will talk when you arrive.',

		'“I thought he would of been happier for me, maybe he discovered something researching that got him down”',

		'Takashi puts away his phone and patiently walks to the university',
		'Takashi arrives at the university and enters the library',

 		'“Kira always spends most of his time in the library though not on the things a student should, mostly crazy conspiracy theories, i’m amazed he get’s high marks”',

		'TAKASHI spots kira in the corner hardly visible in front of one of the public computers',

		'Hi kira so what did you want to talk about?',

		'Grab a seat, i’ll show you ',

		'“As blunt as always”',

		'TAKASHI grabs a seat and looks at the computer screen while listening to kira',

		'So i went digging last night and found a lot of interesting information surrounding the destined organisation',

		'Organisation? I thought it was a cult',

		'Yeah that’s what i thought too, until i hacked the website',
		'i found that the site was getting funding from an organisation called the “international committee of 9”, and i mean a lot of funding like 6 digit funds, multiple times over the past 6 months',

		'Yeah but what does this have to do with us',

		'It has everything to do with us, the destined hunt fate deniers like us, for some reason they think we are dangerous',

		'Why all we can do is see manifestations on people',

		'Apparently that’s not all we can do, i found some documents on the “international committee of 9” they were behind password protection but not hard to access if you know what you are doing',

		'“It is like kira does not know there is a law against this stuff” ',

		'The document states that there have been many people which have prevented “world unification” whatever that means, they even have a list of names, and guess what they call them….fate deniers',

		'Kira pulls up a document with many names of dictators and assassinated officials all over the world, even presidents of countries that were later invaded',

		'This is some heavy stuff kira are you sure we should be delving into this?',

		'I was feeling the same thing, but at this point i no longer care about consequences, i’m sick of not knowing what these experiences we are having are',

		'As far as i can tell we are no closer to figuring that out then before',

		'Ok then',

		'Kira pulls up a document caltled MKManifest', 

		'The document states ',

		'patient 1104:		shows increased performance in both leadership and cognitive function compared to his normal counterpart, conclusion not yet made.',

		'Patient 1104 update:		Interest and passion fades when forced to comply, but when left to self applies effort far exceeding that of normal counterpart, conclusion not yet made',

		'Patient 1104 update:		Hallucinations starting to manifest, string like object is seen on other children, symptoms of disconnection from the others have resulted in anti social behaviour, conclusion not yet made  ',

		'Patient 1104 update:		Hallucinations have no longer any effect on the patient but there seems to now be secrecy between the children with the patient’s activity amongst the group, conclusion not yet made',

		'Patient 1104 final:		I.Q is 100% high than normal humans, patient has caused an uprising in all patients, extra guards were needed for security of scientific assets, conclusion fate deniers are an extreme risk to society and the committee of 9 needs a special task force for immediate elimination.',

		'What on earth have you found kira? ',
		'This is insane are you telling me that we are being hunted?',

		'The reason you passed out yesterday was because they were trying to find out if you were a fd and unfortunately it seems they now know you are',

		'How do you know that?',

		'The message board i linked to you last night, the kidnapping was for you and the reason you past out was because they manifested a fate string onto you',

		'But who would of done that it was a slow day?',

		'Can you think of anyone that was there?',

		'Sora….',

		'Hmmm',

		'What?',

		'I was thinking that skylimit which was talking on the messageboard was her it would make sense she even gave you her number only a day after you blacked out',

		'It’s probably only a coincidence ',

		'I don’t think so skylimit I.P address is in this town',

		'ARE YOU SERIOUS!',

		'Not just that but the I.P address is sometimes logged in from this library',

		'….',

		'Look behind you',

		'As kira turns around he sees a person in the distance it’s sora she goes to the same uni as kira ',

		'SORA!',

		'Be quiet, or she will see us',
		'I never thought it was her…. But there is only one way to find out',

		'How?',

		'We go on the messageboard if skylimit is active and logged in from this library it must be her',

		'Kira pulls up the message board ',

		'SKYLIMIT: I confronted the subject today will be getting information on him in the future',

		'DR CRAZE: How do you know for sure',

		'SKYLIMIT: He has my number, he believes we are going out to a cafe, i’ll collect information then',

		'DR CRAZE: Good job, and what is his name',

		'SKYLIMIT: Takashi',

		'Kira closes down the internet and shuts down the vpn he was using and turns off the computer then turns to talk to Takashi',

		'It would seem that you were right ',

		'What are we supposed to do?',

		'We have to find out more but for now that is impossible while these people are after us',

		'I agree we have to lose them',

		'Like always i’m one step ahead of you takashi',

		'Kira reaches down and open a duffle bag inside is what looks like explosives',

		'Have you lost your mind ',

		'I know where their hq is we hit it tonight',

		'Ok ',

		'Takashi and kira quietly leave the library and walk towards the hq',

		'A lot can happen in a few days, it’s amazing….',
		'You know what takashi i’m going to miss this place, sure it was boring but it was peaceful',
		'That is before our eyes were opened ',

		'We have only been living here for a few years',
		'At Least this way we leave with a bang',

		'Hahahaha i havnt heard a joke from you in a long time takashi',
		'Either way we are nearly there are you ready?',

		'Yeah let’s do this',

		'Takashi and kira approach and apartment it looks bland and nothing unusual',

		'wait , are you serious! This is just a normal apartment',

		'Is it?',
		'This is the place',

		'WAIT!',
		'How do we know for certain?',

		'I suppose we don’t',

		'Let me check inside ',

		'ok be careful',
		'I’ll plant the explosives while i wait',

		'Don’t do anything hasty',

		'Takashi approaches the front of the apartment and hears a voice that sounds like it’s on the phone',

		'What do you mean takashi is not at his apartment he finished work hours ago!',

		'“KIRA WAS RIGHT!”',

		'He has to be taken care of along with that nosy kid, Kira, we must not lose our secrecy, all the patients have to be removed or it all comes back on us',

		'“Are we the patients?”',

		'TAKASHI starts to shake realising the reality of the situation and makes his way back to kira',

		'So what happened is it the right place',

		'…….yeah it’s the right place',

		'Don’t worry this should slow them down while we get our footing some place else',

		'Kira lets off the explosive as they walk away ',
		'Takashi and kira then catch the train to anywhere but here',
		

	];

	//make sure too associate with storyline
	let charAndLocation = [
		'&nbsp',
		'Takashi',
		'Takashi',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Kira',
		'Takashi',
		'&nbsp',
		'&nbsp',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Kira',
		'Takashi',
		'&nbsp',
		'Kira',
		'Takashi',
		'Kira',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'&nbsp',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'&nbsp',
		'&nbsp',
		'MKManifest',
		'MKManifest',
		'MKManifest',
		'MKManifest',
		'Takashi',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'&nbsp',
		'Takashi',
		'Kira',
		'Kira',
		'Takashi',
		'Kira',
		'&nbsp',
		'Messageboard',
		'Messageboard',
		'Messageboard',
		'Messageboard',
		'Messageboard',
		'&nbsp',
		'Kira',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'&nbsp',
		'Takashi',
		'Kira',
		'Takashi',
		'&nbsp',
		'Kira',
		'Kira',
		'Kira',
		'Takashi',
		'Takashi',
		'Kira',
		'Kira',
		'Takashi',
		'&nbsp',
		'Takashi',
		'Kira',
		'Kira',
		'Takashi',
		'Takashi',
		'Kira',
		'Takashi',
		'Kira',
		'Kira',
		'Takashi',
		'&nbsp',
		'Mystery Voice',
		'Takashi',
		'Mystery Voice',
		'Takashi',
		'&nbsp',
		'Kira',
		'Takashi',
		'Kira',
		'&nbsp',
		'&nbsp',
		'&nbsp'
	];

	//add more using ,''
	let decision = [
		''
	];

	//links for decision, likely only use first 2
	let link1 = 'credits.html';
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