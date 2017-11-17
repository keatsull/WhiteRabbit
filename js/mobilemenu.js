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
        storeDialogueLocation(returnLocation());
    });

    $("#mobileMenuLoadBtn").click(function(){
        loadGame();
    });

    //shows achievements
    $("#mobileMenuAchBtn").click(function() {
        //console.log("here");
        showAchievements();
        hideMobileMenu(); //hides menu
    });

    //closes achievements
    $("#achCloseBtn").click(function(){
        hideAchievements();
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

    //disable load game if it doesnt exist
    if (getSave() === null) {
        $('#mobileMenuLoadBtn').css({
            'pointer-events': 'none',
            'cursor': 'default',
            'opacity': '0.5'
        });
    } else {
        $('#mobileMenuLoadBtn').css({
            'pointer-events': 'all',
            'cursor': 'pointer',
            'opacity': '1'
        });
    }
}