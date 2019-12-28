// moove left & right
function horizontalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3) {

    //moove to tabPosition[i][3]
    if(tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove0] !== 0 && (tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] === 0)){

        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;
        horizontalPlacement(i, maxMoove3, maxMoove0);
    } else if(tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove1] !== 0 && tabPosition[i][maxMoove2] === 0){

        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove1];
        tabPosition[i][maxMoove1] = 0;
        horizontalPlacement(i, maxMoove3, maxMoove1);
    }else if (tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove2] !== 0){

        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove2];
        tabPosition[i][maxMoove2] = 0;
        horizontalPlacement(i, maxMoove3, maxMoove2);
    }

    //moove to tabPosition[i][2]
    if(tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove0] !== 0 && tabPosition[i][maxMoove1] === 0){

        tabPosition[i][maxMoove2] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;
        horizontalPlacement(i, maxMoove2, maxMoove0);
    }else if(tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] !== 0 ){

        tabPosition[i][maxMoove2] = tabPosition[i][maxMoove1];
        tabPosition[i][maxMoove1] = 0;
        horizontalPlacement(i, maxMoove2, maxMoove1);
    }

    //moove to tabPosition[i][1]
    if(tabPosition[i][maxMoove1] === 0 && tabPosition[i][maxMoove0] !== 0){

        tabPosition[i][maxMoove1] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;
        horizontalPlacement(i, maxMoove1, maxMoove0);
    }
}

// moove up & down
function verticalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3) {

    //moove to tabPosition[3][i]
    if(tabPosition[maxMoove3][i] === 0 && tabPosition[maxMoove0][i] !== 0 && (tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] === 0)){

        tabPosition[maxMoove3][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;
        verticalPlacement(maxMoove3, i, maxMoove0);
    } else if(tabPosition[maxMoove3][i] === 0 && tabPosition[maxMoove1][i] !== 0 && tabPosition[maxMoove2][i] === 0){

        tabPosition[maxMoove3][i] = tabPosition[maxMoove1][i];
        tabPosition[maxMoove1][i] = 0;
        verticalPlacement(maxMoove3, i, maxMoove1);
    }else if (tabPosition[maxMoove3][i] === 0 && tabPosition[maxMoove2][i] !== 0){

        tabPosition[maxMoove3][i] = tabPosition[maxMoove2][i];
        tabPosition[maxMoove2][i] = 0;
        verticalPlacement(maxMoove3, i, maxMoove2);
    }

    //moove to tabPosition[i][2]
    if(tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove0][i] !== 0 && tabPosition[maxMoove1][i] === 0){

        tabPosition[maxMoove2][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;
        verticalPlacement(maxMoove2, i, maxMoove0);
    }else if(tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] !== 0 ){

        tabPosition[maxMoove2][i] = tabPosition[maxMoove1][i];
        tabPosition[maxMoove1][i] = 0;
        verticalPlacement(maxMoove2, i, maxMoove1);
    }

    //moove to tabPosition[i][1]
    if(tabPosition[maxMoove1][i] === 0 && tabPosition[maxMoove0][i] !== 0){
        tabPosition[maxMoove1][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;
        verticalPlacement(maxMoove1, i, maxMoove0);
    }
}