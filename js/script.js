/*
* Utiliser randomValue pour tirer qu'elle nombre aléatoire apparaîtra entre 2 et 4 ainsi que pour tirer la position où le nombre apparaitra
* Gérer la fusion des valeur :
* en additionnant les valeurs si elles sont égal et sont l'une à coté de l'autre dans le sens où l'on doit se déplacer
* tester les blocs avec les blocs alentours pour savoir si une valeur est égal à une autres pour les fusions
* voir si les blocs touchent la limite de la zone ou le bloc touchant la limite pour savoir s'ils doivent bouger ou non puis faire spawn un bloc
* détecter les mouvements via le clavier
* à chaque fusion augmenter la variable score avec l'ajout du nombre de points lié  à la fusion des blocs
*
* Si on appuie sur la flèche du bas on compare tabPosition[0][3] avec tabPosition[1][3]  et on continue jusqu'à être en bas soit tabPosition[3][3]
* ( COMMENCER PAR LE BAS EST SUREMENT MIEUX !!! )
*
Si on a déjà effectué une fusion sur l'élément alors il ne doit plus fusionner !!
La position dans le tableau représente la position dans la surface de jeu, par exemple tab[0][0] est équivalent au div en haut à gauche
Seul des 2 et des 4 apparaissent dans la surface de jeu quand on fait un mouvement
*

*/

var tabPosition = [
    [1, 0, 3, 4],
    [4, 5, 6, 7],
    [9, 0, 0, 12],
    [13, 0, 15, 16]];
var tabNbSpawn = [2, 4];
var valuePosition = [0, 1, 2, 3];
var coup = 0;
var score = 0;

function randomValue(id) {
    return id[Math.floor(Math.random() * id.length)];
}

// condition flèche droite
// a diviser en 2 function ( UNE MOUVEMENT ET UNE FUSION)
function fusionValeur() {
    // if(tabPosition[0][0] === 0 && tabPosition[0][1] === 0 && tabPosition[0][2] === 0 && tabPosition[0][3] === 0 ){
    //     return;
    // }
    for(var i = 0; i < 4; i++){
        //MOUVEMENT vers tabPosition[i][3]
        if (tabPosition[i][3] === 0 && tabPosition[i][2] !== 0){
            //tabPosition[i][2] va en tabPosition[i][3]
        } else if(tabPosition[i][3] === 0 && tabPosition[i][1] !== 0 && tabPosition[i][2] === 0){
            //tabPosition[i][1] va en tabPosition[i][3]
        }else if(tabPosition[i][3] === 0 && tabPosition[i][0] !== 0 && (tabPosition[i][2] === 0 && tabPosition[i][1] === 0)){
            //tabPosition[i][0] va en tabPosition[i][3]
        }

        // FUSION avec la valeur en position tabPosition[i][3]
        if(tabPosition[i][3] === tabPosition[i][2]){
            //on fusionne tabPosition[i][3] et tabPosition[i][2]
        }else if(tabPosition[i][3] === tabPosition[i][1] && tabPosition[i][2] === 0){
            // on fusionne tabPosition[i][3] et tabPosition[i][1]
        }else if(tabPosition[i][3] === tabPosition[i][0] && (tabPosition[i][2] === 0 && tabPosition[i][1] === 0)){
            // on fusionne tabPosition[i][3] et tabPosition[i][0] en tabPosition[i][3]
        }

        //MOUVEMENT vers tabPosition[i][2]
        if(tabPosition[i][2] === 0 && tabPosition[i][1] !== 0 ){
            //tabPosition[i][1] va en tabPosition[i][2]
        }else if(tabPosition[i][2] === 0 && tabPosition[i][0] !== 0 && tabPosition[i][1] === 0){
            //tabPosition[i][0] va en tabPosition[i][2]
        }

        // FUSION avec la valeur en position tabPosition[i][2]
        if(tabPosition[i][2] === tabPosition[i][1]){
            //on fusionne tabPosition[i][2] et tabPosition[i][1]
        }else if(tabPosition[i][2] === tabPosition[i][0] && tabPosition[i][1] === 0){
            // on fusionne tabPosition[i][2] et tabPosition[i][0]
        //    tabPosition[i][2] vaudra le res et tabPosition[i][0] vaudra 0
        }

        //MOUVEMENT vers tabPosition[i][1]
        if(tabPosition[i][1] === 0 && tabPosition[i][0] !== 0){
            //tabPosition[i][0] va en tabPosition[i][1]
        }

        // FUSION avec la valeur en position tabPosition[i][1]
        if(tabPosition[i][1] === tabPosition[i][0]){
            //on fusionne tabPosition[i][1] et tabPosition[i][0]
        }

    }

}
// function de création des tuiles
function createTiles() {
    var value = 0;
    if(coup < 4){
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
    //TODO = Créer les classe position pour placer les blocs !!
    $(".tile-container").append('<div class="tile tile'+ value +' tile-position-'+ x +'-'+ y +'">'+ value + '</div>');
}
//functin de placement des tuiles ( même position que dans le tableau)
function placementTiles() {

}
createTiles();
createTiles();

fusionValeur();