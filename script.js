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
var socket = io();

var side = 20;
function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

var button = document.getElementById("garun");
button.onclick = function(){
    socket.emit("garun")
}
var button = document.getElementById("amar");
button.onclick = function(){
    socket.emit("amar")
}
var button = document.getElementById("ashun");
button.onclick = function(){
    socket.emit("ashun")
}
var button = document.getElementById("dzmer");
button.onclick = function(){
    socket.emit("dzmer")
}
function drawMatrix(matrix) {


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
}
socket.on("matrix", drawMatrix)































































































