class Grass extends LivingCreature {

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply < 4) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var gr = new Grass(newX, newY, 1)
            grassArr.push(gr)
        }
    }
}
