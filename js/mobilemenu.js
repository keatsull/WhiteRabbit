/* Created by Keaten Sullivan  */
$(document).ready(function(e){

	$('#mobileMenuContainer').hide();

	$("#mobileMenuBtn").click(function(){
    	showMobileMenu();
    });

    $("#mobileCloseBtn").click(function(){
    	hideMobileMenu();
    });

    $("#mobileMenuSaveBtn").click(function(){
        saveGame(window.location.pathname);
        
    });

    $("#mobileMenuLoadBtn").click(function(){
        loadGame();
    });
});

function hideMobileMenu() {
    $('#mobileMenuContainer').slideUp("fast", function() {});
    $('#mobileMenuOverlay').delay(0).animate({'opacity': '0'}, 300);
    $('#mobileMenuOverlay').delay(300).css("visibility", "hidden");
}

function showMobileMenu() {
    $('#mobileMenuOverlay').css("visibility", "visible");
    $('#mobileMenuOverlay').delay(0).animate({'opacity': '1'}, 300);
    $('#mobileMenuContainer').delay(300).slideDown("slow", function() {});
}