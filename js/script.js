/*
* Gérer la fusion des valeur :
* voir si les blocs touchent la limite de la zone ou le bloc touchant la limite pour savoir s'ils doivent bouger ou non puis faire spawn un bloc
* détecter les mouvements via le clavier
* à chaque fusion augmenter la variable score avec l'ajout du nombre de points lié  à la fusion des blocs
*
* Si on appuie sur la flèche du bas on compare tabPosition[0][3] avec tabPosition[1][3]  et on continue jusqu'à être en bas soit tabPosition[3][3]
* ( COMMENCER PAR LE BAS EST SUREMENT MIEUX !!! )
*
Si on a déjà effectué une fusion sur l'élément alors il ne doit plus fusionner !!
La position dans le tableau représente la position dans la surface de jeu, par exemple tab[0][0] est équivalent au div en haut à gauche
*

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
        //console.log(tabPosition);
    }

    tabPosition[x][y] = value;
    console.log(tabPosition);
    $(".tile-container").append('<div class="tile tile'+ value +' tile-position-'+ x +'-'+ y +'">'+ value + '</div>');
}
//functin de placement des tuiles ( même position que dans le tableau)
function placementTiles() {

}

$(document).keydown(function(e){

    switch (e.key) {
        case "ArrowDown":
            verticalFusion(0, 1, 2, 3);
            createNewTiles();
            break;
        case "ArrowUp":
            verticalFusion(3, 2, 1, 0);
            createNewTiles();
            break;
        case "ArrowLeft":
            fusionHorizontal(3, 2, 1, 0);
            createNewTiles();
            break;
        case "ArrowRight":
            fusionHorizontal(0, 1, 2, 3);
            createNewTiles();
            break;
        default:
            break;
    }

});
createNewTiles();
createNewTiles();