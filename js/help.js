
$(document).ready(function(e){
    $("#menuBtn").click(function(){
    	$('#helpOverlay').css("visibility", "visible");
        $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
        getChoices();
    });

    $("#mobileMenuHelpBtn").click(function(){
        $('#helpOverlay').css("visibility", "visible");
        $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
        $('#mobileMenuContainer').delay(0).slideToggle(0, function() {
            $('#mobileMenuOverlay').delay(0).animate({'opacity': '0'}, 300);
            $('#mobileMenuOverlay').delay(0).css("visibility", "hidden");
        });
        getChoices();
    });

    $("#closeBtn").click(function(){
        $('#helpOverlay').delay(0).animate({'opacity': '0'}, 300);
        $('#helpOverlay').delay(300).css("visibility", "hidden");
    });

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