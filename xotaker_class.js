
var LivingCreature = require("./class.js")

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }
    mult() {
        if (exanak != "dzmer" && exanak != "amar") {
            var arr = this.chooseCell(0)
            var empty = arr[Math.floor(Math.random() * arr.length)]

            if (empty && this.energy > 10) {
                var newX = empty[0]
                var newY = empty[1]
                matrix[newY][newX] = 2
                var xt = new Xotaker(newX, newY, 2)
                xotakerArr.push(xt)
                nor_xotaker++
            }
        }
    }
    move() {
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

        }
        this.energy--
    }
    eat() {
        var arr = this.chooseCell(1)
        var food = arr[Math.floor(Math.random() * arr.length)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY

            this.energy += 3
            xotakeri_keracy++
        }
    }
    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
    
}

