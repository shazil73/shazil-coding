class Pen {
    constructor(size, color, type, run,) {
        this.size = size
        this.color = color
        this.type = type
        this.run = run
    }
    write(){
        console.log(this.ability)
    }

}
class Pencil extends Pen {
    constructor(size, color, type, run, ability) {
        super(size, color, type, run)
        this.ability = ability
    }
    abilityToWrite() {
        console.log(this.ability)
    }
}

var mypen = new Pen(10, "blue", "gel", "writing smoothly", "cannot erase")
var mypencil = new Pencil(5, "yellow", "graphite", "writing smoothly", "can erase")
console.log(mypen.write())
console.log(mypencil.abilityToWrite())