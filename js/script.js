/*
TODO = function loose à faire
 rendre le jeu plus esthétique CSS !! + animation
 rendre responsive
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
    console.log(tabPosition);
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
            }
        }
    }
}
function loose(){
    $("#res").text("Vous avez perdu !");
    //vérifier que plus aucun mouvement n'est possible
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