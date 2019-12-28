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
// $(document).on( "swipedown", function() {
//     verticalFusion(0, 1, 2, 3);
//     postMoove();
//     alert("swipe down");
// });
// $(document).on( "swipeup", function() {
//     verticalFusion(3, 2, 1, 0);
//     postMoove();
//     alert("swipe up");
// } );

$('#main').swiperight(function() {

    fusionHorizontal(0, 1, 2, 3);
    postMoove();
    alert("swipe right");
} );

$('#main').swipeleft(function() {

    fusionHorizontal(3, 2, 1, 0);
    postMoove();
    alert("swipe left");
} );

// let touchstartX = 0;
// let touchstartY = 0;
// let touchendX = 0;
// let touchendY = 0;
//
// const gestureZone = document.getElementById('main');
//
// gestureZone.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
// }, false);
//
// gestureZone.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
// }, false);
//
// function handleGesture() {
//     if (touchendX <= touchstartX) {
//         fusionHorizontal(3, 2, 1, 0);
//         postMoove();
//     }
//
//     if (touchendX >= touchstartX) {
//         fusionHorizontal(0, 1, 2, 3);
//         postMoove();
//     }
//
//     if (touchendY <= touchstartY) {
//         verticalFusion(3, 2, 1, 0);
//         postMoove();
//     }
//
//     if (touchendY >= touchstartY) {
//         verticalFusion(0, 1, 2, 3);
//         postMoove();
//     }
//
//     if (touchendY === touchstartY) {
//         console.log('Tap');
//     }
// }