$("#replay").click(reload);

$(document).keydown(function(e){

    switch (e.key) {
        case "ArrowDown":
            verticalFusion(0, 1, 2, 3);
            break;
        case "ArrowUp":
            verticalFusion(3, 2, 1, 0);
            break;
        case "ArrowLeft":
            fusionHorizontal(3, 2, 1, 0);
            break;
        case "ArrowRight":
            fusionHorizontal(0, 1, 2, 3);
            break;
        default:
            return;
            break;
    }
    postMoove();

});
function postMoove(){
    if(gameWin === false){
        win();
    }

    if(moovement === true){
        createNewTiles();
        moovement = false;
    }
    loose();
}
//mobile event
$(document).on( "swipeleft", function() {
    fusionHorizontal(3, 2, 1, 0);

    postMoove();
});
$(document).on( "swiperight", function() {
    fusionHorizontal(0, 1, 2, 3);
    postMoove();
} );

$(document).on( "swipeup", function() {
    verticalFusion(3, 2, 1, 0);
    postMoove();
} );

$(document).on( "swipedown", function() {
    verticalFusion(0, 1, 2, 3);
    postMoove();
} );