// fusion left & right
function horizontalFusion(maxMoove0, maxMoove1, maxMoove2, maxMoove3) {

    for(var i = 0; i < 4; i++){

        if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove2]){

            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove2];
            newValueTile(i, maxMoove3);

            tabPosition[i][maxMoove2] = 0;

            removeTile(i, maxMoove2);
            scoring(tabPosition[i][maxMoove3]);

        } else if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove1] && tabPosition[i][maxMoove2] === 0){

            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove1];
            newValueTile(i, maxMoove3);

            tabPosition[i][maxMoove1] = 0;

            removeTile(i, maxMoove1);
            scoring(tabPosition[i][maxMoove3]);

        } else if(tabPosition[i][maxMoove3] === tabPosition[i][maxMoove0] && (tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] === 0)){

            tabPosition[i][maxMoove3] = tabPosition[i][maxMoove3] + tabPosition[i][maxMoove0];
            newValueTile(i, maxMoove3);

            tabPosition[i][maxMoove0] = 0;

            removeTile(i, maxMoove0);
            scoring(tabPosition[i][maxMoove3]);
        }

        if(tabPosition[i][maxMoove2] === tabPosition[i][maxMoove1]){

            tabPosition[i][maxMoove2] = tabPosition[i][maxMoove2] + tabPosition[i][maxMoove1];
            newValueTile(i, maxMoove2);

            tabPosition[i][maxMoove1] = 0;

            removeTile(i, maxMoove1);
            scoring(tabPosition[i][maxMoove2]);

        }else if(tabPosition[i][maxMoove2] === tabPosition[i][maxMoove0] && tabPosition[i][maxMoove1] === 0){

            tabPosition[i][maxMoove2] = tabPosition[i][maxMoove2] + tabPosition[i][maxMoove0];
            newValueTile(i, maxMoove2);

            tabPosition[i][maxMoove0] = 0;

            removeTile(i, maxMoove0);
            scoring(tabPosition[i][maxMoove2]);
        }

        if(tabPosition[i][maxMoove1] === tabPosition[i][maxMoove0]){

            tabPosition[i][maxMoove1] = tabPosition[i][maxMoove1] + tabPosition[i][maxMoove0];
            newValueTile(i, maxMoove1);
            tabPosition[i][maxMoove0] = 0;
            removeTile(i, maxMoove0);
            scoring(tabPosition[i][maxMoove1]);
        }
        horizontalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3);
    }
    ++hit;
}

// fusion up & down
function verticalFusion(maxMoove0, maxMoove1, maxMoove2, maxMoove3) {
    for(var i = 0; i < 4; i++){

        if(tabPosition[maxMoove3][i] === tabPosition[maxMoove2][i]){

            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove2][i];
            newValueTile(maxMoove3, i);
            tabPosition[maxMoove2][i] = 0;
            removeTile(maxMoove2, i);
            scoring(tabPosition[maxMoove3][i]);

        } else if(tabPosition[maxMoove3][i] === tabPosition[maxMoove1][i] && tabPosition[maxMoove2][i] === 0){

            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove1][i];
            newValueTile(maxMoove3, i);
            tabPosition[maxMoove1][i] = 0;
            removeTile(maxMoove1, i);
            scoring(tabPosition[maxMoove3][i]);

        } else if(tabPosition[maxMoove3][i] === tabPosition[maxMoove0][i] && (tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] === 0)){

            tabPosition[maxMoove3][i] = tabPosition[maxMoove3][i] + tabPosition[maxMoove0][i];
            newValueTile(maxMoove3, i);
            tabPosition[maxMoove0][i] = 0;
            removeTile(maxMoove0, i);
            scoring(tabPosition[maxMoove3][i]);
        }

        if(tabPosition[maxMoove2][i] === tabPosition[maxMoove1][i]){

            tabPosition[maxMoove2][i] = tabPosition[maxMoove2][i] + tabPosition[maxMoove1][i];
            newValueTile(maxMoove2, i);
            tabPosition[maxMoove1][i] = 0;
            removeTile(maxMoove1, i);
            scoring(tabPosition[maxMoove2][i]);

        }else if(tabPosition[maxMoove2][i] === tabPosition[maxMoove0][i] && tabPosition[maxMoove1][i] === 0){

            tabPosition[maxMoove2][i] = tabPosition[maxMoove2][i] + tabPosition[maxMoove0][i];
            newValueTile(maxMoove2, i);
            tabPosition[maxMoove0][i] = 0;
            removeTile(maxMoove0, i);
            scoring(tabPosition[maxMoove2][i]);
        }

        if(tabPosition[maxMoove1][i] === tabPosition[maxMoove0][i]){

            tabPosition[maxMoove1][i] = tabPosition[maxMoove1][i] + tabPosition[maxMoove0][i];
            newValueTile(maxMoove1, i);
            tabPosition[maxMoove0][i] = 0;
            removeTile(maxMoove0, i);
            scoring(tabPosition[maxMoove1][i]);
        }
        verticalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3);
    }
    ++hit;
}