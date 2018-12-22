var LivingCreature = require("./class.js")
module.exports=class Mard extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 7;
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
        return super.chooseCell(character)
    }
    mult() {
        var arr =this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        this.energy--
        if (empty && this.energy > 30) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var mard = new Mard(newX, newY, 4)
            mardArr.push(mard)
        }
    }
    move() {
        this.energy -= 2
        
        var arr =this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        
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
        if (exanak == "dzmer") {
            this.energy -= 3
        }
        else{
            this.energy -= 2
        }
        var arr =this.chooseCell(1)
        var empty1= arr[Math.floor(Math.random() * arr.length)]
        

        if (empty1) {

            var newX = empty1[0]
            var newY = empty1[1]
            matrix[newY][newX] = 4
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
        var arr =this.chooseCell(3)
        var food = arr[Math.floor(Math.random() * arr.length)]

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4

            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 5
            kerac_gishatic++
        }
    }
    eat1() {
        var arr =this.chooseCell(2)
        var food1 = arr[Math.floor(Math.random() * arr.length)]
        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4

            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 5
            kerac_xotaker++
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1)
                }
            }
        }
    }

}