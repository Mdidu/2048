
/*
* Modifier function fusion pour ajouter une classe pour supprimer un des éléments fusioné
* Modifier function moove pour modifier la classe position perdre l'ancienne pour ajouter la nouvelle
*
* */

// function fusion horizontal(left & right)
function fusionHorizontal(maxMoove0, maxMoove1, maxMoove2, maxMoove3) {

    for(var i = 0; i < 4; i++){
        // FUSION avec la valeur en position tabPosition[i][3]
        if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove2]){
            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove2];
            tabPosition[i][maxMoove2] = 0;

        } else if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove1] && tabPosition[i][maxMoove2] === 0){
            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove1];
            tabPosition[i][maxMoove1] = 0;

        } else if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove0] && (tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] === 0)){
            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove0];
            tabPosition[i][maxMoove0] = 0;
        }

        // FUSION avec la valeur en position tabPosition[i][2]
        if(tabPosition[i][maxMoove2] === tabPosition[i][maxMoove1]){
            tabPosition[i][maxMoove2] = tabPosition[i][maxMoove2] + tabPosition[i][maxMoove1];
            tabPosition[i][maxMoove1] = 0;

        }else if(tabPosition[i][maxMoove2] === tabPosition[i][maxMoove0] && tabPosition[i][maxMoove1] === 0){
            tabPosition[i][maxMoove2] = tabPosition[i][maxMoove2] + tabPosition[i][maxMoove0];
            tabPosition[i][maxMoove0] = 0;
        }

        // FUSION avec la valeur en position tabPosition[i][1]
        if(tabPosition[i][maxMoove1] === tabPosition[i][maxMoove0]){
            tabPosition[i][maxMoove1] = tabPosition[i][maxMoove1] + tabPosition[i][maxMoove0];
            tabPosition[i][maxMoove0] = 0;
        }
        mooveHorizontal(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3);
    }
    ++hit;
}
// function fusion vertical(up & down)
function verticalFusion(maxMoove0, maxMoove1, maxMoove2, maxMoove3) {
    for(var i = 0; i < 4; i++){

        // FUSION avec la valeur en position tabPosition[i][3]
        if(tabPosition[maxMoove3][i] === tabPosition[maxMoove2][i]){
            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove2][i];
            tabPosition[maxMoove2][i] = 0;

        } else if(tabPosition[maxMoove3][i] === tabPosition[maxMoove1][i] && tabPosition[maxMoove2][i] === 0){
            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove1][i];
            tabPosition[maxMoove1][i] = 0;

        } else if(tabPosition[maxMoove3][i] === tabPosition[maxMoove0][i] && (tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] === 0)){
            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove0][i];
            tabPosition[maxMoove0][i] = 0;
        }

// FUSION avec la valeur en position tabPosition[i][2]
        if(tabPosition[maxMoove2][i] === tabPosition[maxMoove1][i]){
            tabPosition[maxMoove2][i] = tabPosition[maxMoove2][i] + tabPosition[maxMoove1][i];
            tabPosition[maxMoove1][i] = 0;

        }else if(tabPosition[maxMoove2][i] === tabPosition[maxMoove0][i] && tabPosition[maxMoove1][i] === 0){
            tabPosition[maxMoove2][i] = tabPosition[maxMoove2][i] + tabPosition[maxMoove0][i];
            tabPosition[maxMoove0][i] = 0;
        }

        // FUSION avec la valeur en position tabPosition[1][]
        if(tabPosition[maxMoove1][i] === tabPosition[maxMoove0][i]){
            tabPosition[maxMoove1][i] = tabPosition[maxMoove1][i] + tabPosition[maxMoove0][i];
            tabPosition[maxMoove0][i] = 0;
        }

        verticalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3);
    }
    ++hit;
}