/* Created by Keaten Sullivan  */
$(document).ready(function(e){

    //get current location
    var loc = window.location.href;
    var local = loc.split('/').pop();
    //console.log(local);

    //if on novel.html we will show the help files
    if(local == "novel.html") {
        $('#helpOverlay').css("visibility", "visible");
            $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
            getChoices();
    }

    //show help menu
    /*$("#menuHelpBtn").click(function(){
    	$('#helpOverlay').css("visibility", "visible");
        $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
        getChoices();
    });*/

    //shows help menu from mobile button
    $("#mobileMenuHelpBtn").click(function(){
        $('#helpOverlay').css("visibility", "visible");
        $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
        hideMobileMenu();
        getChoices();
    });

    //shows help menu from desktop menu
    $("#menuHelpButton").click(function(){
        $('#helpOverlay').css("visibility", "visible");
        $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
        hideMenu();
        getChoices();
    });

    //closes helpmenu
    $("#closeBtn").click(function(){
        $('#helpOverlay').delay(0).animate({'opacity': '0'}, 300);
        $('#helpOverlay').delay(300).css("visibility", "hidden");
    });


    //checks if there are choices on the display, if so shows a help overlay on top
    function getChoices() {

    	$('#helpOptions').html('');  //empty

    	var count = $('.conversationContainer .optionContainer').children().length

    	for (var i = 0; i < count; i++) {
    		var x = i+1
    		var str = x.toString()
    		$('#helpOptions').append('<a href=""><h3>Choice Option '+str+'</h3></a>'); 
    	}

    	var newCount = $('#helpOptions').children().length

    	if (newCount > 0 && $('.optionContainer').css("visibility") == "visible") {
    		$('#optionsTitle').css("visibility", "visible");
    	} else {
    		$('#optionsTitle').css("visibility", "hidden");
    	}

    }
});