$(document).ready(function(e){

    $('#menuContainer').hide();

	$("#menuBtn").click(function(){
    	$('#menuOverlay').css("visibility", "visible");
        $('#menuOverlay').delay(0).animate({'opacity': '1'}, 300);
        $('#menuContainer').delay(300).slideDown("slow", function() {
        });
    });

    $("#mobileCloseBtn").click(function(){
    	$('#menuContainer').slideUp("fast", function() {});
        $('#menuOverlay').delay(0).animate({'opacity': '0'}, 300);
        $('#menuOverlay').delay(300).css("visibility", "hidden");
    });
});