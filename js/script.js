var tabPosition = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
var tabNbSpawn = [2, 4];
var valuePosition = [0, 1, 2, 3];
var hit = 0;
var score = 0;
var moovement = false;
var gameWin = false;

function randomValue(id) {
    return id[Math.floor(Math.random() * id.length)];
}

function createNewTiles() {
    var value = 0;
    if(hit < 4){
        value = 2;
    }else {
        value = randomValue(tabNbSpawn);
    }
    // pulls the values to search for the position in the array tabPosition
    var x = randomValue(valuePosition);
    var y = randomValue(valuePosition);

    //If the value in tabPosition = 0, search new position in tabPosition
    while(tabPosition[x][y] !== 0){
        x = randomValue(valuePosition);
        y = randomValue(valuePosition);
    }

    tabPosition[x][y] = value;

    $(".tile-container").append('<div class="tile tile'+ value +' tile-position-'+ x +'-'+ y +'">'+ value + '</div>');
}

function removeTile(y, x) {
    $(".tile-position-"+ y + "-" + x).remove();
}

// changes class tile-position
function horizontalPlacement(y, x, x2) {
    $(".tile-position-" + y + "-"+ x2).addClass("tile-position-" + y + "-"+ x).removeClass("tile-position-" + y + "-"+ x2);
    moovement = true;
}
function verticalPlacement(y, x, y2) {
    $(".tile-position-" + y2 + "-"+ x).addClass("tile-position-" + y + "-"+ x).removeClass("tile-position-" + y2 + "-"+ x);
    moovement = true;
}

// changes class tileValue (tile2 / tile4, ..., tile2048)
function newValueTile(y, x) {
    var value = tabPosition[y][x];
    var exValue = value / 2;

    if(value === 0){
        return;
    }

    $(".tile-position-"+ y + "-" + x).removeClass("tile" + exValue).addClass("tile"+ value).text(value);
    moovement = true;
}

function scoring(value) {
    score = score + value;
    $("#score").text('Score : '+ score);
}

// last turn actions
function turnEnd(){
    if(gameWin === false){
        win();
    }

    if(moovement === true){
        createNewTiles();
        moovement = false;
    }
    loose();
}

function win() {
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(tabPosition[i][j] === 2048){
                $("#res").text("Good game ! You can go on! Or replay !");
                gameWin = true;
                return;
            }
        }
    }
}

function loose(){

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(tabPosition[i][j] === 0){
                return;
            }
        }
    }

    //comparison horizontal value
    if(tabPosition[0][3] !== tabPosition[0][2] && tabPosition[0][2] !== tabPosition[0][1] && tabPosition[0][1] !== tabPosition[0][0]
        &&  tabPosition[1][3] !== tabPosition[1][2] && tabPosition[1][2] !== tabPosition[1][1] && tabPosition[1][1] !== tabPosition[1][0]
        &&  tabPosition[2][3] !== tabPosition[2][2] && tabPosition[2][2] !== tabPosition[2][1] && tabPosition[2][1] !== tabPosition[2][0]
        &&  tabPosition[3][3] !== tabPosition[3][2] && tabPosition[3][2] !== tabPosition[3][1] && tabPosition[3][1] !== tabPosition[3][0]){

        //comparison vertical value
        if(tabPosition[0][3] !== tabPosition[1][3] && tabPosition[0][2] !== tabPosition[1][2] && tabPosition[0][1] !== tabPosition[1][1] && tabPosition[0][0] !== tabPosition[1][0]
            && tabPosition[1][3] !== tabPosition[2][3] && tabPosition[1][2] !== tabPosition[2][2] && tabPosition[1][1] !== tabPosition[2][1] && tabPosition[1][0] !== tabPosition[2][0]
            && tabPosition[2][3] !== tabPosition[3][3] && tabPosition[2][2] !== tabPosition[3][2] && tabPosition[2][1] !== tabPosition[3][1] && tabPosition[2][0] !== tabPosition[3][0]){

            $("#res").text("Lost, do it again !");
        }
    }
}

function reload(){
    tabPosition = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]];
    hit = 0;
    score = 0;

    moovement = false;
    gameWin = false;

    $("#res").text("");
    $("#score").text("Score : ");
    $(".tile-container").children().remove();

    createNewTiles();
    createNewTiles();
}

createNewTiles();
createNewTiles();