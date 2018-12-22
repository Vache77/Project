var LivingCreature = require("./class.js")
module.exports = class Grass extends LivingCreature {

    mult() {
        if (exanak != "dzmer") {
            var arr = this.chooseCell(0)
            var empty = arr[Math.floor(Math.random() * arr.length)]
            this.multiply++
            if (empty && this.multiply < 4) {
                var newX = empty[0]
                var newY = empty[1]
                matrix[newY][newX] = 1
                var gr = new Grass(newX, newY, 1)
                grassArr.push(gr)
                nor_xot ++
            }
        }

    }
}
