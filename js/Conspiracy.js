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

		'**Takashi finishes work and starts to walk to Kiras university**', //0

		'“I hope this is important, I could of asked Sora out to the cafe after work!”',

		'“From what I saw last night, this Destined cult seem insane and also seem to know what the true nature of the string that I see”', //2

		'“I better let Kira know I am going to his university now”',

		'**Takashi pulls out phone and starts massaging Kira**', //4

		'Message: Hey Kira, omw to the uni now, you would not believe it.. But I got her number today!',

		'Message: Yeah, about that….... Nvm we will talk when you arrive.', //6

		'“I thought he would of been happier for me, maybe he has discovered something doing research that got him down”',

		'**Takashi puts away his phone and patiently walks to the university**', //8

		'**Takashi arrives at the university and enters the library**',

 		'“Kira always spends most of his time in the library. Though not on the things a student should be doing, mostly looking up crazy conspiracy theories, I’m amazed he get’s high marks”', //10

		'**Takashi spots Kira in the corner hardly visible in front of one of the public computers**',

		'Hi kira, So what did you want to talk about?', //12

		'Grab a seat, I’ll show you.',

		'“As blunt as always”', //14

		'**Takashi grabs a seat and looks at the computer screen while listening to Kira**',

		'So I went digging last night and found a lot of interesting information surrounding the destined organisation.', //16

		'Organisation? I thought it was a cult.',

		'Yeah, that’s what I thought too, until I hacked the website.', //18

		'I found that the site was getting funding from an organisation called the “International Committee of 9” and I mean a lot of funding. Like 6 digit funds, happening multiple times over the past 6 months.',

		'Yeah, but what does this have to do with us?', //20

		'It has everything to do with us as the destined hunt fate deniers like us. For some reason, they think we are dangerous.',

		'Why? All we can do is see manifestations on people.', //22

		'Apparently that’s not all we can do, I found some documents on the “International Committee of 9”. They were behind password protection, but not hard to access if you know what you are doing.',

		'“It is like Kira does not know there is a law against this stuff” ', //24

		'The document states that there have been many people which have prevented “world unification” whatever that means, they even have a list of names, and guess what they call them….fate deniers.',

		'**Kira pulls up a document with many names of dictators and assassinated officials all over the world, even presidents of countries that were later invaded**', //26

		'This is some heavy stuff Kira, Are you sure we should be delving into this?',

		'I was feeling the same thing, but at this point I no longer care about consequences, I’m sick of not knowing what these experiences we are having are.', //28

		'As far as I can tell we are no closer to figuring that out then before.',

		'Ok then.', //30

		'**Kira pulls up a document caltled MKManifest**', 

		'The document states..', //32

		'PATIENT 1104 Inital:		Shows increased performance in both leadership and cognitive function compared to his normal counterpart, conclusions not yet made.',

		'PATIENT 1104 update 4:		Interest and passion fades when forced to comply, but when left to ones self, subject applies effort far exceeding that of the normal counterpart, conclusions not yet made.', //34

		'PATIENT 1104 update 7:		Hallucinations starting to manifest, string like object is seen on the other children, symptoms of disconnection from the others have resulted in anti-social behaviour, conclusions not yet made.',

		'PATIENT 1104 update 18:	Hallucinations have no longer any effect on the patient, but there seems to now be secrecy between the children with the patient’s activity amongst the group, conclusions not yet made.', //36

		'PATIENT 1104 final:		I.Q is 100% higher than normal humans, patient has caused a sense of uprising in all patients, extra guards were needed for security of the scientific assets, conclusion: fate deniers are an extreme risk to society and the Committee of 9 needs a special task force for immediate elimination.',

		'What on earth have you found Kira? ', //38

		'This is insane. Are you telling me that we are being hunted?',

		'The reason you passed out yesterday was because they were trying to find out if you were a fd and unfortunately it seems they now know that you are.', //40

		'How do you know that?',

		'The message board I linked to you last night, the kidnapping was for you and the reason you past out was because they manifested a fate string onto you.', //42

		'But who would of done that? It was a slow day.',

		'Can you think of anyone that was there?', //44

		'Well, there was Sora….',

		'Hmmm..', //46

		'What?',

		'I was thinking that the user called \'skylimit\' on the messageboard was her. It would make sense, since she even gave you her number only a day after you blacked out.', //48

		'It’s probably only a coincidence.',

		'I don’t think so, skylimit\'s I.P address is located in this town.', //50

		'ARE YOU SERIOUS!?',

		'Not just that, but the I.P address is sometimes logged in from this library.', //52

		'….',

		'Look behind you.', //54

		'**As Kira turns around he sees a person in the distance, it’s Sora and it seems that she goes to the same uni as Kira**',

		'SORA!', //56

		'Be quiet! Or she will see us!',

		'I never thought it was her…. But there is only one way to find out', //58

		'How?',

		'We go on the messageboard if skylimit is active and logged in from this library it must be her.', //60

		'**Kira pulls up the message board**',

		'SKYLIMIT: I confronted the subject today. Will be getting information on him in the future.', //62

		'DR CRAZE: How do you know for sure?',

		'SKYLIMIT: He has my number, he believes we are going out to a cafe, I’ll collect information then.', //64

		'DR CRAZE: Good job, and what is his name?',

		'SKYLIMIT: Takashi.', //66

		'**Kira closes down the internet and shuts down the VPN he was using and turns off the computer then turns to talk to Takashi**',

		'It would seem that you were right.', //68

		'What are we supposed to do?',

		'We have to find out more, but for now that is impossible while these people are after us', //70

		'I agree, we have to lose them',

		'Like always I’m one step ahead of you takashi', //72

		'**Kira reaches down and open a duffle bag inside is what looks like explosives**',

		'Have you lost your mind!?', //74

		'I know where their HQ is, we will hit it tonight.',

		'Ok.', //76

		'**Takashi and Kira quietly leave the library and walk towards the HQ**',

		'A lot can happen in a few days, it’s amazing….', //78

		'You know what Takashi, I’m going to miss this place, sure it was boring but at least it was peaceful.',

		'That is before our eyes were opened.', //80

		'We have only been living here for a few years.',

		'At Least this way we leave with a hell of a bang.', //82

		'Hahahaha, I haven\'t heard a joke from you in a long time Takashi!',

		'Either way, we are nearly there, are you ready?', //84

		'Yeah.. Let’s do this.',

		'**Takashi and Kira approach an apartment, it looks bland and nothing out the usual**', //86

		'Wait! Are you serious!? This is just a normal apartment..',

		'Is it?', //88

		'This is the place.',

		'WAIT!!!', //90

		'How do we know for certain?',

		'I suppose we don’t.', //92

		'Let me check inside.',

		'Ok, be careful.', //94

		'I’ll plant the explosives while I wait.',

		'Don’t do anything hasty.', //96

		'**Takashi approaches the front of the apartment and hears a voice that sounds like it’s on the phone**',

		'What do you mean takashi is not at his apartment!? He finished work hours ago!', //98

		'“KIRA WAS RIGHT!”',

		'He has to be taken care of along with that nosy kid, Kira, we must not lose our secrecy, all the patients have to be removed or it all comes back on us.', //100

		'“Are we the patients?”',

		'**Takashi starts to shake realising the reality of the situation and makes his way back to Kira**', //102

		'So.. what happened? Is it the right place?',

		'…….Yeah it’s the right place.', //104

		'Don’t worry, this should slow them down for a bit while we get our footing somewhere else.',

		'**Kira lets off the explosive as they walk away**', //106

		'**Takashi and Kira then catch the train to anywhere but here**'
		

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
		if (i >= 0 && i <= 4) {
			changeCharacter('');												//null
			changeBackground('url("./images/bgs/shop_interior1.png")');
		} 
		else if (i >= 5 && i <= 7) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//phone
		} 
		else if (i == 8 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//null
		}
		else if (i >= 9 && i <= 11 ) {
			changeBackground('url("./images/bgs/testbackground.png")');			//uni
		}
		else if (i >= 12 && i <= 30) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//kira	
		}
		else if (i >= 31 && i <= 37) {
			changeBackground('url("./images/bgs/testbackground.png")');			//computer/null
		}
		else if (i >= 38 && i <= 54) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//kira
			changeBackground('url("./images/bgs/testbackground.png")');			//uni
		}
		else if (i == 55 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//sora
		}
		else if (i >= 56 && i <= 60 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//kira
		}
		else if (i >= 61 && i <= 66) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//computer/null
			changeBackground('url("./images/bgs/testbackground.png")');
		}
		else if (i >= 67 && i <= 76) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//kira
			changeBackground('url("./images/bgs/testbackground.png")');			//uni
		}
		else if (i == 77 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//null
			changeBackground('url("./images/bgs/testbackground.png")');			//blackscreen (transistion)
		}
		else if (i >= 78 && i <= 96 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//kira
			changeBackground('url("./images/bgs/testbackground.png")');			//Hq
		}
		else if (i == 97 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//null
			changeBackground('url("./images/bgs/testbackground.png")');
		}
		else if (i >= 98 && i <= 101 ) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//shadow
			changeBackground('url("./images/bgs/testbackground.png")');			//phone
		}
		else if (i >= 102 && i <= 105) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//kira
			changeBackground('url("./images/bgs/testbackground.png")');			//hq
		}
		else if (i == 106) {
			changeCharacter('url("./images/characters/BossFinal.png")');		//Kaboom (null)
			changeBackground('url("./images/bgs/testbackground.png")');			//Special KaBOOM bg
		}
		else if (i == 107) {	
			changeBackground('url("./images/bgs/testbackground.png")');			//End screen on train
		}

		if (i == 3) {
			//playAudio('"./audio/effect/Creeky-Interior-Door.mp3"', false);
			//shakeScreen();
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