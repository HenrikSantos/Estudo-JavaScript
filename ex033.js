//como usar Get e Set


class Square{
    constructor(_side){
        this.side = _side
        this.numOfRequestForArea = 0
    }

    get area (){
        this.numOfRequestForArea++
        return this.side**2
    }
    set area (_area){
        this.side = Math.sqrt(_area);
    }
}

let square01 = new Square(2)

console.log(square01.area)

square01.area = 25

console.log(square01.side)
console.log(square01.area)

console.log(square01.area)
console.log(square01.area)
console.log(square01.area)
console.log(square01.area)

console.log(square01.numOfRequestForArea)

