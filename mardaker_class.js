var LivingCreature = require("./class.js")
module.exports=class Mardaker extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 15;
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 30) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var mardaker = new Mardaker(newX, newY, 5)
            mardakerArr.push(mardaker)
        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy -= 3
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    move1() {

        var empty1 = random(this.chooseCell(1));
        this.energy -= 3

        if (empty1) {

            var newX = empty1[0]
            var newY = empty1[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
        }

    }
    eat() {
        var food = random(this.chooseCell(4))

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 5
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in mardakerArr) {
                if (mardakerArr[i].x == this.x && mardakerArr[i].y == this.y) {
                    mardakerArr.splice(i, 1)
                }
            }
        }
    }

}