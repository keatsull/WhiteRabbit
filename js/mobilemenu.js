/* Created by Keaten Sullivan  */
$(document).ready(function(e){

    //hides mobile menu
	$('#mobileMenuContainer').hide();

    //click hamburger icon to show mobile menu
	$("#mobileMenuBtn").click(function(){
    	showMobileMenu();
    });

    //close mobile menu
    $("#mobileCloseBtn").click(function(){
    	hideMobileMenu();
    });

    //save game
    $("#mobileMenuSaveBtn").click(function(){
        saveGame(window.location.pathname);
        storeDialogueLocation(returnLocation());
    });

    //load game
    $("#mobileMenuLoadBtn").click(function(){
        loadGame();
    });

    //shows achievements
    $("#mobileMenuAchBtn").click(function() {
        console.log("here");
        showAchievements();
        hideMobileMenu(); //hides menu
    });

    //closes achievements
    $("#achCloseBtn").click(function(){
        hideAchievements();
    });

    //hide menu
    $('#menuContainer').hide();

    //show menu on click
    $("#menuBtn").click(function(){
        showMenu();
    });

    //hide menu on close icon click
    $("#menuCloseButton").click(function(){
        hideMenu();
    });

    //hide menu on close button click
    $("#menuCloseButton2").click(function(){
        hideMenu();
    });

    //save the game
    $("#menuSaveButton").click(function(){

        saveGame(window.location.pathname);

        storeDialogueLocation(returnLocation());

    });


    //load the game
    $("#menuLoadButton").click(function(){

        loadGame();

    });


    //shows achievements
    $("#menuAchButton").click(function() {
        //console.log("here");
        showAchievements();
        hideMenu(); //hides menu

    });
});

//hides the mobile menu
function hideMobileMenu() {
    $('#mobileMenuContainer').slideUp("fast", function() {});
    $('#mobileMenuOverlay').delay(0).animate({'opacity': '0'}, 300);
    $('#mobileMenuOverlay').delay(300).css("visibility", "hidden");
}

//hides the desktop menu
function hideMenu() {
    $('#menuContainer').slideUp("fast", function() {});
    $('#menuOverlay').delay(0).animate({'opacity': '0'}, 300);
    $('#menuOverlay').delay(300).css("visibility", "hidden");
}

//shows the mobile menu
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

//show menu
function showMenu() {

    $('#menuOverlay').css("visibility", "visible");

    $('#menuOverlay').delay(0).animate({'opacity': '1'}, 300);

    $('#menuContainer').delay(300).slideDown("slow", function() {});

    //disable load game if it doesnt exist
    if (getSave() === null) {

        $('#MenuLoadBtn').css({
            'pointer-events': 'none',
            'cursor': 'default',
            'opacity': '0.5'

        });

    } else {

        $('#MenuLoadBtn').css({
            'pointer-events': 'all',
            'cursor': 'pointer',
            'opacity': '1'

        }); 
    }

}