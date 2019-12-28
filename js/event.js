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
// mobile event
$(document).on("touchstart",startTouch);
$(document).on("touchmove",moveTouch);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            fusionHorizontal(3, 2, 1, 0);
            postMoove();
        } else {
            // swiped right
            fusionHorizontal(0, 1, 2, 3);
            postMoove();
        }
    } else {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
            verticalFusion(3, 2, 1, 0);
            postMoove();
        } else {
            // swiped down
            verticalFusion(0, 1, 2, 3);
            postMoove();
        }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}