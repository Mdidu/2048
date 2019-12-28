function placement(y, x, x2) {
    $(".tile-position-" + y + "-"+ x2).addClass("tile-position-" + y + "-"+ x).removeClass("tile-position-" + y + "-"+ x2);
    moovement = true;
}
function verticalPlacement(y, x, y2) {
    $(".tile-position-" + y2 + "-"+ x).addClass("tile-position-" + y + "-"+ x).removeClass("tile-position-" + y2 + "-"+ x);
    moovement = true;
}
function newValue(y, x) {
    var value = tabPosition[y][x];
    var exValue = value / 2;
    if(value === 0){
        return;
    }

    $(".tile-position-"+ y + "-" + x).removeClass("tile" + exValue).addClass("tile"+ value).text(value);
    moovement = true;
}
// function moove horizontal(left & right)
function mooveHorizontal(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3) {
    //MOUVEMENT vers tabPosition[i][3]
    if(tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove0] !== 0 && (tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] === 0)){
        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;

        placement(i, maxMoove3, maxMoove0);//removeTile(i, maxMoove0);
    } else if(tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove1] !== 0 && tabPosition[i][maxMoove2] === 0){
        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove1];
        tabPosition[i][maxMoove1] = 0;

        placement(i, maxMoove3, maxMoove1);//removeTile(i, maxMoove1);
    }else if (tabPosition[i][maxMoove3] === 0 && tabPosition[i][maxMoove2] !== 0){
        tabPosition[i][maxMoove3] = tabPosition[i][maxMoove2];
        tabPosition[i][maxMoove2] = 0;

        placement(i, maxMoove3, maxMoove2);//removeTile(i, maxMoove2);
    }

    //MOUVEMENT vers tabPosition[i][2]
    if(tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove0] !== 0 && tabPosition[i][maxMoove1] === 0){
        tabPosition[i][maxMoove2] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;

        placement(i, maxMoove2, maxMoove0);//removeTile(i, maxMoove0);
    }else if(tabPosition[i][maxMoove2] === 0 && tabPosition[i][maxMoove1] !== 0 ){
        tabPosition[i][maxMoove2] = tabPosition[i][maxMoove1];
        tabPosition[i][maxMoove1] = 0;

        placement(i, maxMoove2, maxMoove1); //removeTile(i, maxMoove1);
    }

    //MOUVEMENT vers tabPosition[i][1]
    if(tabPosition[i][maxMoove1] === 0 && tabPosition[i][maxMoove0] !== 0){
        tabPosition[i][maxMoove1] = tabPosition[i][maxMoove0];
        tabPosition[i][maxMoove0] = 0;

        placement(i, maxMoove1, maxMoove0);//removeTile(i, maxMoove0);
    }
}
// function moove vertical(up & down)
function verticalMoove(i, maxMoove0, maxMoove1, maxMoove2, maxMoove3) {
//MOUVEMENT vers tabPosition[3][i]
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

    //MOUVEMENT vers tabPosition[i][2]
    if(tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove0][i] !== 0 && tabPosition[maxMoove1][i] === 0){

        tabPosition[maxMoove2][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;
        verticalPlacement(maxMoove2, i, maxMoove0);

    }else if(tabPosition[maxMoove2][i] === 0 && tabPosition[maxMoove1][i] !== 0 ){

        tabPosition[maxMoove2][i] = tabPosition[maxMoove1][i];
        tabPosition[maxMoove1][i] = 0;
        verticalPlacement(maxMoove2, i, maxMoove1);
    }

    //MOUVEMENT vers tabPosition[i][1]
    if(tabPosition[maxMoove1][i] === 0 && tabPosition[maxMoove0][i] !== 0){
        tabPosition[maxMoove1][i] = tabPosition[maxMoove0][i];
        tabPosition[maxMoove0][i] = 0;
        verticalPlacement(maxMoove1, i, maxMoove0);
    }
}