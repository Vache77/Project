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
var n = 35
var m = 35
var socket = io();

var side = 30;
function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

var button = document.getElementById("garun");
button.onclick = function () {
    socket.emit("garun")
}
var button = document.getElementById("amar");
button.onclick = function () {
    socket.emit("amar")
}
var button = document.getElementById("ashun");
button.onclick = function () {
    socket.emit("ashun")
}
var button = document.getElementById("dzmer");
button.onclick = function () {
    socket.emit("dzmer")
}
var button = document.getElementById("varaq");
button.onclick = function () {
    socket.emit('varaq')
}
function drawMatrix(arr) {
    var matrix = arr[0];
    var exanak = arr[1];

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && exanak != "dzmer") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && exanak == "dzmer") {
                fill("white");
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
            else if (matrix[y][x] == 0 && exanak != "dzmer") {
                fill("#acacac");
            }
            else if (matrix[y][x] == 0 && exanak == "dzmer") {
                fill("lightblue");
            }

            rect(x * side, y * side, side, side)
        }

    }
}
socket.on("matrix", drawMatrix)































































































