/* Created by Keaten Sullivan  */

$(document).ready(function(e){

    //load game
    $("#startMenuLoadBtn").click(function(){
        loadGame();
    });

    //show the achievements after button click
    $("#startMenuAchBtn").click(function(){
        showAchievements();
    });

    //close the achievements panel
    $("#achCloseBtn").click(function(){
        hideAchievements();
    });

    //checks to see if its the first time we have played, if so show help
    $("#startStoryBtn").click(function(){
        if (getFirstLoad() === null || !getFirstLoad()) {
            window.location.href = 'novel.html';
        } else {
            window.location.href = 'choice1.html';
        }
    });

    //disable load game if it doesnt exist
    if (getSave() === null) {
        $('#startMenuLoadBtn').css({
            'pointer-events': 'none',
            'cursor': 'default',
            'opacity': '0.5'
        });
    } else {
        $('#startMenuLoadBtn').css({
            'pointer-events': 'all',
            'cursor': 'pointer',
            'opacity': '1'
        });
    }
});