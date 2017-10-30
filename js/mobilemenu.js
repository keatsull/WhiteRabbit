$(document).ready(function(e){

	$('#mobileMenuContainer').hide();

	$("#mobileMenuBtn").click(function(){
    	$('#mobileMenuOverlay').css("visibility", "visible");
        $('#mobileMenuOverlay').delay(0).animate({'opacity': '1'}, 300);
        $('#mobileMenuContainer').delay(300).slideToggle("slow", function() {
        });
    });

    $("#mobileCloseBtn").click(function(){
    	$('#mobileMenuContainer').delay(0).slideToggle(300, function() {
    		$('#mobileMenuOverlay').delay(0).animate({'opacity': '0'}, 300);
        	$('#mobileMenuOverlay').delay(300).css("visibility", "hidden");
        });
    });
});