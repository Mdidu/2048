/*
TODO =
 animer le jeu?
 détecter les mouvements de doigt mobile ( en tout dernier !!)
*/
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
// function de création des tuiles
function createNewTiles() {
    var value = 0;
    if(hit < 4){ // à la fin des évènements clavier faire coup++;
        value = 2;
    }else {
        value = randomValue(tabNbSpawn);
    }
    // tire les valeurs qui serviront à chercher la position dans  le tableau tabPosition
    var x = randomValue(valuePosition);
    var y = randomValue(valuePosition);

    //Tant que la valeur est différente de 0 recherche une autre position pour le tableau tabPosition
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
function scoring(value) {
    score = score + value;
    $("#score").text('Score : '+ score);
}
function win() {
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(tabPosition[i][j] === 2048){
                $("#res").text("Félicitation pour votre victoire vous pouvez continuer à jouer si l'envie vous en dit !");
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

    //condition comparaison valeur horizontal
    if(tabPosition[0][3] !== tabPosition[0][2] && tabPosition[0][2] !== tabPosition[0][1] && tabPosition[0][1] !== tabPosition[0][0]
        &&  tabPosition[1][3] !== tabPosition[1][2] && tabPosition[1][2] !== tabPosition[1][1] && tabPosition[1][1] !== tabPosition[1][0]
        &&  tabPosition[2][3] !== tabPosition[2][2] && tabPosition[2][2] !== tabPosition[2][1] && tabPosition[2][1] !== tabPosition[2][0]
        &&  tabPosition[3][3] !== tabPosition[3][2] && tabPosition[3][2] !== tabPosition[3][1] && tabPosition[3][1] !== tabPosition[3][0]){
        //condition comparaison valeur vertical
        if(tabPosition[0][3] !== tabPosition[1][3] && tabPosition[0][2] !== tabPosition[1][2] && tabPosition[0][1] !== tabPosition[1][1] && tabPosition[0][0] !== tabPosition[1][0]
            && tabPosition[1][3] !== tabPosition[2][3] && tabPosition[1][2] !== tabPosition[2][2] && tabPosition[1][1] !== tabPosition[2][1] && tabPosition[1][0] !== tabPosition[2][0]
            && tabPosition[2][3] !== tabPosition[3][3] && tabPosition[2][2] !== tabPosition[3][2] && tabPosition[2][1] !== tabPosition[3][1] && tabPosition[2][0] !== tabPosition[3][0]){

            $("#res").text("Vous avez perdu !");
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