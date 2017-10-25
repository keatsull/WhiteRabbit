
$(document).ready(function(e){
    $("#menuBtn").click(function(){
    	$('#helpOverlay').css("visibility", "visible");
        $('#helpOverlay').delay(0).animate({'opacity': '1'}, 300);
        getChoices();
    });

    $("#closeBtn").click(function(){
        $('#helpOverlay').delay(0).animate({'opacity': '0'}, 300);
        $('#helpOverlay').delay(300).css("visibility", "hidden");
    });

    function getChoices() {

    	$('#helpOptions').html('');  //empty

    	var count = $('.optionContainer').children().length

    	for (var i = 0; i < count; i++) {
    		var x = i+1
    		var str = x.toString()
    		$('#helpOptions').append('<a href="#"><h3>Choice Option '+str+'</h3>'); 
    	}

    	var newCount = $('#helpOptions').children().length

    	if (newCount > 0) {
    		$('#optionsTitle').css("visibility", "visible");
    	} else {
    		$('#optionsTitle').css("visibility", "hidden");
    	}

    }
});