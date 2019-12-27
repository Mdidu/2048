// function moove horizontal(left & right)
function mooveHorizontal(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3) {
    //MOUVEMENT vers tabPosition[i][3]
    if(tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove0] !== 0 && (tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] === 0)){
        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;
    } else if(tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove1] !== 0 && tabPosition[i][maxMoove2] === 0){
        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove1];
        tabPosition[i][maxMoove1] = 0;
    }else if (tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove2] !== 0){
        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove2];
        tabPosition[i][maxMoove2] = 0;
    }

    //MOUVEMENT vers tabPosition[i][2]
    if(tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove0] !== 0 && tabPosition[i][maxMoove1] === 0){
        tabPosition[i][maxMoove2] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;
    }else if(tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] !== 0 ){
        tabPosition[i][maxMoove2] = tabPosition[i][maxMoove1];
        tabPosition[i][maxMoove1] = 0;
    }

    //MOUVEMENT vers tabPosition[i][1]
    if(tabPosition[i][maxMoove1] === 0 && tabPosition[i][maxMoove0] !== 0){
        tabPosition[i][maxMoove1] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;
    }
}
// function moove vertical(up & down)
function verticalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3) {
//MOUVEMENT vers tabPosition[3][i]
    if(tabPosition[maxMoove3][i] === 0 && tabPosition[maxMoove0][i] !== 0 && (tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] === 0)){

        tabPosition[maxMoove3][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;

    } else if(tabPosition[maxMoove3][i] === 0 && tabPosition[maxMoove1][i] !== 0 && tabPosition[maxMoove2][i] === 0){

        tabPosition[maxMoove3][i] = tabPosition[maxMoove1][i];
        tabPosition[maxMoove1][i] = 0;

    }else if (tabPosition[maxMoove3][i] === 0 && tabPosition[maxMoove2][i] !== 0){

        tabPosition[maxMoove3][i] = tabPosition[maxMoove2][i];
        tabPosition[maxMoove2][i] = 0;
    }

    //MOUVEMENT vers tabPosition[i][2]
    if(tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove0][i] !== 0 && tabPosition[maxMoove1][i] === 0){

        tabPosition[maxMoove2][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;

    }else if(tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] !== 0 ){

        tabPosition[maxMoove2][i] = tabPosition[maxMoove1][i];
        tabPosition[maxMoove1][i] = 0;
    }

    //MOUVEMENT vers tabPosition[i][1]
    if(tabPosition[maxMoove1][i] === 0 && tabPosition[maxMoove0][i] !== 0){
        tabPosition[maxMoove1][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;
    }
}
