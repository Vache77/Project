var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
var n = 20
var m = 20
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function fillMatrix(n, m) {
    matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(Math.round(getRandomArbitrary(0, 5)))
        }
    }
    return matrix
}
Grass = require("./grass_class.js");
Xotaker = require("./xotaker_class.js");
Gishatich = require("./gishatich_class.js");
Mard = require("./mard_class.js");
Mardaker = require("./mardaker_class.js");

matrix = fillMatrix(n, m)
grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];
mardakerArr = []
side = 20; 
exanak = "amar";


console.log(grassArr)
console.log(xotakerArr)
console.log(Xotaker);

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


setInterval(draw, 200)
function draw() {
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
    io.sockets.emit("matrix", matrix);

}
io.on('connection', function (socket) {

socket.on('garun', function () {
    exanak = "garun";
});
socket.on('amar', function () {
    exanak = "amar";
});
socket.on('ashun', function () {
    exanak = "ashun";
});
socket.on('dzmer', function () {
    exanak = "dzmer";
});
});