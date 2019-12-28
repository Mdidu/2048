// computer event
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
            horizontalFusion(3, 2, 1, 0);
            break;
        case "ArrowRight":
            horizontalFusion(0, 1, 2, 3);
            break;
        default:
            return;
            break;
    }
    turnEnd();
});

// mobile event
var gameZone = $("#gameZone");
gameZone.on("touchstart",startTouch);
gameZone.on("touchmove",moveTouch);

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
            horizontalFusion(3, 2, 1, 0);
        } else {
            // swiped right
            horizontalFusion(0, 1, 2, 3);
        }
    } else {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
            verticalFusion(3, 2, 1, 0);
        } else {
            // swiped down
            verticalFusion(0, 1, 2, 3);
        }
    }

    turnEnd();

    initialX = null;
    initialY = null;

    e.preventDefault();
}