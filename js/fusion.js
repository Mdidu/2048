// function fusion horizontal(left & right)
function fusionHorizontal(maxMoove0, maxMoove1, maxMoove2, maxMoove3) {

    for(var i = 0; i < 4; i++){
        // FUSION avec la valeur en position tabPosition[i][3]
        if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove2]){
            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove2];
            newValue(i, maxMoove3, tabPosition[i][maxMoove2]);
            tabPosition[i][maxMoove2] = 0;
            removeTile(i, maxMoove2);
            scoring(tabPosition[i][maxMoove3]);

        } else if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove1] && tabPosition[i][maxMoove2] === 0){
            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove1];
            newValue(i, maxMoove3, tabPosition[i][maxMoove1]);
            tabPosition[i][maxMoove1] = 0;
            removeTile(i, maxMoove1);
            scoring(tabPosition[i][maxMoove3]);

        } else if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove0] && (tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] === 0)){
            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove0];
            newValue(i, maxMoove3, tabPosition[i][maxMoove0]);
            tabPosition[i][maxMoove0] = 0;
            removeTile(i, maxMoove0);
            scoring(tabPosition[i][maxMoove3]);
        }

        // FUSION avec la valeur en position tabPosition[i][2]
        if(tabPosition[i][maxMoove2] === tabPosition[i][maxMoove1]){
            tabPosition[i][maxMoove2] = tabPosition[i][maxMoove2] + tabPosition[i][maxMoove1];
            newValue(i, maxMoove2, tabPosition[i][maxMoove1]);
            tabPosition[i][maxMoove1] = 0;
            removeTile(i, maxMoove1);
            scoring(tabPosition[i][maxMoove2]);

        }else if(tabPosition[i][maxMoove2] === tabPosition[i][maxMoove0] && tabPosition[i][maxMoove1] === 0){
            tabPosition[i][maxMoove2] = tabPosition[i][maxMoove2] + tabPosition[i][maxMoove0];
            newValue(i, maxMoove2, tabPosition[i][maxMoove0]);
            tabPosition[i][maxMoove0] = 0;
            removeTile(i, maxMoove0);
            scoring(tabPosition[i][maxMoove2]);
        }

        // FUSION avec la valeur en position tabPosition[i][1]
        if(tabPosition[i][maxMoove1] === tabPosition[i][maxMoove0]){
            tabPosition[i][maxMoove1] = tabPosition[i][maxMoove1] + tabPosition[i][maxMoove0];
            newValue(i, maxMoove1, tabPosition[i][maxMoove0]);
            tabPosition[i][maxMoove0] = 0;
            removeTile(i, maxMoove0);
            scoring(tabPosition[i][maxMoove1]);
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
            newValue(maxMoove3, i, tabPosition[i][maxMoove2]);
            tabPosition[maxMoove2][i] = 0;
            removeTile(maxMoove2, i);
            scoring(tabPosition[maxMoove3][i]);

        } else if(tabPosition[maxMoove3][i] === tabPosition[maxMoove1][i] && tabPosition[maxMoove2][i] === 0){
            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove1][i];
            newValue(maxMoove3, i, tabPosition[i][maxMoove1]);
            tabPosition[maxMoove1][i] = 0;
            removeTile(maxMoove1, i);
            scoring(tabPosition[maxMoove3][i]);

        } else if(tabPosition[maxMoove3][i] === tabPosition[maxMoove0][i] && (tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] === 0)){
            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove0][i];
            newValue(maxMoove3, i, tabPosition[i][maxMoove0]);
            tabPosition[maxMoove0][i] = 0;
            removeTile(maxMoove0, i);
            scoring(tabPosition[maxMoove3][i]);
        }

// FUSION avec la valeur en position tabPosition[i][2]
        if(tabPosition[maxMoove2][i] === tabPosition[maxMoove1][i]){
            tabPosition[maxMoove2][i] = tabPosition[maxMoove2][i] + tabPosition[maxMoove1][i];
            newValue(maxMoove2, i, tabPosition[i][maxMoove1]);
            tabPosition[maxMoove1][i] = 0;
            removeTile(maxMoove1, i);
            scoring(tabPosition[maxMoove2][i]);

        }else if(tabPosition[maxMoove2][i] === tabPosition[maxMoove0][i] && tabPosition[maxMoove1][i] === 0){
            tabPosition[maxMoove2][i] = tabPosition[maxMoove2][i] + tabPosition[maxMoove0][i];
            newValue(maxMoove2, i, tabPosition[i][maxMoove0]);
            tabPosition[maxMoove0][i] = 0;
            removeTile(maxMoove0, i);
            scoring(tabPosition[maxMoove2][i]);
        }

        // FUSION avec la valeur en position tabPosition[1][]
        if(tabPosition[maxMoove1][i] === tabPosition[maxMoove0][i]){
            tabPosition[maxMoove1][i] = tabPosition[maxMoove1][i] + tabPosition[maxMoove0][i];
            newValue(maxMoove1, i, tabPosition[i][maxMoove0]);
            tabPosition[maxMoove0][i] = 0;
            removeTile(maxMoove0, i);
            scoring(tabPosition[maxMoove1][i]);
        }
        verticalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3);
    }
    ++hit;
}