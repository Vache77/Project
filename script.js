// var matrix = [
//      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//      [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
//      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
//      [0,0,4,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,4,0,0],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
//      [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
//      [0,0,0,5,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0],
//      [0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0],
//      [0,0,0,0,0,0,4,0,0,2,2,2,2,2,2,0,0,0,0,0],
//      [0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,4,0,0,0],
//      [0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0],
//      [0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
//      [0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
//      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ]
var n = 20
var m = 20
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function fillMatrix(n, m) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(Math.round(getRandomArbitrary(0, 5)))
        }
    }
    return matrix
}
var matrix = fillMatrix(n, m)
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var mardakerArr = []
var side = 20;



console.log(grassArr)
console.log(xotakerArr)
console.log(Xotaker);
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y, 2)
                xotakerArr.push(xt)

            }
            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y, 3)
                gishatichArr.push(gt)

            }
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y, 4)
                mardArr.push(mard)

            }
            else if (matrix[y][x] == 5) {
                var mardaker = new Mardaker(x, y, 5)
                mardakerArr.push(mardaker)

            }


        }
    }
}


function draw() {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                
                fill("green");

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x*side,y*side,side,side)
        }

    }
        for (var i in grassArr) {
            grassArr[i].mult()
        }
        for (var i in xotakerArr) {
            xotakerArr[i].eat()
            xotakerArr[i].move()
            xotakerArr[i].mult()
            xotakerArr[i].die()
        }
        for (var i in gishatichArr) {
            gishatichArr[i].eat()
            gishatichArr[i].move()
            gishatichArr[i].mult()
            gishatichArr[i].die()
        }
        for (var i in mardArr) {
            mardArr[i].eat()
            mardArr[i].eat1()
            mardArr[i].move()
            mardArr[i].move1()
            mardArr[i].mult()
            mardArr[i].die()
        }
        for (var i in mardakerArr) {
            mardakerArr[i].eat()
            mardakerArr[i].move()
            mardakerArr[i].move1()
            mardakerArr[i].mult()
            mardakerArr[i].die()
        }

}































































































