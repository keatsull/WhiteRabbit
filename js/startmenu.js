/* Created by Keaten Sullivan  */

$(document).ready(function(e){

    $("#startMenuLoadBtn").click(function(){
        loadGame();
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